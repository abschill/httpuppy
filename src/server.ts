import { createServer, IncomingMessage } from 'http';
import { UserHTTPConfig, HTTPConfig, SimpleHTTPServer } from './types';
import { cleanConfig } from './internal/config';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { hasIndex, applyContentType } from './internal/util';
import { mountFSPath } from './internal/mount-fs';
const processArgs = process.argv;

export function create (
    conf: UserHTTPConfig
): SimpleHTTPServer {
	//todo - arg parse for runtime opts
	// console.log(processArgs);
	const diagnostics = [];
    const config = cleanConfig(conf, diagnostics);
    const server = createServer();
    if(config.onMount) server.once('listening', config.onMount);

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
			const pathName = req.url.substring(1, req.url.length);
			let parsableUrl = req.url.includes('.html') ? req.url.split('.html').shift(): req.url;
			if(parsableUrl === 'index') parsableUrl = '/';

			if(parsableUrl === '/' && hasIndex(filesMounted)) {
				applyContentType(res, 'text/html');
				res.write(readFileSync(resolve(mountedPath, 'index.html')).toString('utf-8'));
				res.end();
			}
			else {
				if(filesMounted.includes(pathName)) {
					// placeholder, assume css
					// todo - content type translation based on extension in fs
					const fileContent = readFileSync(resolve(mountedPath, pathName)).toString('utf-8');
					applyContentType(res, 'text/css');
					res.write(fileContent);
					res.end();
				}
				else {
					res.writeHead(404);
					res.end();
				}
			}
		});
	}

    return ss;
}


