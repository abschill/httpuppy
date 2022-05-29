import {
	HTTP_INCMSG,
	HTTP_RES,
	HTTPuppyOptions
} from './types';
import { useVFSResponse } from './url';
import { emitWarning } from 'process';
import { isBufferType, useWriter, useStreamReader } from './internal/writer';
import { use404 } from './internal/error';

/**
 *
 * @param req incoming message to handle args from
 * @param res response message to send
 * @param config config from server
 * @returns
 */
export function useFSHandler(
	req		: HTTP_INCMSG,
	res		: HTTP_RES,
	config	: HTTPuppyOptions.UserHTTPConfig
): void {
	const pathData = useVFSResponse(req, config);
	if(isBufferType(req.url)) {
		// handle as stream reader
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
