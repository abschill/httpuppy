import { createServer } from 'http';
import { iServer } from './types';
import { cleanConfig } from './internal/config';
import { useDefaultHandler } from './request';
import { useStartup } from './internal/hooks/startup';
import GracefulShutdown = require('http-graceful-shutdown');
export function create (
    conf: iServer.UserHTTPConfig
): iServer.SimpleHTTP {
	//todo - arg parse for runtime opts
	//const argv = useProcessArgs();
	// if(argv) {
	// 	console.log('process args:\n', argv);
	// }
	const diagnostics = [];
    const config = cleanConfig(conf, diagnostics);
    const server = createServer();
    const ss = useStartup(config, server, diagnostics);

	if (!config.static && config.handler) {
		ss.on('request', config.handler);
	}

	//todo: static handler move out of top level
	if(config.static) {
		ss.on('request', (req, res) => useDefaultHandler(req, res, config));
	}

    return ss;
}

export function shutdown(s: iServer.SimpleHTTP) {
	return GracefulShutdown(s);
}
