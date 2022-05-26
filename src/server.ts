import { createServer } from 'http';
import { iServer, HTTPuppyOptions } from './types';
import { useConfig } from './internal/config';
import { useStartup } from './internal/hooks/startup';
import { usePort } from './internal/hooks/port';
import GracefulShutdown from 'http-graceful-shutdown';
import { useStaticMount } from './internal/hooks/static';
import { DiagnosticLog } from './types/server';

export function useServer(
	server: iServer.SimpleHTTP,
	config: HTTPuppyOptions.UserHTTPConfig
): iServer.SimpleHTTP {
	if(!config.coldInit) {
		server.listen(config.port, config.hostname);
	}
	return server;
}

export function create(
    conf: HTTPuppyOptions.UserHTTPConfig
): iServer.SimpleHTTP {
	//todo - arg parse for runtime opts
	//const argv = useProcessArgs();
	// if(argv) {
	// 	console.log('process args:\n', argv);
	// }

	usePort(conf.port ?? 80);
	const diagnostics: DiagnosticLog[] = [];
    const config = useConfig(conf, diagnostics);
    const _server = createServer(config.handler);
    const server = useStartup(config, _server, diagnostics);
	//todo: static handler move out of top level
	if(config.static) useStaticMount(config, server, diagnostics);
	return useServer(server, config);
}

export function shutdown(
	s: iServer.SimpleHTTP
): iServer.HTTPuppySleep  {
	return GracefulShutdown(s);
}
