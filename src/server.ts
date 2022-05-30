import { createServer as stlCreateServer } from 'http';
import { createServer as stdCreateSecureServer } from 'https';
import { HTTPuppyServer } from './types';
import { useConfig } from './internal/config';
import { useStartup } from './internal/startup';
import { usePort } from './internal/port';
import GracefulShutdown from 'http-graceful-shutdown';
import { useStaticMount } from './internal/static';
import { DiagnosticLog } from './types/server';
import { useAnyConfig } from './internal/argv';

/**
 *
 * @param server The final hook to run when a server is created, will return and optionally start the server
 * @param config the configuration for the given server
 * @returns The HTTP Server runtime
 */
export function useServer(
	server	: HTTPuppyServer.Runtime,
	config	: HTTPuppyServer.uOptions
): HTTPuppyServer.Runtime {
	if(!config.coldInit) {
		server.listen(config.port, config.hostname);
	}
	return server;
}

/**
 *
 * @param conf configuration options
 * @returns httpuppy server
 */
export function createServer(
    conf	: HTTPuppyServer.uOptions
): HTTPuppyServer.Runtime {
	//todo - arg parse for runtime opts
	//const argv = useProcessArgs();
	// if(argv) {
	// 	console.log('process args:\n', argv);
	// }

	usePort(conf.port ?? 80);
	const diagnostics: DiagnosticLog[] = [];
	useAnyConfig();
    const config = useConfig(conf, diagnostics);
	let _server;
	if(!conf.secure) {
		_server = stlCreateServer(config.handler);
	}
	else {
		_server = stdCreateSecureServer(conf.secureContext, config.handler);
	}
    const server = useStartup(config, _server, diagnostics);
	//todo: static handler move out of top level
	if(config.static) useStaticMount(config, server);
	return useServer(server, config);
}
/**
 *
 * @param s http server to shut down
 * @returns void promise to gracefully shut down
 */
export function shutdown(
	s	: HTTPuppyServer.Runtime
): HTTPuppyServer.HTTPuppySleep  {
	return GracefulShutdown(s);
}
