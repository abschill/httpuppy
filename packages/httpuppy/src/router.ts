/**
 * @module useRouter
 * @description for adding custom routing to your server
 */
import { HTTPServer } from './internal/types';
import {
	HTTPuppyRequest,
	HTTPuppyResponse,
	HTTPRouterBindMethod,
	HTTPRouterCallback,
	HTTPRouterOptions,
} from './internal/types';

/**
 * @internal
 * @private
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
	_options: HTTPRouterOptions;
}

/**
 * @internal
 * @private
 */
function useRouterSignatures(req: HTTPuppyRequest, res: HTTPuppyResponse) {
	res.send = res.end;
	res.json = (content: object) => {
		if (!res.writable) {
			res.writeHead(500, 'cannot write to json stream');
			res._process.diagnostics.push({
				msg: `error writing to json stream at ${res.req.url}`,
				timestamp: Date.now().toLocaleString(),
			});
			res._process._logger.error(
				`serror writing to json stream at ${res.req.url}`
			);
			res.end();
		}
		// content type is json if they are calling this method so overwrite if preset
		if (res.hasHeader('Content-Type')) res.removeHeader('Content-Type');
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(content));
	};
}
/**
 * @internal
 * @private
 */
function http_handle(
	name: string,
	_url: string,
	server: HTTPServer,
	cb: HTTPRouterCallback,
	async: boolean
) {
	server.on('request', (req: HTTPuppyRequest, res: HTTPuppyResponse) => {
		if (req.method === name && req.url === _url) {
			useRouterSignatures(req, res);
			server.emit(`k.router${req.method}`, _url);
			req.on('data', (chunk) => {
				if (typeof chunk !== 'string') chunk = chunk.toString();
				req.body = JSON.parse(chunk);
			});

			if (!async) {
				req.on('end', () =>
					cb(<HTTPuppyRequest>req, <HTTPuppyResponse>res)
				);
			} else {
				req.on('end', async () => await cb(req, res));
			}
		} else {
			return;
		}
	});
}

export function passthrough(
	_url: string,
	server: HTTPServer,
	cb: HTTPRouterCallback,
	async: boolean
) {
	if (async) {
		server.on(
			'request',
			async (req: HTTPuppyRequest, res: HTTPuppyResponse) => {
				if (_url === req.url) await cb(req, res);

				return;
			}
		);
		return;
	}
	server.on('request', (req: HTTPuppyRequest, res: HTTPuppyResponse) => {
		if (_url === req.url) cb(req, res);

		return;
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
	server: HTTPServer, // server to attach the router to as a handler
	rOptions?: HTTPRouterOptions
): HTTPRouter {
	const wrapperUrl = rOptions?.baseUrl ?? '';
	const opts = rOptions || {
		baseUrl: wrapperUrl,
		allowPassthrough: false,
	};

	function get(url: string, cb: HTTPRouterCallback): void {
		return http_handle(
			'GET',
			wrapperUrl + url,
			server,
			cb,
			cb.constructor.name === 'AsyncFunction'
		);
	}

	function post(url: string, cb: HTTPRouterCallback): void {
		return http_handle(
			'POST',
			wrapperUrl + url,
			server,
			cb,
			cb.constructor.name === 'AsyncFunction'
		);
	}

	function head(url: string, cb: HTTPRouterCallback): void {
		return http_handle(
			'HEAD',
			wrapperUrl + url,
			server,
			cb,
			cb.constructor.name === 'AsyncFunction'
		);
	}

	function put(url: string, cb: HTTPRouterCallback): void {
		return http_handle(
			'PUT',
			wrapperUrl + url,
			server,
			cb,
			cb.constructor.name === 'AsyncFunction'
		);
	}

	function patch(url: string, cb: HTTPRouterCallback): void {
		return http_handle(
			'PATCH',
			wrapperUrl + url,
			server,
			cb,
			cb.constructor.name === 'AsyncFunction'
		);
	}

	function trace(url: string, cb: HTTPRouterCallback): void {
		return http_handle(
			'TRACE',
			wrapperUrl + url,
			server,
			cb,
			cb.constructor.name === 'AsyncFunction'
		);
	}

	function connect(url: string, cb: HTTPRouterCallback): void {
		return http_handle(
			'CONNECT',
			wrapperUrl + url,
			server,
			cb,
			cb.constructor.name === 'AsyncFunction'
		);
	}

	function options(url: string, cb: HTTPRouterCallback): void {
		return http_handle(
			'OPTIONS',
			wrapperUrl + url,
			server,
			cb,
			cb.constructor.name === 'AsyncFunction'
		);
	}

	function _delete(url: string, cb: HTTPRouterCallback): void {
		return http_handle(
			'DELETE',
			wrapperUrl + url,
			server,
			cb,
			cb.constructor.name === 'AsyncFunction'
		);
	}

	function use(url: string, cb: HTTPRouterCallback): void {
		return passthrough(
			wrapperUrl + url,
			server,
			cb,
			cb.constructor.name === 'AsyncFunction'
		);
	}

	const router = <HTTPRouter>{
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
		use,
		_options: opts,
	};
	server._routers.push(router);
	return router;
}
