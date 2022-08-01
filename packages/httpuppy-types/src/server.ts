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
    MountedVFS,
} from '.';
import {
    createServer as create_server,
    Server as node_http_server,
    IncomingMessage as node_http_request,
    ServerResponse as node_http_response,
} from 'node:http';
export {
    createServer as create_secure_server,
    ServerOptions as https_options,
} from 'node:https';
export {
    createServer as create_server,
    Server as node_http_server,
    IncomingMessage as node_http_request,
    ServerResponse as node_http_response,
} from 'node:http';
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
 * Typedefs for Server Runtiem
 */
/**
 * @interface HTTPServer
 * @description Core Module to wrap the standard http library for node
 */
export interface HTTPServer extends node_http_server {
    config: HTTPServerOptions; //HTTPServerOptions - process config
    diagnostics: DiagnosticLog[]; //diagnostic log
    onClose: iExitHandler; // onclose handler
    start: () => boolean; //start process for server (wrapper around .listen())
    stop: () => Promise<HTTPuppySleep>; // shutdown handler
    static: (path: string, static_path: string) => void;
    vfs: MountedVFS; // virtual filesystem to load paths from
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
