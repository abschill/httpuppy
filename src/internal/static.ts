import { lookup } from 'mime-types';
import { resolve, normalize } from 'path';
import { readdirSync } from 'fs';
import {
	ENV_DEFAULT_INDEXFILE,
	ENV_DEFAULT_CONTENT_TYPE,
	HTTPHeader,
	HTTPServer,
	MountedFile,
	VirtualFileSystem,
} from '.';
export type UserStaticConfig = {
	href?: string; // prefix path to access the directory on router
	path?: string; // path on filesystem to reflect
};

/**
 * @private
 *
 */
export function indexPaths(file: string, _static: UserStaticConfig): string[] {
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
export function asVirtualFile(
	file: string,
	symLink: string,
	staticConfig: UserStaticConfig
): MountedFile {
	return <MountedFile>{
		fileName: file,
		symLink,
		contentType: <HTTPHeader>mime_type(symLink),
		hrefs: indexPaths(file, staticConfig),
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
		return asVirtualFile(file, symLink, <UserStaticConfig>staticOptions);
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
