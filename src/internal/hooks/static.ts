import { Server, HTTPuppyOptions } from '../../types';
import { useFSHandler } from '../../request';

export function useStaticMount(
	config		: HTTPuppyOptions.UserHTTPConfig,
	server		: Server,
	diagnostics
) {
	// mount configured FS path to the request handler
	server.on('request', (req, res) => {
		useFSHandler(req, res, config);
	});
}
