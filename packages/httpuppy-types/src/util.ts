/**
 * @module util
 * @description utility types
 */
import { HTTPuppyRequest, HTTPuppyResponse } from '.';

export type HTTPuppySleep = () => Promise<void>;
export type Callable<T> = (args: T) => Promise<any> | any;
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

export type iExitHandler = undefined | (() => Promise<void>) | (() => void);
export type iHandlerType = (
	req: HTTPuppyRequest,
	res: HTTPuppyResponse
) => Promise<void> | ((req: HTTPuppyRequest, res: HTTPuppyResponse) => void);
export type UserMiddlewareOption = {
	href: string;
	handler: iHandlerType;
};
