import { useVirtualRequestHandler } from './mount-fs';
import {
	HTTPuppyServer,
	HTTPuppyRequest,
	HTTPuppyResponse,
} from '../..';
import busboy from 'busboy';
import { join } from 'path';
import { writeFileSync } from 'fs';
// import { randomFillSync } from 'crypto';
const { log } = console;
// const seed = (() => {
// 	const buf = Buffer.alloc(16);
// 	return () => randomFillSync(buf).toString('hex');
// })();
export function useStaticHandler(
	server: HTTPuppyServer
) {
	server.on('request', (
		req: HTTPuppyRequest,
		res: HTTPuppyResponse
	) => {
		req._process = server;
		res._process = server;
		if(server.pConfig.static && req.method === 'GET') {
			server.emit('static-get', req);
			//console.log(isMainThread);
			// static only handles get requests, so after validating those check on the path and if its there, send it
			const hasValidPath = req._process._vfs.mountedFiles.map(file => file.hrefs).flat().includes(<string>req.url);
			if(hasValidPath) {
				useVirtualRequestHandler(req, res);
			}
			// todo check for api path
		}
		// by default, save any files uploaded from forms to the tmpdir defined in the config
		if(req.method === 'POST') {
			const bb = busboy({ headers: req.headers });
			bb.on('file', (name, file, info) => {
				const { filename, encoding, mimeType } = info;
				if(server.pConfig.log && server.pConfig.log.logLevel === 'verbose') {
					log(
						`File [${name}]: filename: %j, encoding: %j, mimeType: %j`,
						filename,
						encoding,
						mimeType
					);
				}
				file.on('data', (data) => writeFileSync(join(server.pConfig.tmpDir ?? './tmp', filename), data))
				.on('close', () => server.pConfig.log && server.pConfig.log.logLevel === 'verbose' ? console.log(`File [${name}] uploaded`) : null);
			});

			bb.on('field', (name, val, info) => {
				log(`Field [${name}]: value: %j`, val);
			});

			bb.on('close', () => {
				res.writeHead(303, { Connection: 'close', Location: '/' });
				res.end('Done Parsing form!');
			});
			req.pipe(bb);
		}
	});
}

export * from './mount-fs';
export * from './url';
export * from './mime-types';
