/**
 * @module middleware
 * hooks for setting up middleware for the request chain
 */
import {
	HTTPuppyServer,
	HTTP_INCMSG,
	HTTP_RES,
	iHTTP,
} from 'types';
import { useEtag } from './internal/etag';

/**
 *
 * @param options the writer options to apply the headers against
 * @param config the server config to apply against
 * @returns default list of http headers based on given config cache settings / content type of the request options
 */
export function useHeaders(
	options : HTTPuppyServer.HTTPuppyWriterOptions,
	config: HTTPuppyServer.uOptions
): iHTTP.HTTPHeaders {
	const applyHeaders: iHTTP.HTTPHeaders = [
		[
			'Content-Type',
			options.type ?? 'text/plain'
		]
	];

	// set weak etag generation if applicable
	if(config.cache) {
		applyHeaders.push([
			'ETag',
			useEtag(options.virtualFile.fileName, { weak: true })
		]);
	}

	return applyHeaders;
}

export function useMiddleware(
	config: HTTPuppyServer.uOptions,
	req: HTTP_INCMSG,
	res: HTTP_RES
) {
	const match = config.middleware.filter(opt => opt.href === req.url).shift();
	match?.handler(req, res);
}
