/**
 * @module useServer
 * @description core server module
 */
import {
	useCreateServer,
	useCreateSecureServer,
	HTTPSOptions,
	useConfig,
	_useServer,
	CacheSettings,
	HTTPuppyServer,
	DiagnosticLog,
	virtualStreamReader,
	useMountedFS,
	VirtualWriteableFile,
	indexPaths,
	HTTPuppyRequest,
	HTTPuppyResponse,
	isBufferType,
	useWriter,
	mimeType,
	LogLevel,
} from './internal';
/**
 * Config for useServer hook
 */
export interface HTTPuppyServerOptions {
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

function _applyStaticCallback(
	server: HTTPuppyServer,
	_url: string,
	static_path: string
) {
	server.on('request', (req: HTTPuppyRequest, res: HTTPuppyResponse) => {
		const url = req.url ?? '/';
		if (url?.includes(_url)) {
			const sConfig = { href: _url, path: static_path };
			const vfs = useMountedFS(server, sConfig);
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
					return virtualStreamReader(vFile, res);
				}
				return useWriter(res, server.pConfig, {
					status: 200,
					statusText: 'ok',
					type: mimeType(match.symLink)['Content-Type'],
					virtualFile: vFile,
				});
			}
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
	conf: HTTPuppyServerOptions // user config for server
): HTTPuppyServer {
	const def_event_handler = conf?.handler;

	const diagnostics: DiagnosticLog[] = [];
	const config = useConfig(conf, diagnostics);
	const _server = conf.secure
		? useCreateSecureServer(
				<HTTPSOptions>conf.secure,
				def_event_handler
		)
		: useCreateServer(def_event_handler);
	const server = _useServer(config, <HTTPuppyServer>_server, diagnostics);
	server._logger.info(
		`logger online (child pid: ${process.pid}) (parent: ${process.ppid})`
	);
	server.static = (_url: string, static_path: string) =>
		_applyStaticCallback(server, _url, static_path);
	return server;
}
