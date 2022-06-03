/**
 * @module request
 * @description hooks for handling requests for the core module
 */
import { useStaticURLParser } from './url';
import { emitWarning } from 'process';
import { use404 } from './internal/error';
import { useMiddleware } from './middleware';
import { _useCloseHandler } from './internal/_middleware';
import {
	uOptions,
	HTTPuppyRequest,
	HTTPuppyResponse,
} from './types/server';
import {
	isBufferType,
	useWriter,
	useVirtualStreamReader
} from './internal/writer';
/**
 *
 * @param req incoming message to handle args from
 * @param res response message to send
 * @param config config from server
 * @returns nothing, it inherits flow control from the requesting branch
 */
export function useStaticHandler(
	req		: HTTPuppyRequest,
	res		: HTTPuppyResponse,
	config	: uOptions
): void {
	//_useCloseHandler<HTTPuppyRequest>(req, test);
	if(!config.static) {
		throw 'error: static handler invoked without any options';
	}
	const pathData = useStaticURLParser(req, config);
	if(config.middleware && config.middleware.length > 0) useMiddleware(config, req, res);
	if(isBufferType(req.url)) {
		return useVirtualStreamReader(pathData, res);
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
