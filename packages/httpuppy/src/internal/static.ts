import { create_vfs, MountedVFS } from 'httpuppy-vfs';
import { color } from 'terminal-color';
import {
	ENV_DEFAULT_CONTENT_TYPE,
	ENV_REQUEST_SIGNATURE,
	ENV_TTL_DEFAULT,
	VirtualWriteableFile,
	HTTPuppyRequest,
	HTTPuppyResponse,
	HTTPServer,
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
export async function mount_vfs(
	server: HTTPServer,
	staticOptions?: UserStaticConfig
): Promise<MountedVFS> {
	if (!staticOptions?.path) {
		server._logger.error(
			'fs attempted to mount with no path set in configuration'
		);
		throw 'error: fs attempted to mount with no path set in configuration';
	}
	return await create_vfs(staticOptions.href ?? '/', staticOptions.path);

}
/**
 * @private
 * @internal
 */

 export async function apply_static_callback(
	server: HTTPServer,
	_url: string,
	static_path: string
) {
	const sConfig = { href: _url, path: static_path };
	const vfs = await mount_vfs(server, sConfig);
	server._vfs = vfs;
	server.on(ENV_REQUEST_SIGNATURE, (req: HTTPuppyRequest, res: HTTPuppyResponse) => {
		const url = req.url ?? '/';
		if(process.env.log_level && process.env.log_level === 'verbose') console.log(`${color.fg.blue('GET ')} ${url}`);
		if (url?.includes(_url)) {
			if (vfs.mounted_files.some((file) => file.hrefs.includes(url))) {
				const match = vfs.mounted_files
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
					contentType: { 'Content-Type': match.mime_type ? match.mime_type : ENV_DEFAULT_CONTENT_TYPE },
					symLink: match._abspath,
					fileName: match._filename,
					reqUrl: url,
					hrefs: match.hrefs
				};
				if (!match.text_content) {
					return vfs_stream_reader(vFile, res);
				}
				res.writeHead(200, 'ok', [['Content-Type', match.mime_type ? match.mime_type : ENV_DEFAULT_CONTENT_TYPE]] );
				return res.end(match.text_content);
			}
			else {
				res.writeHead(404, 'not found');
				res.end();
			}
			return;
		}
		setTimeout(() => {
			res.writeHead(404, 'not found');
			res.end();
		}, server.pConfig.ttl_default ?? ENV_TTL_DEFAULT * 100);

		return;
	});
}
