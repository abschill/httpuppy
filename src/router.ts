/**
 * @module useRouter
 * @description for adding custom routing to your server
 */
import { HTTPuppyServer } from './internal/types';
import {
	HTTPuppyRequest,
	HTTPuppyResponse,
	HTTPuppyBindMethod,
	HTTPuppyRouterCallback,
	HTTPuppyRouterOptions
} from './internal/types';

/**
 * @internal
 * @private
 */
export interface HTTPuppyRouter {
	url			: string;
	get			: HTTPuppyBindMethod;
	head		: HTTPuppyBindMethod;
	post		: HTTPuppyBindMethod;
	put			: HTTPuppyBindMethod;
	patch		: HTTPuppyBindMethod;
	trace		: HTTPuppyBindMethod;
	connect		: HTTPuppyBindMethod;
	delete		: HTTPuppyBindMethod;
	options		: HTTPuppyBindMethod;
	_options	: HTTPuppyRouterOptions;
}

/**
 * @internal
 * @private
 */
function useRouterSignatures(
	req: HTTPuppyRequest,
	res: HTTPuppyResponse
) {
	res.send = res.end;
	res.json = (content: object) => {
		if(!res.writable) {
			res.writeHead(500, 'cannot write to json stream');
			res._process.diagnostics.push({ msg: `error writing to json stream at ${res.req.url}`, timestamp: Date.now().toLocaleString() });
			res._process._logger.error(`serror writing to json stream at ${res.req.url}`);
			res.end();
		}
		// content type is json if they are calling this method so overwrite if preset
		if(res.hasHeader('Content-Type')) res.removeHeader('Content-Type');
		res.writeHead(200, {'Content-Type' : 'application/json'});
		res.end(JSON.stringify(content));
	};
}
/**
 * @internal
 * @private
 */
function useHTTPHandle(
	name: string,
	_url: string,
	server: HTTPuppyServer,
	cb: HTTPuppyRouterCallback,
	async: boolean
) {
	server.on('request', (
		req: HTTPuppyRequest,
		res: HTTPuppyResponse
	) => {
		if(req.method === name && req.url === _url) {
			if(req._process._vfs.mountedFiles.filter(f => f.hrefs.includes(_url))) {
				req._process.diagnostics.push({
					msg: 'static paths conflict with router, will override router',
					timestamp: Date.now().toLocaleString()
				});
				server._logger.error(`static paths confilict at ${req.url}, will override router`);
			}
			useRouterSignatures(req, res);
			server.emit(`k.router${req.method}`, _url);
			req.on('data', (chunk) => {
				if(typeof chunk !== 'string') chunk = chunk.toString();
				req.body = JSON.parse(chunk);
			});

			if(!async) {
				req.on('end', () => cb(<HTTPuppyRequest>req, <HTTPuppyResponse>res));
			}
			else {
				req.on('end', async() => await cb(req, res));
			}
		}
		else {
			return;
		}
	});
}

/**
 * @function useRouter
 * @example
 * ```javascript
* const app = useServer({...});
* const router = useRouter(app);
* router.get('/test', (req, res) => res.end('hello'));
* ```
 * @param server
 * @returns
 */
export function useRouter(
	server: HTTPuppyServer, // server to attach the router to as a handler
	rOptions ?: HTTPuppyRouterOptions
): HTTPuppyRouter {
	const wrapperUrl = rOptions?.baseUrl ?? '';
	const opts = rOptions || {
		baseUrl: wrapperUrl,
		allowPassthrough: false
	};

	function get(
		url: string,
		cb: HTTPuppyRouterCallback
	): void {
		useHTTPHandle('GET', wrapperUrl+url, server, cb, cb.constructor.name === 'AsyncFunction');
	}

	function post(
		url: string,
		cb: HTTPuppyRouterCallback
	): void {
		useHTTPHandle('POST', wrapperUrl+url, server, cb, cb.constructor.name === 'AsyncFunction');
	}

	function head(
		url: string,
		cb: HTTPuppyRouterCallback
	): void {
		useHTTPHandle('HEAD', wrapperUrl+url, server, cb, cb.constructor.name === 'AsyncFunction');
	}

	function put(
		url: string,
		cb: HTTPuppyRouterCallback
	): void {
		useHTTPHandle(
		'PUT', wrapperUrl+url, server, cb, cb.constructor.name === 'AsyncFunction');
	}

	function patch(
		url: string,
		cb: HTTPuppyRouterCallback
	): void {
		useHTTPHandle('PATCH', wrapperUrl+url, server, cb, cb.constructor.name === 'AsyncFunction');
	}

	function trace(
		url: string,
		cb: HTTPuppyRouterCallback
	): void {
		useHTTPHandle(
			'TRACE', wrapperUrl+url, server, cb, cb.constructor.name === 'AsyncFunction');
	}

	function connect(
		url: string,
		cb: HTTPuppyRouterCallback
	): void {
		useHTTPHandle('CONNECT', wrapperUrl+url, server, cb, cb.constructor.name === 'AsyncFunction');
	}

	function options(
		url: string,
		cb: HTTPuppyRouterCallback
	): void {
		useHTTPHandle('OPTIONS', wrapperUrl+url, server, cb, cb.constructor.name === 'AsyncFunction');
	}

	function _delete(
		url: string,
		cb: HTTPuppyRouterCallback
	): void {
		useHTTPHandle('DELETE', wrapperUrl+url, server, cb, cb.constructor.name === 'AsyncFunction');
	}

	const router = <HTTPuppyRouter>{
		url: opts.baseUrl,
		get,
		head,
		post,
		put,
		patch,
		delete: _delete,
		trace,
		connect,
		options,
		_options: opts
	};
	server._routers.push(router);
	return router;
}
