/// <reference types="node" />
import { IncomingMessage, Server as stlServer, ServerResponse } from 'http';
import { ServerOptions as stlServerOptions } from 'http';
import { LogConfig } from './logger';
import { iExitHandler, UserMiddlewareOption, iHandlerType, CacheSettings } from './middleware';
export declare type DiagnosticLog = {
    msg: string;
};
/**
 * @interface Runtime
 * @description Core Module to wrap the standard http library for node
 */
export interface Runtime extends stlServer {
    diagnostics: DiagnosticLog[];
    onClose: iExitHandler;
    _shutdown: () => Promise<HTTPuppySleep>;
}
/**
 * @type MountedFile
 * @description A File Mounted within a virtual filesystem to be served at a given static href
 */
export declare type MountedFile = {
    reqUrl: string;
    symLink?: string;
    contentType: any | any[];
    fileName: string;
    hrefs: string[];
};
export declare type HTTPuppySleep = () => Promise<void>;
export declare type UserStaticConfig = {
    href?: string;
    path?: string;
    mimeType?: string;
    indexType?: string;
};
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
 * @member secure boolean for https instead of http, requires follow up options in secureContext
 * @member secureContext options for resolving the SSL cert / key
 */
export interface HTTPuppyServerOptions extends stlServerOptions {
    port?: number;
    coldInit?: boolean;
    hostname?: string;
    static?: UserStaticConfig;
    throwWarnings?: boolean;
    log?: LogConfig;
    middleware?: UserMiddlewareOption[];
    onMount?: iHandlerType;
    onClose?: iExitHandler;
    cache?: CacheSettings;
    handler?: any;
    secure?: boolean;
    secureContext?: {
        key: string;
        cert: string;
        dhparam?: string;
    };
}
export declare const defaultHTTPConfig: HTTPuppyServerOptions;
export declare function fromDefaultHTTPConfig(config: HTTPuppyServerOptions): HTTPuppyServerOptions;
export interface HTTPuppyRequest extends IncomingMessage {
}
export interface HTTPuppyResponse extends ServerResponse {
    send: (msg: any) => void;
    json: (msg: any) => void;
}
export declare function HTTPuppyCallback(req: HTTPuppyRequest, res: HTTPuppyResponse): any;
export declare function HTTPuppyRouterMethod(url: string, cb: typeof HTTPuppyCallback): typeof HTTPuppyCallback | void;
export interface HTTPuppyRouter {
    baseUrl: string;
    get: typeof HTTPuppyRouterMethod;
    head: typeof HTTPuppyRouterMethod;
    post: typeof HTTPuppyRouterMethod;
    put: typeof HTTPuppyRouterMethod;
    patch: typeof HTTPuppyRouterMethod;
    delete: typeof HTTPuppyRouterMethod;
}
export * from './middleware';
export * from './writer';
export * from './logger';
