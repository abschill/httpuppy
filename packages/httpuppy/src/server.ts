/**
 * @module useServer
 * @description core server module
 */
import {
	_use_server,
	apply_404,
	CacheSettings,
	create_server,
	create_secure_server,
	DiagnosticLog,
	https_options,
	HTTPServer,
	mount_vfs,
	indexPaths,
	HTTPuppyRequest,
	HTTPuppyResponse,
	isBufferType,
	mime_type,
	LogLevel,
	ENV_ASYNC_SIGNATURE,
	ENV_TTL_DEFAULT,
	ENV_REQUEST_SIGNATURE,
	use_config,
	use_writer,
	vfs_stream_reader,
	VirtualWriteableFile,
} from './internal';
/**
 * Config for useServer hook
 */
export interface HTTPServerOptions {
	cache?: CacheSettings; //options for caching, standard http but camelcase
	clustered?: boolean; //automatically cluster the server process to utilize multiple core ipc it doesnt do anything in x.2.z
	handler?: any; //default handler if you would like to override the request chain and handle each url manually thru the standard library
	hostname?: string; //hostname for the server itself (default: 127.0.0.1)
	log_level?: LogLevel;
	log_error_file?: string;
	log_event_file?: string;
	port?: number; //the port number to run the configuration with (default: 80)
	secure?: {
		//options for resolving the SSL cert / key
		key: string;
		cert: string;
		dhparam?: string;
	};
	ttl_default?: number;
	local_storage_path?: string; //the dir to write files uploaded from multipart forms from request
	throw_warnings?: boolean; //false = print warnings true = throw them as errors (default: false)
}

/**
 * @private
 * @internal
 */

function apply_static_callback(
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
					hrefs: indexPaths(match.fileName, sConfig),
				};
				if (isBufferType(url)) {
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

/**
 * @function useServer
 * @example
 * ```javascript
 * const app0 = useServer({ port: 3000, clustered: false });
 * const app1 = useServer({ port: 3001, clustered: true })
 *
 * ```
 * @param conf configuration options
 * @returns httpuppy server
 */
export function useServer(
	conf: HTTPServerOptions // user config for server
): HTTPServer {
	const def_event_handler = conf?.handler;
	const diagnostics: DiagnosticLog[] = [];
	const config = use_config(conf, diagnostics);
	const _server = conf.secure
		? create_secure_server(
				<https_options>conf.secure,
				def_event_handler
		)
		: create_server(def_event_handler);
	const server = _use_server(config, <HTTPServer>_server, diagnostics);
	server._logger.info(
		`logger online (child pid: ${process.pid}) (parent: ${process.ppid})`
	);
	server.on(ENV_REQUEST_SIGNATURE, (req: HTTPuppyRequest, res: HTTPuppyResponse) => {
		if(req.method !== 'GET' && server._routers.length === 0) {
			apply_404(res);
		}
		if(req.url === '/favicon.ico') {
			setTimeout(() => apply_404(res), 5000);
		}
		return;
	});
	server.use = (url: string, fn: any|Promise<any>) => {
		server.on(ENV_REQUEST_SIGNATURE, async (req, res) => {
			if(req.url === url) {
				if(fn.constructor && fn.constructor.name === ENV_ASYNC_SIGNATURE) {
					return await fn(req, res);
				}
				return fn(req, res);
			}
			return;
		});
	};

	server.static = (_url: string, static_path: string) =>
		apply_static_callback(server, _url, static_path);
	return server;
}
