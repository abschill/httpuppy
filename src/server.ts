/**
 * @module useServer
 * @description core server module
 */
import {
	useCreateServer,
	useCreateSecureServer,
	HTTPSOptions,
	shutdown,
	useConfig,
	_useServer,
	LogConfig,
	iExitHandler,
	UserMiddlewareOption,
	iHandlerType,
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
} from './internal';
/**
 * Config for useServer hook
 */
export interface HTTPuppyServerOptions {
    port 			?: number; //the port number to run the configuration with (default: 80)
	clustered		?: boolean; //automatically cluster the server process to utilize multiple core ipc it doesnt do anything in x.2.z
    hostname 		?: string; //hostname for the server itself (default: 127.0.0.1)
	//static 			?: UserStaticConfig; //virtual file system options
    throwWarnings 	?: boolean; //false = print warnings true = throw them as errors (default: false)
	log				?: LogConfig;
	middleware 		?: UserMiddlewareOption[]; //list of middleware instances to run along the server
	onMount 		?: iHandlerType; // a function to run once after the server is mounted (doesn't run on return if `coldInit` is set to true)
	onClose			?: iExitHandler;
	cache 			?: CacheSettings; //options for caching, standard http but camelcase
	handler			?: any; //default handler if you would like to override the request chain and handle each url manually thru the standard library
	secure			?: boolean; //https instead of http, requires follow up options in secureContext
	secureContext	?: { //options for resolving the SSL cert / key
		key			: string;
		cert		: string;
		dhparam 	?: string;
	}
	timeout			?: number;
	resTimeout		?: number; // timer to measure for when to determine a request is unresolveable and should display a 404 - default 10s
	tmpDir			?: string; //the dir to write files uploaded from multipart forms from request
}

/**
 * @function useServer
 * @example
 * ```javascript
* const app = useServer({
* 	static: {
* 		path: './examples/files'
* 	}
* });
* ```
 * @param conf configuration options
 * @returns httpuppy server
 */
export function useServer(
    conf	: HTTPuppyServerOptions // user config for server
): HTTPuppyServer {
	const diagnostics: DiagnosticLog[] = [];
	const config = useConfig(conf, diagnostics);
	const _server = conf.secure ?
	useCreateSecureServer(<HTTPSOptions>conf.secureContext, config?.handler) : useCreateServer(config?.handler);
	// internal hook for validating the init process of the server itself and setting diagnostics accordingly if anything goes wrong
	const server = _useServer(config, <HTTPuppyServer>_server, diagnostics);

	server._logger.info(`logger online (child pid: ${process.pid}) (parent: ${process.ppid})`);

	// bind safe shutdown to the server for callability on the end user side
	server.stop = () => shutdown(server);

	/**
	 *
	 * @param _url url to serve as the base prefix of the static href
	 * @param static_path path to serve static files from
	 */
	server.static = (_url: string, static_path: string) => {
		server.on('request', (req: HTTPuppyRequest, res: HTTPuppyResponse) => {
			const url = req.url ?? '/';
			if(url?.includes(_url)) {
				const sConfig = { href: _url, path: static_path };
				const vfs = useMountedFS(server, sConfig);
				if(vfs.mountedFiles.some((file) => file.hrefs.includes(_url))) {
					const match = vfs.mountedFiles.filter(f => f.hrefs.includes(url)).shift();
					if(!match) {
						server.diagnostics.push({
							msg: `url missed in static callback at ${url}`,
							timestamp: Date.now().toLocaleString()
						});
						return;
					}
					const vFile: VirtualWriteableFile = {
						contentType: match.contentType,
						symLink: match.symLink,
						fileName: match.fileName,
						reqUrl: url,
						hrefs: indexPaths(match.fileName, sConfig)
					};
					if(isBufferType(url)) {
						return virtualStreamReader(vFile, res);
					}
					return useWriter(res, config, {
						status: 200,
						statusText: 'ok',
						type: mimeType(match.symLink)['Content-Type'],
						virtualFile: vFile
					});
				}
			}
		});
	};
	return server;
}
