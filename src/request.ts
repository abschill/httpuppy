import { readFileSync } from 'fs';
import { resolve } from 'path';
import { mountFSPath } from './internal/mount-fs';
const mime = require('mime-types');

function handle404(res) {
	res.writeHead(404);
	res.end();
}

function write(res, options) {
	res.writeHead(options.status, options.statusText, ['Content-Type', mime.lookup(options.type)]);
	res.write(options.body);
	res.end();
}

export function useDefaultHandler(req, res, config) {
	const { mountedPath, filesMounted } = mountFSPath(config);
	let pathName = req.url.substring(1, req.url.length);
	console.log(pathName);

	if(pathName === '/' || pathName === '' || pathName == null) {
		pathName = 'index.html';
	}
	if(!filesMounted.includes(pathName)) {
		return handle404(res);
	}
	return write(res, {
		status: 200,
		statusText: 'ok',
		type: mime.lookup(pathName),
		body: readFileSync(resolve(mountedPath, pathName)).toString('utf-8')
	});
}
