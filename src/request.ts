import { readFileSync } from 'fs';
import { resolve } from 'path';
import { mountFSPath } from './internal/mount-fs';
import mime from 'mime-types';
import { iServer, HTTP_INCMSG, HTTP_RES } from './types';

function handle404 (
	res: HTTP_RES
): void {
	res.writeHead(404);
	res.end();
	return;
}

function write (
	res: HTTP_RES,
	options
): void {
	res.writeHead(options.status, options.statusText, ['Content-Type', mime.lookup(options.type)]);
	res.write(options.body);
	res.end();
	return;
}

export function useDefaultHandler (
	req: HTTP_INCMSG, // incoming message to handle args from
	res: HTTP_RES, // response message to send
	config: Required<iServer.UserHTTPConfig> // config from server
): void {
	const { mountedPath, filesMounted } = mountFSPath(config);
	let pathName = req.url.substring(1, req.url.length);

	if(pathName === '/' || pathName === '' || pathName == null) {
		pathName = config?.static?.indexType ?? 'index.html';
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
