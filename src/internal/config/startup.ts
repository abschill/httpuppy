/**
 * @internal
 */
import {
	HTTPuppyServer,
} from '../../types';

/**
 * @internal _useServer
 * @description an internal startup process for the `useServer` hook
 * @param config config from user for runtime
 * @param server server generated from node standard http library
 * @param diagnostics diagnostic list from the prestartup process
 * @returns the http server object
 */
export function _useServer(
	config	: HTTPuppyServer.HTTPuppyServerOptions,
	server	: HTTPuppyServer.Runtime,
	diagnostics: HTTPuppyServer.DiagnosticLog[]
): HTTPuppyServer.Runtime {
	if(config.onMount) server.once('listening', config.onMount);
	const ss = <HTTPuppyServer.Runtime>server;
	ss.diagnostics = diagnostics;
	ss.onClose = config.onClose;
	return ss;
}
