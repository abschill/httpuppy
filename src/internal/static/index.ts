import { useVirtualRequestHandler } from './mount-fs';
import {
	HTTPuppyServer,
	HTTPuppyRequest,
	HTTPuppyResponse,
 } from '../..';

export function useStaticHandler(
	server: HTTPuppyServer
) {
	server.on('request', (
		req: HTTPuppyRequest,
		res: HTTPuppyResponse
	) => {
		req._process = server;
		res._process = server;
		if(server.pConfig.static && req.method === 'GET') {
			server.emit('static-get', req);
			//console.log(isMainThread);
			// static only handles get requests, so after validating those check on the path and if its there, send it
			const hasValidPath = req._process._vfs.mountedFiles.map(file => file.hrefs).flat().includes(<string>req.url);
			if(hasValidPath) {
				useVirtualRequestHandler(req, res);
			}
			// todo check for api path
		}
	});
}

export * from './mount-fs';
export * from './url';
export * from './mime-types';
