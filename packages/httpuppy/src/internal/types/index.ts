export * from './middleware';
export * from './vfs';
export * from './server';

import winston from 'winston';
import {
	node_http_server,
	iExitHandler,
	VirtualFileSystem,
	node_http_request,
	node_http_response
} from '../../internal';
import { HTTPServerOptions } from './server';
import { HTTPRouter } from '../../';
import { MountedVFS } from 'httpuppy-vfs';
/**
 * Typedefs for Server Runtiem
 */
/**
 * @interface HTTPServer
 * @description Core Module to wrap the standard http library for node
 */
export interface HTTPServer extends node_http_server {
	pConfig: HTTPServerOptions; //HTTPServerOptions - process config
	diagnostics: DiagnosticLog[]; //diagnostic log
	onClose: iExitHandler; // onclose handler
	start: () => boolean; //start process for server (wrapper around .listen())
	stop: () => Promise<HTTPuppySleep>; // shutdown handler
	static: (path: string, static_path: string) => void;
	_vfs: MountedVFS; // virtual filesystem to load paths from
	_routers: HTTPRouter[];
	_logger: winston.Logger;
	use: (url: string, fn: HTTPRouterCallback) => void;
}

/**
 * @internal
 * @private
 */
export type HTTPHeader = {
	[key: string]: string;
};
/**
 * @internal
 * @private
 */
export type HTTPHeaders = HTTPHeader[];

export type HTTPRouterOptions = {
	baseUrl?: string; //glob or prefix
	allowPassthrough?: boolean;
};
export type HTTPuppySleep = () => Promise<void>;
export type Callable<T> = (args: T) => Promise<any> | any;
/**
 * @type DiagnosticLog
 * @description Runtime Diagnostic log to store for debug purposes
 */
export type DiagnosticLog = {
	msg: string;
	timestamp: string;
};
export interface HTTPuppyRequest extends node_http_request {
	body: Object;
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

/**
 * @internal
 * @private
 */
export type HTTPRouterCallback = (
	req: HTTPuppyRequest,
	res: HTTPuppyResponse
) => Promise<any> | ((req: HTTPuppyRequest, res: HTTPuppyResponse) => any);

/**
 * @internal
 * @private
 */
export type HTTPRouterMiddleware = (
	req: HTTPuppyRequest,
	res: HTTPuppyResponse,
	next: () => any
) =>
	| Promise<any>
	| ((req: HTTPuppyRequest, res: HTTPuppyResponse, next: () => any) => any);

/**
 * @internal
 * @private
 */
export type HTTPRouterBindMethod = (
	url: string,
	cb: HTTPRouterCallback
) => any;
