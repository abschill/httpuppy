export * from './middleware';
export * from './vfs';
import { HTTPuppyServer } from '../../server';
import {
	IncomingMessage as HTTPRequest,
	ServerResponse as HTTPResponse
} from 'http';

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
}

/**
 * @internal
 * @private
 */
 export type HTTPuppyRouterCallback = (req: HTTPuppyRequest, res: HTTPuppyResponse) => Promise<any> | ((req: HTTPuppyRequest, res: HTTPuppyResponse) => any);
 export type HTTPuppyBindMethod = (url: string, cb: HTTPuppyRouterCallback) => any
