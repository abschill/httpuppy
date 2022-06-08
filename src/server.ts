/**
 * @module server
 * @description core server module
 */
import { createServer as stlCreateServer } from 'http';
import { createServer as stdCreateSecureServer } from 'https';
import { useConfig } from './internal/config';
import { _useServer } from './internal/config/startup';
import { usePort } from './internal/port';
import { shutdown } from './internal/_shutdown';
import { useMountedFS, useVirtualRequestHandler } from './internal/static/mount-fs';
import { useLogger } from './internal/logger';
import { ServerOptions as HTTPSOptions } from 'https';
import { isMainThread } from 'worker_threads';
import {
	Runtime,
	HTTPuppyRequest,
	HTTPuppyResponse,
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
	usePort(conf.port ?? 80);
	const diagnostics: DiagnosticLog[] = [];
	const config = useConfig(conf, diagnostics);
	// we are yet to narrow whether or not to create a secure or regular http server
	let _server;
	// handle based on config
	if(!conf.secure) {
		_server = stlCreateServer(config?.handler);
	}
	else {
		_server = stdCreateSecureServer(<HTTPSOptions>conf.secureContext, config?.handler);
	}
	// _useServer is an internal hook for validating the init process of the server itself and setting diagnostics accordingly if anything goes wrong
	const server = _useServer(config, <Runtime>_server, diagnostics);
	// set process config to the hooked config
	server.pConfig = config;
	// if static properties exist, mount the vfs based on them
	if(config.static) {
		server._vfs = useMountedFS(server);
	}
	// set up handler to route based on static config
	server.on('request', (
		req: HTTPuppyRequest,
		res: HTTPuppyResponse
	) => {
		req._process = server;
		res._process = server;
		if(server.pConfig.static && req.method === 'GET') {
			//console.log(isMainThread);
			// static only handles get requests, so after validating those check on the path and if its there, send it
			const hasValidPath = req._process._vfs.mountedFiles.map(file => file.hrefs).flat().includes(<string>req.url);
			if(hasValidPath) {
				useVirtualRequestHandler(req, res);
			}
			// todo check for api path
		}
	});
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
