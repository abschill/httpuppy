/**
 * @module static
 * @description Hooks for Static Content Serving
 */
import { HTTPuppyServer } from './types';
import { useStaticURLParser } from './url';
import { useMiddleware } from './middleware';
import { emitWarning } from 'process';
import { use404 } from './internal/error';
import {
	isBufferType,
	useVirtualStreamReader,
	useWriter
} from './internal/writer';
/**
 *
 * @param config Configuration for runtime that needs static mount
 * @param server Runtime to apply static handler mount point & error diagnostic list
 */
export function useStaticMount(
	config		: HTTPuppyServer.uOptions,
	server		: HTTPuppyServer.Runtime
) {
	// mount configured FS path to the request handler
	server.on('request', (req, res) => {
		try {
			if(config.middleware && config.middleware.length > 0) useMiddleware(config, req, res);
			const pathData = useStaticURLParser(req, config);
			if(req.method === 'GET') {
				if(isBufferType(req.url)) {
					return useVirtualStreamReader(pathData, res);
				}
				else {
						return useWriter(res, config, {
							status: 200,
							statusText: 'ok',
							type: pathData.contentType,
							virtualFile: pathData
						});
					}
				}
		}
		catch(e) {
			emitWarning(e);
			return use404(res);
		}
	});

	server.on('error', (e) =>
		server.diagnostics.push({
			msg: e.stack
		})
	);
}
