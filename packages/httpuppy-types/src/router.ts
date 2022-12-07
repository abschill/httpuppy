/**
 * @module Router
 * @remarks Router Types
 */

import { HTTPuppyRequest, HTTPuppyResponse } from '.';

/**
 * @internal
 * @internal
 */
export type HTTPRouterCallback = (
	req: HTTPuppyRequest,
	res: HTTPuppyResponse
) => Promise<any> | ((req: HTTPuppyRequest, res: HTTPuppyResponse) => any);

export type HTTPRouterOptions = {
	baseUrl?: string; // glob or prefix
	allowPassthrough?: boolean;
};
/**
 * @internal
 * @internal
 */
export type HTTPRouterBindMethod = (url: string, cb: HTTPRouterCallback) => any;

/**
 * @internal
 * @internal
 */
export interface HTTPRouter {
	url: string;
	get: HTTPRouterBindMethod;
	head: HTTPRouterBindMethod;
	post: HTTPRouterBindMethod;
	put: HTTPRouterBindMethod;
	patch: HTTPRouterBindMethod;
	trace: HTTPRouterBindMethod;
	connect: HTTPRouterBindMethod;
	delete: HTTPRouterBindMethod;
	options: HTTPRouterBindMethod;
	use: HTTPRouterBindMethod;
	_options: HTTPRouterOptions;
}
