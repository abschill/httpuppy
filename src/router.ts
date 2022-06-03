/**
 * @module router
 * @description for adding custom routing to your server
 */
import { HTTPuppyServer } from './types';
import {
	Runtime,
	HTTPuppyRouter,
	HTTPuppyRequest,
	HTTPuppyResponse,
	HTTPuppyCallback
} from './types/server';

function _useBetterSignatures(
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

function _useHTTPHandle(
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
			_useBetterSignatures(res);
			return cb(<HTTPuppyRequest>req, <HTTPuppyResponse>res);
		}
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
 * @param attachTo
 * @returns
 */
export function useRouter(
	server: Runtime, // server to attach the router to as a handler
	routerOptions ?: any // placeholder: planned feature
): HTTPuppyRouter {
	// router callback choices
	// todo: setup glob handler functionality if config option is set
	function get(
		url: string,
		cb: typeof HTTPuppyCallback
	): void {
		_useHTTPHandle('GET', url, server, cb);
	}

	function post(
		url: string,
		cb: typeof HTTPuppyServer.HTTPuppyCallback
	): void {
		_useHTTPHandle('POST', url, server, cb);
	}

	function head(
		url: string,
		cb: typeof HTTPuppyCallback
	): void {
		_useHTTPHandle('HEAD', url, server, cb);
	}

	function put(
		url: string,
		cb: typeof HTTPuppyCallback
	): void {
		_useHTTPHandle('PUT', url, server, cb);
	}

	function patch(
		url: string,
		cb: typeof HTTPuppyCallback
	): void {
		_useHTTPHandle('PATCH', url, server, cb);
	}

	function _delete(
		url: string,
		cb: typeof HTTPuppyCallback
	): void {
		_useHTTPHandle('DELETE', url, server, cb);
	}

	return <HTTPuppyServer.HTTPuppyRouter>{
		get,
		head,
		post,
		put,
		patch,
		delete: _delete,
	};
}
