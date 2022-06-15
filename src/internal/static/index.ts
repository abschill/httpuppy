import { useVirtualRequestHandler } from './mount-fs';
import {
	HTTPuppyServer,
	HTTPuppyRequest,
	HTTPuppyResponse,
} from '../..';
import busboy from 'busboy';
import { join } from 'path';
import { writeFileSync } from 'fs';
import { randomFillSync } from 'crypto';

const seed = (() => {
	const buf = Buffer.alloc(16);
	return () => randomFillSync(buf).toString('hex');
})();

const { log } = console;
export function useStaticHandler(
	server: HTTPuppyServer
) {
	server.on('request', (
		req: HTTPuppyRequest,
		res: HTTPuppyResponse
	) => {
		req._process = server;
		res._process = server;
		if(server.pConfig.static && req.method === 'GET' &&
		(req._process._vfs.mountedFiles.map(file => file.hrefs).flat().includes(<string>req.url))) {
			server.emit('static-get', req);
			useVirtualRequestHandler(req, res);
		}
		// by default, save any files uploaded from forms to the tmpdir defined in the config
		if(req.method === 'POST') {
			const body = Object();
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
				if(server.pConfig.log && server.pConfig.log.logLevel === 'verbose') log(`Field [${name}]: value: %j`, val);
				body[name] = val;
			});

			bb.on('close', () => {
				res.writeHead(303, { Connection: 'close', Location: '/' });
				writeFileSync(join(server.pConfig.tmpDir ?? './tmp', `${seed()}-formdata.json`), JSON.stringify(body));
				res.end('Form Submitted');
			});
			req.pipe(bb);
		}
	});
}

export * from './mount-fs';
export * from './url';
export * from './mime-types';
