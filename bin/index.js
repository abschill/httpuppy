#! /usr/bin/env node
const { useAnyConfig } = require('../lib/internal/config/argv');
const { useProcessArgs } = require('../lib/internal/fmt/_argv');
const { useServer } = require('../lib');
let args = useProcessArgs();

if(!args || !args.noConfigFile) {
	args = useAnyConfig(args);
}
if(args.port) args.port = parseInt(args.port);
console.log('Config Loaded:');
console.log(args);

const pathHref = args.path || process.cwd();
const port = parseInt(args.port) || 3000;

useServer({
	coldInit: false,
	port,
	static: {
		path: pathHref
	},
	onMount: () => console.log(`listening on ${port}`)
});


