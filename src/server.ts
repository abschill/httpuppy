/**
 * @module server
 * @description core server module
 */
import { createServer as useCreateServer } from 'http';
import { createServer as useCreateSecureServer } from 'https';
import { ServerOptions as HTTPSOptions } from 'https';
import {
	shutdown,
	useLogger,
	useConfig,
	_useServer,
	useStaticHandler
} from './internal';
import {
	HTTPuppyServer,
	HTTPuppyServerOptions,
	DiagnosticLog
} from './types';
/**
 * @function useServer
 * @example
 * ```javascript
* const app = useServer({
* 	static: {
* 		path: './examples/files'
* 	}
* });
* ```
 * @param conf configuration options
 * @returns httpuppy server
 */
export function useServer(
    conf	: HTTPuppyServerOptions // user config for server
): HTTPuppyServer {
	const diagnostics: DiagnosticLog[] = [];
	const config = useConfig(conf, diagnostics);
	// determine if they wanted a secure or a regular server
	const _server = conf.secure ? useCreateSecureServer(<HTTPSOptions>conf.secureContext, config?.handler) : useCreateServer(config?.handler);
	// _useServer is an internal hook for validating the init process of the server itself and setting diagnostics accordingly if anything goes wrong
	const server = _useServer(config, <HTTPuppyServer>_server, diagnostics);
	// set up handler to route based on static config
	if(config.static) useStaticHandler(server);
	// hook in logger module
	if(config.log.logLevel !== 'silent') useLogger(config.log, server);
	// bind safe shutdown to the server for callability on the end user side
	server.stop = () => shutdown(server);
	return server;
}
