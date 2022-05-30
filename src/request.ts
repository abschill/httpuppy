/**
 * @module request
 * @description hooks for handling requests for the core module
 */
import {
	HTTP_INCMSG,
	HTTP_RES,
	HTTPuppyServer
} from './types';
import {
	useStaticURLParser
} from './url';
import { emitWarning } from 'process';
import {
	isBufferType,
	useWriter,
	useStreamReader
} from './internal/writer';
import { use404 } from './internal/error';
import { useMiddleware } from './middleware';

/**
 *
 * @param req incoming message to handle args from
 * @param res response message to send
 * @param config config from server
 * @returns nothing, it inherits flow control from the requesting branch
 */
export function useStaticHandler(
	req		: HTTP_INCMSG,
	res		: HTTP_RES,
	config	: HTTPuppyServer.uOptions
): void {
	const pathData = useStaticURLParser(req, config);
	if(config.middleware && config.middleware.length > 0) useMiddleware(config, req, res);
	if(isBufferType(req.url)) {
		return useStreamReader(pathData, res);
	}
	else {
		try {
			return useWriter(res, config, {
				status: 200,
				statusText: 'ok',
				type: pathData.contentType,
				virtualFile: pathData
			});
		}
		catch(e) {
			emitWarning(e);
			return use404(res);
		}
	}
}
