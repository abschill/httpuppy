/**
 * @internal
 * @description middleware hooks, such mime type header resolution / header setting
 */
import { etag } from './include/etag';
import { HTTPuppyServerOptions } from '../';
import {
	HTTPuppyWriterOptions,
	HTTPuppyRequest,
	HTTPuppyResponse,
	HTTPHeaders,
} from './types';

export function useMiddleware(
    config	: HTTPuppyServerOptions,
    req		: HTTPuppyRequest,
    res		: HTTPuppyResponse
) {
	const match = config.middleware?.filter(opt => opt.href === req.url).shift();
	match?.handler(req, res);
}

/**
 *
 * @param options the writer options to apply the headers against
 * @param config the server config to apply against
 * @returns default list of http headers based on given config cache settings / content type of the request options
 */
 export function useHeaders(
	options : HTTPuppyWriterOptions,
	config	: HTTPuppyServerOptions
): HTTPHeaders {
	const applyHeaders: HTTPHeaders = [{
			'Content-Type':
			options.type ?? 'text/plain'
	}];

	// set weak etag generation if applicable
	if(config.cache) {
		applyHeaders.push({ 'ETag': etag(options.virtualFile.fileName, { weak: true }) });
	}
	return applyHeaders;
}

 /**
  *
  * @param res internal response to be written to
  * @returns nothing
  */
export function useStatus(
	res	: HTTPuppyResponse,
	status : number,
	msg	: string
): void {
	res.writeHead(status, msg);
}

 /**
 *
 * @private
 * @returns nothing
 */
export function use404(
	res	: HTTPuppyResponse
): void {
	res.writeHead(404, '404: page not found');
	res.end('404: page not found');
	return;
}
