/**
 * @internal
 * @description middleware hooks, such mime type header resolution / header setting
 */
import { useEtag } from './include/etag';
import { lookup } from 'mime-types';
import {
	HTTPHeader,
	HTTPHeaders,
	HTTPuppyServer,
	HTTPuppyCallback,
	HTTPuppyRequest,
	HTTPuppyResponse,
	HTTPuppyServerOptions,
	HTTPuppyWriterOptions
} from '../types';

export function useMiddleware(
    config	: HTTPuppyServerOptions,
    req		: HTTPuppyRequest,
    res		: HTTPuppyResponse
) {
	const match = config.middleware?.filter(opt => opt.href === req.url).shift();
	match?.handler(req, res);
}

export function useRouterSignatures(
	res: HTTPuppyResponse
) {
	res.send = res.end;
	res.json = (content: any) => {
		if(!res.writable) {
			res.writeHead(500, 'cannot write to json stream');
			res.end();
		}
		// content type is json if they are calling this method so overwrite if preset
		if(res.hasHeader('Content-Type')) res.removeHeader('Content-Type');
		res.writeHead(200, ['Content-Type', 'application/json']);
		res.end(Buffer.from(JSON.stringify(content)));
	};
}

export function useHTTPHandle(
	name: string,
	_url: string,
	server: HTTPuppyServer,
	cb: typeof HTTPuppyCallback
) {
	server.on('request', (
		req: HTTPuppyRequest,
		res: HTTPuppyResponse
	) => {
		if(req.method === name && req.url === _url) {
			useRouterSignatures(res);
			return cb(<HTTPuppyRequest>req, <HTTPuppyResponse>res);
		}
		return;
	});
}

/**
 * @internal useContentType
 * @description hook for determining content type of a virtual fpath on the system
 * @param fpath the file path of the type to resolve
 * @returns the tuple representing the content type header for the static file
*/
export function useContentType(
	fpath: string
): HTTPHeader {
	if(fpath === '') return [
		'Content-Type',
		'text/plain'
	];

	const matchType = lookup(fpath);
	return [
		'Content-Type',
		(matchType ? matchType : 'text/plain')
	];
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
	const applyHeaders: HTTPHeaders = [
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
