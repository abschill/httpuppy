/**
 * @module useRouter
 * @description for adding custom routing to your server
 */
import {
	HTTPuppyServer,
	HTTPuppyRequest,
	HTTPuppyResponse
} from '.';

/**
 * @internal
 * @private
 */
export declare function HTTPuppyCallback(req: HTTPuppyRequest, res: HTTPuppyResponse): any;

/**
 * @internal
 * @private
 */
export declare function HTTPuppyRouterMethod(url: string, cb: typeof HTTPuppyCallback): typeof HTTPuppyCallback | void;
/**
 * @internal
 * @private
 */
export interface HTTPuppyRouter {
	url			: string;
	get			: typeof HTTPuppyRouterMethod;
	head		: typeof HTTPuppyRouterMethod;
	post		: typeof HTTPuppyRouterMethod;
	put			: typeof HTTPuppyRouterMethod;
	patch		: typeof HTTPuppyRouterMethod;
	trace		: typeof HTTPuppyRouterMethod;
	connect		: typeof HTTPuppyRouterMethod;
	delete		: typeof HTTPuppyRouterMethod;
	options		: typeof HTTPuppyRouterMethod;
	_options	: HTTPuppyRouterOptions;
}
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

export type HTTPuppyRouterOptions = {
	baseUrl				?: string; //glob or prefix
	allowPassthrough	?: boolean;
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
	res.json = (content: any) => {
		if(!res.writable) {
			res.writeHead(500, 'cannot write to json stream');
			res._process.diagnostics.push({
				msg: `error writing to json stream at ${res.req.url}`,
				timestamp: Date.now().toLocaleString()
			});
			res.end();
		}
		// content type is json if they are calling this method so overwrite if preset
		if(res.hasHeader('Content-Type')) res.removeHeader('Content-Type');
		res.writeHead(200, {'Content-Type' : 'application/json'});
		res.end(Buffer.from(JSON.stringify(content)));
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
	cb: typeof HTTPuppyCallback
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
			}
			useRouterSignatures(req, res);
			server.emit(`k.router${req.method}`, _url);
			req.on('data', (chunk) => {
				req.body = JSON.parse(chunk);
			});
			return setTimeout(()=>cb(<HTTPuppyRequest>req, <HTTPuppyResponse>res));
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
	rOptions ?: HTTPuppyRouterOptions // placeholder: planned feature
): HTTPuppyRouter {
	const wrapperUrl = rOptions?.baseUrl ?? '';
	const opts = rOptions || {
		baseUrl: wrapperUrl,
		allowPassthrough: false
	};

	function get(
		url: string,
		cb: typeof HTTPuppyCallback
	): void {
		useHTTPHandle(
			'GET',
			wrapperUrl+url, server, cb
		);
	}

	function post(
		url: string,
		cb: typeof HTTPuppyCallback
	): void {
		useHTTPHandle('POST',
			wrapperUrl+url, server, cb);
	}

	function head(
		url: string,
		cb: typeof HTTPuppyCallback
	): void {
		useHTTPHandle('HEAD',
			wrapperUrl+url, server, cb);
	}

	function put(
		url: string,
		cb: typeof HTTPuppyCallback
	): void {
		useHTTPHandle('PUT',
			wrapperUrl+url, server, cb);
	}

	function patch(
		url: string,
		cb: typeof HTTPuppyCallback
	): void {
		useHTTPHandle('PATCH',
			wrapperUrl+url, server, cb);
	}

	function trace(
		url: string,
		cb: typeof HTTPuppyCallback
	): void {
		useHTTPHandle('TRACE',
			wrapperUrl+url, server, cb);
	}

	function connect(
		url: string,
		cb: typeof HTTPuppyCallback
	): void {
		useHTTPHandle('CONNECT',
			wrapperUrl+url, server, cb);
	}

	function options(
		url: string,
		cb: typeof HTTPuppyCallback
	): void {
		useHTTPHandle('OPTIONS',
			wrapperUrl+url, server, cb);
	}

	function _delete(
		url: string,
		cb: typeof HTTPuppyCallback
	): void {
		useHTTPHandle('DELETE',
			wrapperUrl+url, server, cb);
	}
	const router = <HTTPuppyRouter>{
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
