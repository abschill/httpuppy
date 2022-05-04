import { createServer, IncomingMessage } from 'http';
import { UserHTTPConfig, HTTPConfig, SimpleHTTPServer } from './types';

import { cleanConfig } from './internal/config';
import { readFileSync, readdirSync } from 'fs';
import { join, resolve } from 'path';

const processArgs = process.argv;

export function createWebServer (
    conf: UserHTTPConfig
): SimpleHTTPServer {
	//todo - arg parse for runtime opts
	// console.log(processArgs);
	const diagnostics = [];
    const config = cleanConfig(conf, diagnostics);
    const server = createServer();
    if(config.mountCallback) server.once('listening', config.mountCallback);
    if(!config.coldInit) {
        server.listen(config.port, config.hostname);
    }

    if(config.throwWarnings) {
        throw new Error(`
Server couldnt initialize without issues, if you'd like to suppress these errors, set the config option "throwWarnings": false
`);
    }
    const ss = <SimpleHTTPServer>server;

	if (!config.static && config.handler) {
		ss.on('request', config.handler);
	}

	//todo: static handler move out of top level
	if(config.static) {
		ss.on('request', (req, res) => {
			const mountedPath = join(process.cwd(), config.static.path);
			const filesMounted = readdirSync(mountedPath);
			if(config.static.href === '/') {
				//handle base
				if(filesMounted.includes('index.html')) {
					res.writeHead(200, 'success', ['Content-Type', 'text/html']);
					res.write(readFileSync(resolve(mountedPath, 'index.html')).toString('utf-8'));
					res.end();
				}
			}
			else if(req.url === config.static.href) {
				res.writeHead(200, 'success');
				res.write('url matches static href');
				res.end();
			}

			res.writeHead(500, 'error: fs path failed to mount');
			res.end();
		});
	}

    return ss;
}


