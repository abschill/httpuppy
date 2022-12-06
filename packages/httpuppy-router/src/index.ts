/**
 * useRouter
 * @remarks adds custom routing to your server
 */
import {
	HTTPuppyRequest,
	HTTPuppyResponse,
	HTTPRouter,
	HTTPRouterCallback,
	HTTPRouterOptions,
	HTTPServer
} from 'httpuppy-types';

/**
 * @internal
 */
function useRouterSignatures(req: HTTPuppyRequest, res: HTTPuppyResponse) {
	res.send = res.end;
	res.json = (content: object) => {
		if (!res.writable) {
			res._process.diagnostics.push({
				msg: `error writing to json stream at ${res.req.url}`,
				timestamp: Date.now().toLocaleString()
			});
			res._process.logger.error(`serror writing to json stream at ${res.req.url}`);
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
 */
// eslint-disable-next-line max-params
function $httpHandle(
	name: string,
	url: string,
	server: HTTPServer,
	cb: HTTPRouterCallback,
	async: boolean
) {
	server.on('request', (req: HTTPuppyRequest, res: HTTPuppyResponse) => {
		let v_url = url;
		if (!req.params) req.params = {};
		if (req.url !== '/' && req.url !== '' && v_url.includes(':') && res.writable) {
			const _split = v_url.split('/');
			const recovered_idx = _split.findIndex((i) => i.includes(':'));
			const raw_name = _split[recovered_idx];
			const key = <string>raw_name.replace(':', '');
			const val = req.url?.split('/')[recovered_idx];
			req.params[key] = val;
			v_url = <string>`/${val}`;
		}
		if (req.method === name && req.url === v_url && res.writable) {
			useRouterSignatures(req, res);
			server.emit(`k.router${req.method}`, v_url);
			req.on('data', (chunk) => {
				if (typeof chunk !== 'string') chunk = chunk.toString();
				req.body = JSON.parse(chunk);
			});

			if (!async) {
				req.on('end', () => cb(<HTTPuppyRequest>req, <HTTPuppyResponse>res));
			} else {
				req.on('end', async () => await cb(req, res));
			}
		} else {
			return;
		}
	});
}

// eslint-disable-next-line max-params
export function passthrough(
	_url: string,
	server: HTTPServer,
	cb: HTTPRouterCallback,
	async: boolean
) {
	if (async) {
		server.on('request', async (req: HTTPuppyRequest, res: HTTPuppyResponse) => {
			if (_url === req.url) await cb(req, res);

			return;
		});
		return;
	}
	server.on('request', (req: HTTPuppyRequest, res: HTTPuppyResponse) => {
		if (_url === req.url) cb(req, res);

		return;
	});
}

function _parseUrl(url: string, wrapper: string): string {
	return wrapper + url;
}

/**
 * useRouter
 * @example
 * ```javascript
 * const app = useServer({...});
 * const router = useRouter(app);
 * router.get('/test', (req, res) => res.end('hello'));
 * ```
 * @param server - server to bind the router to
 * @returns
 */
export function useRouter(
	server: HTTPServer, // server to attach the router to as a handler
	rOptions?: HTTPRouterOptions
): HTTPRouter {
	if (!server) {
		throw new Error('[httpuppy]: error - no server to bind to');
	}
	const wrapperUrl = rOptions?.baseUrl ?? '';
	if (!rOptions)
		rOptions = {
			baseUrl: wrapperUrl,
			allowPassthrough: false
		};
	const opts = rOptions;

	function get(url: string, cb: HTTPRouterCallback): void {
		return $httpHandle(
			'GET',
			_parseUrl(url, wrapperUrl),
			server,
			cb,
			cb.constructor.name === 'AsyncFunction'
		);
	}

	function post(url: string, cb: HTTPRouterCallback): void {
		return $httpHandle(
			'POST',
			_parseUrl(url, wrapperUrl),
			server,
			cb,
			cb.constructor.name === 'AsyncFunction'
		);
	}

	function head(url: string, cb: HTTPRouterCallback): void {
		return $httpHandle(
			'HEAD',
			_parseUrl(url, wrapperUrl),
			server,
			cb,
			cb.constructor.name === 'AsyncFunction'
		);
	}

	function put(url: string, cb: HTTPRouterCallback): void {
		return $httpHandle(
			'PUT',
			_parseUrl(url, wrapperUrl),
			server,
			cb,
			cb.constructor.name === 'AsyncFunction'
		);
	}

	function patch(url: string, cb: HTTPRouterCallback): void {
		return $httpHandle(
			'PATCH',
			_parseUrl(url, wrapperUrl),
			server,
			cb,
			cb.constructor.name === 'AsyncFunction'
		);
	}

	function trace(url: string, cb: HTTPRouterCallback): void {
		return $httpHandle(
			'TRACE',
			_parseUrl(url, wrapperUrl),
			server,
			cb,
			cb.constructor.name === 'AsyncFunction'
		);
	}

	function connect(url: string, cb: HTTPRouterCallback): void {
		return $httpHandle(
			'CONNECT',
			_parseUrl(url, wrapperUrl),
			server,
			cb,
			cb.constructor.name === 'AsyncFunction'
		);
	}

	function options(url: string, cb: HTTPRouterCallback): void {
		return $httpHandle(
			'OPTIONS',
			_parseUrl(url, wrapperUrl),
			server,
			cb,
			cb.constructor.name === 'AsyncFunction'
		);
	}

	function _delete(url: string, cb: HTTPRouterCallback): void {
		return $httpHandle(
			'DELETE',
			_parseUrl(url, wrapperUrl),
			server,
			cb,
			cb.constructor.name === 'AsyncFunction'
		);
	}

	function use(url: string, cb: HTTPRouterCallback): void {
		return passthrough(
			_parseUrl(url, wrapperUrl),
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
		_options: opts
	};
	server.routers.push(router);
	return router;
}
