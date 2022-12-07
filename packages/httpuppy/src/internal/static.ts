import { create_nested_vfs } from 'httpuppy-vfs';
import { color } from 'terminal-color';
import {
	ENV_DEFAULT_CONTENT_TYPE,
	ENV_REQUEST_SIGNATURE,
	ENV_TTL_DEFAULT,
	VirtualWriteableFile,
	vfs_stream_reader
} from '.';
import {
	HTTPuppyRequest,
	HTTPuppyResponse,
	HTTPServer,
	MountedVFS
} from './types';

export type UserStaticConfig = {
	href?: string; // prefix path to access the directory on router
	path?: string; // path on filesystem to reflect
};

/**
 * @internal
 *
 * mounts virtual file system to the server
 *
 */
export async function $$vmount(
	server: HTTPServer,
	staticOptions?: UserStaticConfig
): Promise<MountedVFS> {
	if (!staticOptions?.path) {
		server.logger.error('fs attempted to mount with no path set in configuration');
		throw new Error('error: fs attempted to mount with no path set in configuration');
	}
	return await create_nested_vfs(staticOptions.href ?? '/', staticOptions.path);
}
/**
 * @internal
 */

export async function apply_static_callback(
	server: HTTPServer,
	_url: string,
	static_path: string
) {
	const sConfig = { href: _url, path: static_path };
	const vfs = await $$vmount(server, sConfig);
	server.vfs = vfs;
	server.on(ENV_REQUEST_SIGNATURE, (req: HTTPuppyRequest, res: HTTPuppyResponse) => {
		const url = req.url ?? '/';
		if (process.env.log_level && process.env.log_level === 'verbose')
			console.log(`${color.fg.blue('GET ')} ${url}`);
		if (url?.includes(_url)) {
			if (vfs.mounted_files.some((file) => file.hrefs.includes(url))) {
				const match = vfs.mounted_files.filter((f) => f.hrefs.includes(url)).shift();
				if (!match) {
					server.diagnostics.push({
						msg: `url missed in static callback at ${url}`,
						timestamp: Date.now().toLocaleString()
					});
					return;
				}
				const vFile: VirtualWriteableFile = {
					contentType: {
						'Content-Type': match.mime_type ? match.mime_type : ENV_DEFAULT_CONTENT_TYPE
					},
					symLink: match._abspath,
					fileName: match._filename,
					reqUrl: url,
					hrefs: match.hrefs
				};
				if (!match.text_content) {
					vfs_stream_reader(vFile, res);
				}
				res.writeHead(200, 'ok', [
					['Content-Type', match.mime_type ? match.mime_type : ENV_DEFAULT_CONTENT_TYPE]
				]);
				res.write(match.text_content);
				res.end();
				return;
			} else {
				res.writeHead(404, 'not found');
				res.end();
			}
			return;
		}
		if (server.routers.length === 0) {
			setTimeout(() => {
				res.writeHead(404, 'not found');
				res.end();
			}, server.config.ttl_default ?? ENV_TTL_DEFAULT * 100);
		}
	});
}
