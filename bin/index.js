#! /usr/bin/env node
const { useCLIConfigFinder } = require('../lib/internal/config/argv');
const { useColorTag } = require('../lib/internal/fmt/_color');
const { useServer } = require('../lib');
const { log } = console;

useCLIConfigFinder().then(config => {
	if(!config.log || config.log.logLevel !== 'silent') {
		log(useColorTag('blue', 'httpuppy config:'))
		log(config);
	}
	if(config.config) {
		useServer({
			...config.config,
			...config.static,
			coldInit: false
		});
		return;
	}
	else {
		useServer({
			...config,
			coldInit: false
		});
	}
});
