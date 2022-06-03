/**
 * @module router
 * @description for adding custom routing to your server
 */
import { HTTPuppyServer } from './types';
import { HTTPuppyRequest, HTTPuppyResponse } from './types/server';

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
	attachTo: HTTPuppyServer.Runtime,
	routerOptions ?: any // placeholder: planned feature
) {
	// router callback choices
	// todo: setup glob handler functionality if config option is set
	function get(
		url: string,
		cb: typeof HTTPuppyServer.HTTPuppyCallback
	): void {
		attachTo.on('request', (req, res) => {
			if(req.method === 'GET' && req.url === url) {
				return cb(<HTTPuppyRequest>req, <HTTPuppyResponse>res);
			}
			return;
		});
	}

	function post(
		url: string,
		cb: typeof HTTPuppyServer.HTTPuppyCallback
	): void {
		attachTo.on('request', (req, res) => {
			if(req.method === 'POST' && req.url === url) {
				return cb(<HTTPuppyRequest>req, <HTTPuppyResponse>res);
			}
			return;
		});
	}

	function head(
		url: string,
		cb: typeof HTTPuppyServer.HTTPuppyCallback
	): void {
		attachTo.on('request', (req, res) => {
			if(req.method === 'HEAD' && req.url === url) {
				return cb(<HTTPuppyRequest>req, <HTTPuppyResponse>res);
			}
			return;
		});
	}

	function put(
		url: string,
		cb: typeof HTTPuppyServer.HTTPuppyCallback
	): void {
		attachTo.on('request', (req, res) => {
			if(req.method === 'PUT' && req.url === url) {
				return cb(<HTTPuppyRequest>req, <HTTPuppyResponse>res);
			}
			return;
		});
	}

	function patch(
		url: string,
		cb: typeof HTTPuppyServer.HTTPuppyCallback
	): void {
		attachTo.on('request', (req, res) => {
			if(req.method === 'PATCH' && req.url === url) {
				return cb(<HTTPuppyRequest>req, <HTTPuppyResponse>res);
			}
			return;
		});
	}

	function _delete(
		url: string,
		cb: typeof HTTPuppyServer.HTTPuppyCallback
	): void {
		attachTo.on('request', (req, res) => {
			if(req.method === 'DELETE' && req.url === url) {
				return cb(<HTTPuppyRequest>req, <HTTPuppyResponse>res);
			}
			return;
		});
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
