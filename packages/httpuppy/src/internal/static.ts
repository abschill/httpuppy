import { lookup } from 'mime-types';
import { resolve, normalize } from 'path';
import { readdirSync } from 'fs';
import {
	ENV_DEFAULT_INDEXFILE,
	ENV_DEFAULT_CONTENT_TYPE,
	ENV_TTL_DEFAULT,
	ENV_REQUEST_SIGNATURE,
	VirtualWriteableFile,
	HTTPuppyRequest,
	HTTPuppyResponse,
	is_buffer_type,
	HTTPHeader,
	HTTPServer,
	MountedFile,
	use_writer,
	VirtualFileSystem,
	vfs_stream_reader
} from '.';
export type UserStaticConfig = {
	href?: string; // prefix path to access the directory on router
	path?: string; // path on filesystem to reflect
};

/**
 * @private
 *
 */
export function index_paths(file: string, _static: UserStaticConfig): string[] {
	const pathOptions = [`${_static.href ?? ''}${file}`];
	if (file === ENV_DEFAULT_INDEXFILE) {
		pathOptions.push(`${_static.href ?? ''}`);
	}
	return pathOptions;
}
/**
 * @private
 *
 */
export function as_vfile(
	file: string,
	symLink: string,
	staticConfig: UserStaticConfig
): MountedFile {
	return <MountedFile>{
		fileName: file,
		symLink,
		contentType: <HTTPHeader>mime_type(symLink),
		hrefs: index_paths(file, staticConfig),
	};
}

/**
 * @private
 *
 */
export function mount_vfs(
	server: HTTPServer,
	staticOptions?: UserStaticConfig
): VirtualFileSystem {
	if (!staticOptions?.path) {
		server._logger.error(
			'fs attempted to mount with no path set in configuration'
		);
		throw 'error: fs attempted to mount with no path set in configuration';
	}
	const mountedPath = normalize(staticOptions.path);
	const mountedFiles = readdirSync(mountedPath).map((file) => {
		const symLink = resolve(mountedPath, file);
		return as_vfile(file, symLink, <UserStaticConfig>staticOptions);
	});
	// filesMounted is the accessible file tree that can be used against the upcoming handlers
	return {
		mountedPath,
		mountedHref: staticOptions.href ?? '/',
		mountedFiles,
	};
}

/**
 * @internal useLocalMimeType
 * @description hook for determining content type of a virtual fpath on the system
 * @param fpath the file path of the type to resolve
 * @returns the tuple representing the content type header for the static file
 */
export function mime_type(fpath: string): HTTPHeader {
	if (fpath === '')
		return {
			'Content-Type': ENV_DEFAULT_CONTENT_TYPE,
		};
	const matchType = lookup(fpath);
	return {
		'Content-Type': matchType ? matchType : ENV_DEFAULT_CONTENT_TYPE,
	};
}

/**
 * @private
 * @internal
 */

 export function apply_static_callback(
	server: HTTPServer,
	_url: string,
	static_path: string
) {
	const sConfig = { href: _url, path: static_path };
	const vfs = mount_vfs(server, sConfig);
	server._vfs = vfs;
	server.on(ENV_REQUEST_SIGNATURE, (req: HTTPuppyRequest, res: HTTPuppyResponse) => {
		const url = req.url ?? '/';
		if (url?.includes(_url)) {
			if (vfs.mountedFiles.some((file) => file.hrefs.includes(_url))) {
				const match = vfs.mountedFiles
					.filter((f) => f.hrefs.includes(url))
					.shift();
				if (!match) {
					server.diagnostics.push({
						msg: `url missed in static callback at ${url}`,
						timestamp: Date.now().toLocaleString(),
					});
					return;
				}
				const vFile: VirtualWriteableFile = {
					contentType: match.contentType,
					symLink: match.symLink,
					fileName: match.fileName,
					reqUrl: url,
					hrefs: index_paths(match.fileName, sConfig),
				};
				if (is_buffer_type(url)) {
					return vfs_stream_reader(vFile, res);
				}
				return use_writer(res, server.pConfig, {
					status: 200,
					statusText: 'ok',
					type: mime_type(match.symLink)['Content-Type'],
					virtualFile: vFile,
				});
			}
			return setTimeout(() => {
				res.end();
			}, server.pConfig.ttl_default ?? ENV_TTL_DEFAULT * 100);
		}
	});
}
