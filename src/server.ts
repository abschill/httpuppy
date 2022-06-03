/**
 * @module server
 * @example calling the userServer hook
	* ```javascript

	* ```
 */
import { createServer as stlCreateServer } from 'http';
import { createServer as stdCreateSecureServer } from 'https';
import { HTTPuppyServer } from './types';
import { useConfig } from './internal/config';
import { _useServer } from './internal/startup';
import { usePort } from './internal/port';
import { shutdown } from './internal/_shutdown';
import { useStaticMount } from './static';
import { DiagnosticLog } from './types/server';
import { useLogger } from './internal/logger';

/**
 * @function useServer
 * @example
 * ```javascript
* const app = useServer({
* 	static: {
* 		path: join(process.cwd(), './examples/files')
* 	},
* 	middleware: [
* 		{
*			href: '/',
*			handler: (req, res) => console.log('middleware')
*		}
*	],
* });
* ```
 * @param conf configuration options
 * @returns httpuppy server
 */
export function useServer(
    conf	: HTTPuppyServer.uOptions
): HTTPuppyServer.Runtime {
	usePort(conf.port ?? 80);
	const diagnostics: DiagnosticLog[] = [];
	// useAnyConfig();
    const config = useConfig(conf, diagnostics);
	let _server;
	if(!conf.secure) {
		_server = stlCreateServer(config.handler);
	}
	else {
		_server = stdCreateSecureServer(conf.secureContext, config.handler);
	}
    const server = _useServer(config, _server, diagnostics);
	if(conf.log && conf.log.logLevel !== 'silent') useLogger(conf.log, server);
	if(config.static) useStaticMount(config, server);
	if(!config.coldInit) {
		server.listen(config.port, config.hostname);
	}
	server._shutdown = () => shutdown(server);
	return server;
}
