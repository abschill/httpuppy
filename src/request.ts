import { readFileSync } from 'fs';
import mime from 'mime-types';
import { iServer, HTTP_INCMSG, HTTP_RES } from './types';
import { useMountedFSResponse } from './url';
import { emitWarning } from 'process';

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
	const pathData = useMountedFSResponse(req, config);
	// todo- set images as inline response content
	try {
		return write(res, {
			status: 200,
			statusText: 'ok',
			type: pathData.contentType,
			body: pathData.content
		});
	}
	catch(e) {
		emitWarning(e);
		return handle404(res);
	}
}
