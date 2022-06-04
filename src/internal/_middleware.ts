/**
 * @internal
 */
import {
	Runtime,
	HTTPuppyCallback,
	HTTPuppyRequest,
	HTTPuppyResponse,
	HTTPuppyServerOptions
} from '../types/server';

export function _useCloseHandler<T extends HTTPuppyRequest | HTTPuppyResponse>(
	msg	: T,
	cb	: (ctx: T) => void
) {
	msg.on('close', () => {
		if(cb && typeof cb === 'function') {
			cb(msg);
		}
	});
}
export function _onReadable(
	req	: HTTPuppyRequest,
	cb	: () => void
): void {
	req.on('readable', (_: any) => {
		if(cb && typeof cb === 'function') {
			cb();
		}
	});
}

export function applyMiddleware(
    config	: HTTPuppyServerOptions,
    req		: HTTPuppyRequest,
    res		: HTTPuppyResponse
) {
	const match = config.middleware?.filter(opt => opt.href === req.url).shift();
	match?.handler(req, res);
}

export function _useContentSignatures(
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

export function _useHTTPHandle(
	name: string,
	_url: string,
	server: Runtime,
	cb: typeof HTTPuppyCallback
) {
	server.on('request', (
		req: HTTPuppyRequest,
		res: HTTPuppyResponse
	) => {
		if(req.method === name && req.url === _url) {
			_useContentSignatures(res);
			return cb(<HTTPuppyRequest>req, <HTTPuppyResponse>res);
		}
		return;
	});
}
