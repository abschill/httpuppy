/**
 * @module static
 * @description Hooks for Static Content Serving
 */
import { HTTPuppyServer } from './types';
import { useStaticHandler } from './request';

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
		if(req.method === 'GET') useStaticHandler(req, res, config);
	});

	server.on('error', (e) =>
		server.diagnostics.push({
			msg: e.stack
		})
	);
}
