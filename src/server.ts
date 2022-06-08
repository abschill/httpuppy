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
	usePort as usePortCheck,
	useStaticHandler
} from './internal';
import {
	Runtime,
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
): Runtime {
	usePortCheck(conf.port ?? 80);
	const diagnostics: DiagnosticLog[] = [];
	const config = useConfig(conf, diagnostics);
	// determine if they wanted a secure or a regular server
	const _server = conf.secure ? useCreateSecureServer(<HTTPSOptions>conf.secureContext, config?.handler) : useCreateServer(config?.handler);
	// _useServer is an internal hook for validating the init process of the server itself and setting diagnostics accordingly if anything goes wrong
	const server = _useServer(config, <Runtime>_server, diagnostics);
	// set up handler to route based on static config
	if(config.static) useStaticHandler(server);
	// hook in logger module
	if(conf.log && conf.log.logLevel !== 'silent') useLogger(conf.log, server);
	// bind safe shutdown to the server for callability on the end user side
	server._shutdown = () => shutdown(server);

	// if not conld init, auto set listening server before return
	if(!config.coldInit) {
		server.listen(conf.port, config.hostname);
	}
	return server;
}
