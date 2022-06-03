/**
 * @module middleware
 * @description hooks for setting up middleware for the request chain
 */
import { iHTTP } from './types';
import { HTTPuppyServerOptions, HTTPuppyWriterOptions, HTTPuppyRequest, HTTPuppyResponse } from './types/server';
/**
 *
 * @param options the writer options to apply the headers against
 * @param config the server config to apply against
 * @returns default list of http headers based on given config cache settings / content type of the request options
 */
export declare function useHeaders(options: HTTPuppyWriterOptions, config: HTTPuppyServerOptions): iHTTP.HTTPHeaders;
export declare function useMiddleware(config: HTTPuppyServerOptions, req: HTTPuppyRequest, res: HTTPuppyResponse): void;
