/**
 * @module server
 * @description core server module
 */
import { createServer as stlCreateServer } from 'http';
import { createServer as stdCreateSecureServer } from 'https';
import { HTTPuppyServer } from './types';
import { useConfig } from './internal/config';
import { _useServer } from './internal/startup';
import { usePort } from './internal/port';
import { shutdown } from './internal/_shutdown';
import { useStaticMount } from './internal/mount-fs';
import { useLogger } from './internal/logger';
import { ServerOptions as HTTPSOptions } from 'https';
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
    conf	: HTTPuppyServer.HTTPuppyServerOptions // user config for server
): HTTPuppyServer.Runtime {
	usePort(conf.port ?? 80);
	const diagnostics: HTTPuppyServer.DiagnosticLog[] = [];
	// useAnyConfig();
    const config = useConfig(conf, diagnostics);
	let _server;
	if(!conf.secure) {
		_server = stlCreateServer(config.handler);
	}
	else {
		_server = stdCreateSecureServer(<HTTPSOptions>conf.secureContext, config.handler);
	}

	const server = _useServer(config, <HTTPuppyServer.Runtime>_server, diagnostics);
	server.pConfig = config;

	server.on('request', (
		req: HTTPuppyServer.HTTPuppyRequest,
		res: HTTPuppyServer.HTTPuppyResponse
	) => {
		req._process = server;
		res._process = server;
	});

	if(conf.log && conf.log.logLevel !== 'silent') useLogger(conf.log, server);
	if(config.static) useStaticMount(config, server);

	server._shutdown = () => shutdown(server);



	if(!config.coldInit) {
		server.listen(config.port, config.hostname);
	}
	return server;
}
