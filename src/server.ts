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
import { useMiddleware } from './middleware';

/**
 *
 * @param conf configuration options
 * @returns httpuppy server
 */
export function useServer(
    conf	: HTTPuppyServer.uOptions
): HTTPuppyServer.Runtime {
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

	if(config.static) useStaticMount(config, server);
	if(!config.coldInit) {
		server.listen(config.port, config.hostname);
	}
	return server;
}
/**
 *
 * @param s http server to shut down
 * @returns void promise to gracefully shut down
 */
export async function shutdown(
	s	: HTTPuppyServer.Runtime
): Promise<HTTPuppyServer.HTTPuppySleep>  {
	try {
		s.onClose();
		s.removeAllListeners();
		s.close();

		return GracefulShutdown(s);
	}
	catch(e) {
		process.exit(1);
	}

}
