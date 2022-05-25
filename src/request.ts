import { readFileSync } from 'fs';
import { resolve } from 'path';
import { mountFSPath } from './internal/mount-fs';
import { IncomingMessage, ServerResponse } from 'http';
import mime = require('mime-types');
import { Server } from './types';

function handle404 (
	res: ServerResponse
): void {
	res.writeHead(404);
	res.end();
	return;
}

function write (
	res: ServerResponse,
	options
): void {
	res.writeHead(options.status, options.statusText, ['Content-Type', mime.lookup(options.type)]);
	res.write(options.body);
	res.end();
	return;
}

export function useDefaultHandler (
	req: IncomingMessage, // incoming message to handle args from
	res: ServerResponse, // response message to send
	config: Required<Server.UserHTTPConfig> // config from server
): void {
	const { mountedPath, filesMounted } = mountFSPath(config);
	let pathName = req.url.substring(1, req.url.length);

	if(pathName === '/' || pathName === '' || pathName == null) {
		pathName = 'index.html';
	}
	if(!filesMounted.includes(pathName)) {
		return handle404(res);
	}
	return write(res, {
		status: 200,
		statusText: 'ok',
		type: mime.lookup(pathName),
		body: readFileSync(resolve(mountedPath, pathName)).toString('utf-8')
	});
}
