export * from './middleware';
export * from './vfs';
import winston from 'winston';
import {
	stlServer,
	iExitHandler,
	VirtualFileSystem,
	HTTPRequest,
	HTTPResponse
} from '../../internal';
import { HTTPuppyServerOptions } from '../../server';
import { HTTPuppyRouter } from '../../router';
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
	_logger		: winston.Logger;
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

export type HTTPuppyRouterOptions = {
	baseUrl				?: string; //glob or prefix
	allowPassthrough	?: boolean;
}
export type HTTPuppySleep = () => Promise<void>;
export type CallableSideEffect<T> = (args: T) => (Promise<any> | any);
/**
 * @type DiagnosticLog
 * @description Runtime Diagnostic log to store for debug purposes
 */
 export type DiagnosticLog = {
	msg			: string;
	timestamp   : string;
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
	use ?: CallableSideEffect<(any)>; // only present when `allowPassthrough` is enabled
}

/**
 * @internal
 * @private
 */
export type HTTPuppyRouterCallback = (req: HTTPuppyRequest, res: HTTPuppyResponse) => Promise<any> | ((req: HTTPuppyRequest, res: HTTPuppyResponse) => any);

/**
 * @internal
 * @private
 */
export type HTTPuppyRouterMiddleware = (req: HTTPuppyRequest, res: HTTPuppyResponse, next: () => any) => Promise<any> | ((req: HTTPuppyRequest, res: HTTPuppyResponse, next: () => any) => any);

/**
 * @internal
 * @private
 */
export type HTTPuppyBindMethod = (url: string, cb: HTTPuppyRouterCallback) => any
