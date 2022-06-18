import { virtualRequestHandler } from './mount-fs';
import {
	HTTPuppyServer,
	HTTPuppyRequest,
	HTTPuppyResponse
} from '../..';
import { lookup } from 'mime-types';
import { HTTPHeader } from '../..';
/**
 * @internal useLocalMimeType
 * @description hook for determining content type of a virtual fpath on the system
 * @param fpath the file path of the type to resolve
 * @returns the tuple representing the content type header for the static file
*/
export function mimeType(
	fpath: string
): HTTPHeader {
	if(fpath === '') return {
		'Content-Type': 'text/plain'
	};
	const matchType = lookup(fpath);
	return {
		'Content-Type': (matchType ? matchType : 'text/plain')
	};
}
export function useStaticHandler(
	server	: HTTPuppyServer
) {
	server.on('request', (
		req: HTTPuppyRequest,
		res: HTTPuppyResponse
	) => {
		req._process = server;
		res._process = server;
		if(!server.pConfig.static || req.method !== 'GET' ||
		(server.pConfig.static.href && (!req.url?.includes(server.pConfig.static.href)))) {
			return;
		}
		if(req._process._vfs.mountedFiles.map(file => file.hrefs).flat().includes(<string>req.url)) {
			server.emit('static-get', req);
			return virtualRequestHandler(req, res);
		}
		return;
	});
}

export * from './mount-fs';
