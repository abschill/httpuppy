import { virtualRequestHandler } from './mount-fs';
import {
	HTTPuppyServer,
	HTTPuppyRequest,
	HTTPuppyResponse,
} from '../..';
import { lookup } from 'mime-types';
import { HTTPHeader } from '../..';
import busboy from 'busboy';
import { join } from 'path';
import { writeFileSync } from 'fs';
import { randomFillSync } from 'crypto';
import internal from 'stream';

const seed = (() => {
	const buf = Buffer.alloc(16);
	return () => randomFillSync(buf).toString('hex');
})();

const { log } = console;

function useTMPFileWriter(
	server	: HTTPuppyServer,
	name	: string,
	file	: internal.Readable,
	info	: busboy.FileInfo
) {
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
}

function useTMPWriter(
	server	: HTTPuppyServer,
	res		: HTTPuppyResponse,
	body	: Object
) {
	res.writeHead(303, { Connection: 'close', Location: '/' });
	writeFileSync(join(server.pConfig.tmpDir ?? './tmp', `${seed()}-formdata.json`), JSON.stringify(body));
	res.end('Form Submitted');
}
/**
 * @internal useLocalMimeType
 * @description hook for determining content type of a virtual fpath on the system
 * @param fpath the file path of the type to resolve
 * @returns the tuple representing the content type header for the static file
*/
export function mimeType(
	fpath: string
): HTTPHeader {
	if(fpath === '') return {
		'Content-Type': 'text/plain'
	};
	const matchType = lookup(fpath);
	return {
		'Content-Type': (matchType ? matchType : 'text/plain')
	};
}

export function useStaticHandler(
	server	: HTTPuppyServer
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
			virtualRequestHandler(req, res);
		}
		// by default, save any files uploaded from forms to the tmpdir defined in the config
		if(req.method === 'POST') {
			const body = Object();
			const bb = busboy({ headers: req.headers });
			bb.on('file', (name, file, info) => useTMPFileWriter(server, name, file, info));

			bb.on('field', (name, val, info) => {
				if(server.pConfig.log && server.pConfig.log.logLevel === 'verbose') log(`Field [${name}]: value: %j`, val);
				body[name] = val;
			});
			bb.on('close', () => useTMPWriter(server, res, body));
			req.pipe(bb);
		}
	});
}

export * from './mount-fs';
