import { createServer } from 'http';
import { iServer } from './types';
import { useConfig } from './internal/config';
import { useStartup } from './internal/hooks/startup';
import { usePort } from './internal/hooks/port';
import GracefulShutdown from 'http-graceful-shutdown';
import { useStaticMount } from './internal/hooks/static';

export function create (
    conf: iServer.UserHTTPConfig
): iServer.SimpleHTTP {
	//todo - arg parse for runtime opts
	//const argv = useProcessArgs();
	// if(argv) {
	// 	console.log('process args:\n', argv);
	// }

	usePort(conf.port ?? 80);
	const diagnostics = [];
    const config = useConfig(conf, diagnostics);
    const server = createServer(config.handler);
    const ss = useStartup(config, server, diagnostics);
	//todo: static handler move out of top level
	if(config.static) useStaticMount(config, server, diagnostics);
	return !config.coldInit?<iServer.SimpleHTTP>server.listen(config.port, config.hostname): ss;
}

export function shutdown (
	s: iServer.SimpleHTTP
) {
	return GracefulShutdown(s);
}
