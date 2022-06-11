import { IncomingMessage, Server as stlServer, ServerResponse } from 'http';
import { ServerOptions as stlServerOptions } from 'http';
import {
	LogConfig,
	useDefaultLogConfig
} from './logger';
import {
	VirtualFileSystem,
	UserStaticConfig
} from './vfs';
import {
	iExitHandler,
	UserMiddlewareOption,
	iHandlerType,
	CacheSettings,
	defaultCacheSettings
} from './middleware';

/**
 * @type DiagnosticLog
 * @description Runtime Diagnostic log to store for debug purposes
 */
export type DiagnosticLog = {
	msg			: string;
}

/**
 * @interface HTTPuppyServer
 * @description Core Module to wrap the standard http library for node
 */
export interface HTTPuppyServer extends stlServer  {
	pConfig		: HTTPuppyServerOptions; //httpuppyserveroptions
	diagnostics	: DiagnosticLog[]; //diagnostic log
	onClose		: iExitHandler; // onclose handler
	start		: () => boolean; //start process for server (wrapper around .listen())
	stop		: () => Promise<HTTPuppySleep>; // shutdown handler
	_vfs		: VirtualFileSystem; // virtual filesystem to load paths from
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
 */
export interface HTTPuppyServerOptions extends stlServerOptions {
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
}

export const defaultHTTPConfig:
HTTPuppyServerOptions = {
	port		  : 80,
	clustered	  : false,
	cache		  : defaultCacheSettings,
	log			  : useDefaultLogConfig(),
	hostname	  : '127.0.0.1',
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

export interface HTTPuppyRequest extends IncomingMessage {
	_process:	HTTPuppyServer;
}
export interface HTTPuppyResponse extends ServerResponse {
	_process:	HTTPuppyServer;
	send: (msg: any) => void;
	json: (msg: any) => void;
}

export declare function HTTPuppyCallback(req: HTTPuppyRequest, res: HTTPuppyResponse): any;

export declare function HTTPuppyRouterMethod(url: string, cb: typeof HTTPuppyCallback): typeof HTTPuppyCallback | void;
export interface HTTPuppyRouter {
	url			: string;
	get			: typeof HTTPuppyRouterMethod;
	head		: typeof HTTPuppyRouterMethod;
	post		: typeof HTTPuppyRouterMethod;
	put			: typeof HTTPuppyRouterMethod;
	patch		: typeof HTTPuppyRouterMethod;
	delete		: typeof HTTPuppyRouterMethod;
}
export type HTTPHeader = string[];
export type HTTPHeaders = HTTPHeader[];

export * from './middleware';
export * from './logger';
export * from './vfs';
export * from './logger';
