import winston from 'winston';
import {
	CacheSettings,
	Callable,
	LogLevel,
	DiagnosticLog,
	HTTPRouter,
	HTTPRouterCallback,
	HTTPuppySleep,
	iExitHandler,
	MountedVFS
} from '.';
import {
	createServer as create_server,
	Server as node_http_server,
	IncomingMessage as node_http_request,
	ServerResponse as node_http_response
} from 'node:http';
export {
	createServer as create_secure_server,
	ServerOptions as https_options
} from 'node:https';
export {
	createServer as create_server,
	Server as node_http_server,
	IncomingMessage as node_http_request,
	ServerResponse as node_http_response
} from 'node:http';
/**
 * Config for useServer hook
 */
export interface HTTPServerOptions {
	/**
	 * options for caching, standard http but camelcase
	 */
	cache?: CacheSettings;
	/**
	 * automatically cluster the server process to utilize multiple core ipc it doesnt do anything in x.2.z
	 */
	clustered?: boolean;
	/**
	 * default handler if you would like to override the request chain and handle each url manually thru the standard library
	 */
	handler?: any;
	/**
	 * hostname for the server itself (default: 127.0.0.1)
	 */
	hostname?: string;
	log_level?: LogLevel;
	log_error_file?: string;
	log_event_file?: string;
	/**
	 * the port number to run the configuration with (default: 80)
	 */
	port?: number;
	/**
	 * options for resolving the SSL cert
	 */
	secure?: {
		key: string;
		cert: string;
		dhparam?: string;
	};
	ttl_default?: number;
	/**
	 * the dir to write files uploaded from multipart forms from request
	 */
	local_storage_path?: string;
	/**
	 * false = print warnings true = throw them as errors (default: false)
	 */
	throw_warnings?: boolean;
}

/**
 * Typedefs for Server Runtiem
 */
/**
 * HTTPServer
 * @remarks Core Module to wrap the standard http library for node
 */
export interface HTTPServer extends node_http_server {
	/**
	 * HTTPServerOptions - process config
	 */
	config: HTTPServerOptions;
	/**
	 * diagnostic log
	 */
	diagnostics: DiagnosticLog[];
	onClose: iExitHandler; // onclose handler
	/**
	 * start process for server (wrapper around .listen())
	 */
	start: () => boolean;
	/**
	 * shutdown handler
	 */
	stop: () => Promise<HTTPuppySleep>;
	static: (path: string, static_path: string) => void;
	/**
	 * virtual filesystem to load paths from
	 */
	vfs: MountedVFS;
	routers: HTTPRouter[];
	logger: winston.Logger;
	use: (url: string, fn: HTTPRouterCallback) => void;
}

export interface StringMap {
	[key: string]: string | undefined;
}

export interface HTTPuppyRequest extends node_http_request {
	body: Object;
	params?: StringMap;
	query?: StringMap;
	_process: HTTPServer;
	_tmpWritten?: string;
	_boundCallback?: Callable<any>;
}

export interface HTTPuppyResponse extends node_http_response {
	_process: HTTPServer;
	send: Callable<any>;
	json: Callable<any>;
	use?: Callable<any>; // only present when `allowPassthrough` is enabled
}
