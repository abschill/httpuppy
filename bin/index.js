#! /usr/bin/node
const { useProcessArgs } = require('../lib/internal/argv');
const { useServer } = require('../lib');
const args = useProcessArgs();
let pathHref = process.cwd();
let port = 3000;
if(args && args.path) {
	pathHref = args.path;
}

if(args && args.port) {
	port = port;
}

useServer({
	coldInit: false,
	port,
	static: {
		path: pathHref
	},
	onMount: () => console.log('listening on 3000')
});


