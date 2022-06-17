/**
 * @module useServer
 * @description core server module
 */
import {
	createServer as useCreateSecureServer,
	ServerOptions as HTTPSOptions
 } from 'https';
import {
	shutdown,
	useLogger,
	useConfig,
	_useServer,
	useStaticHandler
} from './internal';
import {
	createServer as useCreateServer,
	Server as stlServer,
	IncomingMessage as HTTPRequest,
	ServerResponse as HTTPResponse,
	ServerOptions as stlServerOptions
} from 'http';
import {
	iExitHandler,
	UserMiddlewareOption,
	iHandlerType,
	CacheSettings,
	defaultCacheSettings,
	VirtualFileSystem,
	CallableSideEffect
} from './internal/types';
import {
	LogConfig,
	useDefaultLogConfig,
} from './internal/logger';
import { HTTPuppyRouter } from './router';
/**
 * Typedefs for Server Runtiem
 */
/**
 * @interface HTTPuppyServer
 * @description Core Module to wrap the standard http library for node
 */
 export interface HTTPuppyServer extends stlServer  {
	pConfig		: HTTPuppyServerOptions; //httpuppyserveroptions - process config
	diagnostics	: DiagnosticLog[]; //diagnostic log
	onClose		: iExitHandler; // onclose handler
	start		: () => boolean; //start process for server (wrapper around .listen())
	stop		: () => Promise<HTTPuppySleep>; // shutdown handler
	_vfs		: VirtualFileSystem; // virtual filesystem to load paths from
	_routers	: HTTPuppyRouter[];
}
export interface HTTPuppyRequest extends HTTPRequest {
	body		: Object;
	_process	:	HTTPuppyServer;
	_tmpWritten ?: string;
	_boundCallback ?: CallableSideEffect<(any)>;
}
export interface HTTPuppyResponse extends HTTPResponse {
	_process:	HTTPuppyServer;
	send: CallableSideEffect<(any)>;
	json: CallableSideEffect<(any)>;
}
export type UserStaticConfig = {
	href 		?: string; // prefix path to access the directory on router
	path 		?: string; // path on filesystem to reflect
	mimeType 	?: string; // default content type
	indexType 	?: string; // file to use as the index of a directory (default: index.html)
};
/**
 * @type DiagnosticLog
 * @description Runtime Diagnostic log to store for debug purposes
 */
export type DiagnosticLog = {
	msg			: string;
	timestamp   : string;
}

export type HTTPuppySleep = () => Promise<void>;

/**
 * @interface HTTPuppyServerOptions
 * @member port the port number to run the configuration with (default: 80)
 * @member coldInit whether or not to return the server or autostart it from config (default: true)
 * @member hostname hostname for the server itself (default: 127.0.0.1)
 * @member static virtual file system options, static directories basically
 * @member throwWarnings false = print warnings true = throw them as errors (default: false)
 * @member handler default handler if you would like to override the request chain and handle each url manually thru the standard library
 * @member middleware list of middleware instances to run along the server
 * @member onMount a function to run once after the server is mounted (doesn't run on return if `coldInit` is set to true)
 * @member cache options for caching, standard http but camelcase
 * @member clustered is a planned feature for version 3 to automatically cluster the server process to utilize multiple core ipc it doesnt do anything in x.2.z
 * @member secure boolean for https instead of http, requires follow up options in secureContext
 * @member secureContext options for resolving the SSL cert / key
 * @member tmpDir the dir to write files uploaded from multipart forms from request
 */
export interface HTTPuppyServerOptions {
    port 			?: number;
	clustered		?: boolean;
    hostname 		?: string;
	static 			?: UserStaticConfig;
    throwWarnings 	?: boolean;
	log				?: LogConfig;
	middleware 		?: UserMiddlewareOption[];
	onMount 		?: iHandlerType;
	onClose			?: iExitHandler;
	cache 			?: CacheSettings;
	handler			?: any;
	secure			?: boolean;
	secureContext	?: {
		key			: string;
		cert		: string;
		dhparam 	?: string;
	}
	timeout			?: number;
	tmpDir			?: string;
}

export const defaultHTTPConfig:
HTTPuppyServerOptions = {
	port		  : 80,
	clustered	  : false,
	cache		  : defaultCacheSettings,
	log			  : useDefaultLogConfig(),
	hostname	  : '127.0.0.1',
	secure: false,
	throwWarnings : false,
	timeout		  : 0
};

export function fromDefaultHTTPConfig(
	config: HTTPuppyServerOptions
): HTTPuppyServerOptions {
	return {
		...defaultHTTPConfig,
		...config
	};
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
	if(config.log.logLevel !== 'silent') useLogger(config.log, server);
	// bind safe shutdown to the server for callability on the end user side
	server.stop = () => shutdown(server);
	return server;
}
