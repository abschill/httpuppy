import {
	HTTP_INCMSG,
	HTTP_RES,
	HTTPuppyOptions,
	iPuppy
} from './types';
import { useVFSResponse } from './url';
import { emitWarning } from 'process';
import { useHeaders } from './middleware';

/**
 *
 * @param res internal response to be written to
 * @returns nothing
 */
function use404(
	res: HTTP_RES
): void {
	res.writeHead(404, '404: page not found');
	res.end('404: page not found');
	return;
}
/**
 *
 * @param res the response to write to
 * @param config the config to base the write on
 * @param options the writer instance options
 * @returns
 */
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
/**
 *
 * @param req incoming message to handle args from
 * @param res response message to send
 * @param config config from server
 * @returns
 */
export function useFSHandler(
	req: HTTP_INCMSG, //
	res: HTTP_RES, //
	config: HTTPuppyOptions.UserHTTPConfig
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
