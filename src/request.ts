import { readFileSync } from 'fs';
import { resolve } from 'path';
import { useMountedFS } from './internal/mount-fs';
import mime from 'mime-types';
import { iServer, HTTP_INCMSG, HTTP_RES } from './types';
import { iValidURL } from './url';

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
	res.writeHead(options.status, options.statusText, [['Content-Type', mime.lookup(options.type)]]);
	res.write(options.body);
	res.end();
	return;
}

export function useFSHandler (
	req: HTTP_INCMSG, // incoming message to handle args from
	res: HTTP_RES, // response message to send
	config: Required<iServer.UserHTTPConfig> // config from server
): void {
	const vFS = useMountedFS(config);
	const pathData = iValidURL(req, config, vFS);
	const fileName = resolve(process.cwd(), pathData.symLink);
	// todo- set images as inline response content
	if(vFS.filesMounted.includes(pathData.fileName)) {
		return write(res, {
			status: 200,
			statusText: 'ok',
			type: pathData.contentType,
			body: readFileSync(fileName).toString('utf-8')
		});
	}
	else {
		return handle404(res);
	}
}
