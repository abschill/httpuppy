import { iServer, HTTP_INCMSG, HTTP_RES } from './types';
import { useVFSResponse } from './url';
import { emitWarning } from 'process';
import { useEtag } from './internal/etag';
function handle404 (
	res: HTTP_RES
): void {
	res.writeHead(404);
	res.end();
	return;
}

function write (
	res: HTTP_RES,
	options: {
		status: number
		statusText: string
		type: string
		body: any
	}
): void {
	res.writeHead(options.status, options.statusText, [['ETag', useEtag(options.body, { weak: true })], ['Content-Type', options.type]]);
	res.write(options.body);
	res.end();
	return;
}

export function useFSHandler (
	req: HTTP_INCMSG, // incoming message to handle args from
	res: HTTP_RES, // response message to send
	config: Required<iServer.UserHTTPConfig> // config from server
): void {
	const pathData = useVFSResponse(req, config);
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
