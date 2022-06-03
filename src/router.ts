import { HTTPuppyServer } from './types';

export function useRouter(
	attachTo: HTTPuppyServer.Runtime
) {
	function get(url, cb) {
		attachTo.on('request', (req, res) => {
			if(req.method === 'GET' && req.url === url) {
				return cb(req, res);
			}
			else {
				return;
			}
		});
	}
	function post(url, cb) {
		attachTo.on('request', (req, res) => {
			if(req.method === 'POST' && req.url === url) {
				return cb(req, res);
			}
			else {
				return;
			}
		});
	}
	function head(url, cb) {
		attachTo.on('request', (req, res) => {
			if(req.method === 'HEAD' && req.url === url) {
				return cb(req, res);
			}
			else {
				return;
			}
		});
	}
	function put(url, cb) {
		attachTo.on('request', (req, res) => {
			if(req.method === 'PUT' && req.url === url) {
				return cb(req, res);
			}
			else {
				return;
			}
		});
	}

	function patch(url, cb) {
		attachTo.on('request', (req, res) => {
			if(req.method === 'PATCH' && req.url === url) {
				return cb(req, res);
			}
			else {
				return;
			}
		});
	}

	function _delete(url, cb) {
		attachTo.on('request', (req, res) => {
			if(req.method === 'DELETE' && req.url === url) {
				return cb(req, res);
			}
			else {
				return;
			}
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
