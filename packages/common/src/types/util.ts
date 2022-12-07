/**
 * utils
 */
import { HTTPuppyRequest, HTTPuppyResponse } from '.';

export type HTTPuppySleep = () => Promise<void>;
export type Callable<T> = (args: T) => Promise<any> | any;
/**
 * @internal
 */
export type HTTPHeader = {
	[key: string]: string;
};
/**
 * @internal
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
