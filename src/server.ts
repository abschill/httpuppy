import { createServer, IncomingMessage } from 'http';
import { UserHTTPConfig, HTTPConfig, SimpleHTTPServer } from './types';
import { cleanConfig } from './internal/config';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { hasIndex, applyContentType } from './internal/util';
import { mountFSPath } from './internal/mount-fs';
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

	// cold init would just be for manually setting the listener up on the port
    if(!config.coldInit) {
        server.listen(config.port, config.hostname);
    }

	// thrown warnings if
    if(config.throwWarnings && diagnostics.length > 0) {
        throw new Error(`
Server couldnt initialize without issues, if you'd like to suppress these errors, set the config option "throwWarnings": false
Diagnostic List:\n
${JSON.stringify(diagnostics)}
`);
    }
    const ss = <SimpleHTTPServer>server;
	ss.diagnostics = diagnostics;
	if (!config.static && config.handler) {
		ss.on('request', config.handler);
	}

	//todo: static handler move out of top level
	if(config.static) {
		ss.on('request', (req, res) => {
			const { mountedPath, filesMounted } = mountFSPath(config);
			if(config.static.href === '/') {
				//handle base
				if(hasIndex(filesMounted)) {
					applyContentType(res, 'text/html');
					res.write(readFileSync(resolve(mountedPath, 'index.html')).toString('utf-8'));
					res.end();
				}
			}
			else if(req.url === config.static.href) {
				res.writeHead(200, 'success');
				res.write('url matches static href');
				res.end();
			}
			else {
				res.writeHead(500, 'error: fs path failed to mount');
				res.end();
			}
		});
	}

    return ss;
}


