import { HTTPuppyServer, HTTPuppyOptions } from '../types';
import { useStaticHandler } from '../request';

export function useStaticMount(
	config		: HTTPuppyOptions.UserHTTPConfig,
	server		: HTTPuppyServer.Runtime
) {
	// mount configured FS path to the request handler
	server.on('request', (req, res) => {
		useStaticHandler(req, res, config);
	});

	server.on('error', (e) => {
		server.diagnostics.push({
			msg: e.stack
		});
	});
}
