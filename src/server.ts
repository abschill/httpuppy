import { createServer } from 'http';
import { Server } from './types';
import { cleanConfig } from './internal/config';
import { useDefaultHandler as useDefaultStaticHandler } from './request';
import { useProcessArgs } from './internal/argv';

export function create (
    conf: Server.UserHTTPConfig
): Server.SimpleHTTP {
	//todo - arg parse for runtime opts
	const argv = useProcessArgs();
	if(argv) {
		console.log('process args:\n', argv);
	}
	const diagnostics = [];
    const config = cleanConfig(conf, diagnostics);
    const server = createServer();
    if(config.onMount) server.once('listening', config.onMount);

	// cold init would just be for manually setting the listener up on the port
    if(!config.coldInit) {
        server.listen(config.port, config.hostname);
    }

    if(config.throwWarnings && diagnostics.length > 0) {
        throw new Error(`
Server couldnt initialize without issues, if you'd like to suppress these errors, set the config option "throwWarnings": false
Diagnostic List:\n
${JSON.stringify(diagnostics)}
`);
    }
    const ss = <Server.SimpleHTTP>server;
	ss.diagnostics = diagnostics;
	if (!config.static && config.handler) {
		ss.on('request', config.handler);
	}

	//todo: static handler move out of top level
	if(config.static) {
		ss.on('request', (req, res) => useDefaultStaticHandler(req, res, config));
	}

    return ss;
}


