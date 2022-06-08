#! /usr/bin/env node
const { useCLIConfigFinder } = require('../lib/internal/config/argv');
const { _useColorTag } = require('../lib/internal/fmt/_color');
const { useServer } = require('../lib');
useCLIConfigFinder().then(config => {
	console.log(_useColorTag('blue', 'httpuppy config:'))
	console.log(config);
	if(config.config) {
		useServer({
			...config.config,
			...config.static,
			coldInit: false,
			onMount: () => console.log(_useColorTag('green', 'server started'), ` on port ${config.port ?? 80}`)
		});
	}
	else {
		useServer({
			...config,
			coldInit: false,
			onMount: () => console.log(_useColorTag('green', 'server started'), ` on port ${config.port ?? 80}`)
		});
	}
});
