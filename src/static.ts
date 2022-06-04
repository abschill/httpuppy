/**
 * @module static
 * @description Hooks for Static Content Serving
 */
import { HTTPuppyServer } from './types';
import { useStaticURLParser } from './url';
import { applyMiddleware } from './internal/_middleware';
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
	config		: HTTPuppyServer.HTTPuppyServerOptions,
	server		: HTTPuppyServer.Runtime
) {
	// mount configured FS path to the request handler
	server.on('request', (
		req: HTTPuppyServer.HTTPuppyRequest,
		res: HTTPuppyServer.HTTPuppyResponse
	) => {
		try {
			if(config.middleware && config.middleware.length > 0) applyMiddleware(config, req, res);
			const pathData = useStaticURLParser(req, config);
			if(req.method === 'GET') {
				if(isBufferType(<string>req.url)) {
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
		catch(e: unknown) {
			emitWarning(JSON.stringify(e));
			return use404(res);
		}
	});

	server.on('error', (e) =>
		server.diagnostics.push({
			msg: e.message
		})
	);
}
