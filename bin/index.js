#! /usr/bin/node
const { useProcessArgs } = require('../lib/internal/argv');
const { HTTPuppyCore } = require('../lib');
const { readFileSync } = require('fs');
const { join } = require('path');
const args = useProcessArgs();
let pathHref = process.cwd();

if(args && args.path) {
	pathHref = args.path;
}

HTTPuppyCore.createServer({
	port: 3000,
	static: {
		path: pathHref
	},
	secure: true,
	secureContext: {
		key: readFileSync(join(process.cwd(), 'server.key')),
		cert: readFileSync(join('server.cert'))
	},
	onMount: () => console.log('listening on 3000')
});


