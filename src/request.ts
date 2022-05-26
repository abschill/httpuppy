import {
	HTTP_INCMSG,
	HTTP_RES,
	HTTPuppyOptions,
	iPuppy
} from './types';
import { useVFSResponse } from './url';
import { emitWarning } from 'process';
import { useHeaders } from './middleware';

function use404(
	res: HTTP_RES
): void {
	res.writeHead(404, '404: page not found');
	res.end('404: page not found');
	return;
}

function useWrite(
	res: HTTP_RES,
	config: HTTPuppyOptions.UserHTTPConfig,
	options: iPuppy.HTTPBodyWriterOptions
): void {
	res.writeHead(options.status, options.statusText, useHeaders(options, config));
	res.write(options.body);
	res.end();
	return;
}

export function useFSHandler(
	req: HTTP_INCMSG, // incoming message to handle args from
	res: HTTP_RES, // response message to send
	config: HTTPuppyOptions.UserHTTPConfig // config from server
): void {
	const pathData = useVFSResponse(req, config);
	// todo- set images as inline response content
	try {
		return useWrite(res, config, {
			status: 200,
			statusText: 'ok',
			type: pathData.contentType,
			body: pathData.content
		});
	}
	catch(e) {
		emitWarning(e);
		return use404(res);
	}
}
