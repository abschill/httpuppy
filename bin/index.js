#! /usr/bin/env node
const { useAnyConfig } = require('../lib/internal/config/argv');
const { useProcessArgs } = require('../lib/internal/fmt/_argv');
const { _useColorTag } = require('../lib/internal/fmt/_color');
const { useServer } = require('../lib');
let args = useProcessArgs();

if(!args || !args.noConfigFile) {
	args = useAnyConfig(args);
}
if(args.port) args.port = parseInt(args.port);
const pathHref = args.path || process.cwd();
const port = parseInt(args.port) || 3000;
console.log('Config Loaded:');
const cli_config = {
	port: port,
	static: {
		path: pathHref
	}
}
console.log(cli_config);
useServer({
	...cli_config,
	coldInit: false,
	onMount: () => {
		console.log(`${_useColorTag('green', 'httpuppy')}: listening on ${port}`);
	}
});


