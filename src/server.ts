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
	useStaticHandler,
	LogConfig,
	UserStaticConfig,
	iExitHandler,
	UserMiddlewareOption,
	iHandlerType,
	CacheSettings,
	HTTPuppyServer,
	DiagnosticLog,
} from './internal';

/**
 * Config for useServer hook
 */
export interface HTTPuppyServerOptions {
    port 			?: number; //the port number to run the configuration with (default: 80)
	clustered		?: boolean; //automatically cluster the server process to utilize multiple core ipc it doesnt do anything in x.2.z
    hostname 		?: string; //hostname for the server itself (default: 127.0.0.1)
	static 			?: UserStaticConfig; //virtual file system options
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
	if(config.static) useStaticHandler(server);

	server._logger.info(`logger online (child pid: ${process.pid}) (parent: ${process.ppid})`);

	// bind safe shutdown to the server for callability on the end user side
	server.stop = () => shutdown(server);
	return server;
}
