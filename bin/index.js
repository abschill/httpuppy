#! /usr/bin/env node
const { useAnyConfig } = require('../lib/internal/config/argv');
const { useProcessArgs } = require('../lib/internal/fmt/_argv');
const { useServer } = require('../lib');
let args = useProcessArgs();

if(!args || !args.noConfigFile) {
	args = useAnyConfig(args);
}

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


