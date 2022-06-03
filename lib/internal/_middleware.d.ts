import { HTTPuppyRequest, HTTPuppyResponse } from '../types/server';
export declare function _useCloseHandler<T extends HTTPuppyRequest | HTTPuppyResponse>(msg: T, cb: (ctx: T) => void): void;
export declare function _onReadable(req: HTTPuppyRequest, cb: () => void): void;
