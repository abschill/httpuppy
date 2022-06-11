#! /usr/bin/env node
const { useCLIConfigFinder } = require('../lib/internal/config/argv');
const { useColorTag } = require('../lib/internal/fmt/_color');
const { useServer } = require('../lib');
const cluster = require('cluster');
const { log } = console;

useCLIConfigFinder().then(config => {
	if((!config.log || config.log.logLevel !== 'silent') && cluster.isPrimary) {
		log(useColorTag('blue', 'httpuppy config:'))
		log(config);
		if(cluster.isWorker) log(useColorTag('green', 'worker setup'));
	}
	if(config.config) {
		useServer({
			...config.config,
			...config.static
		}).start();
	}
	else {
		useServer({
			...config
		}).start();
	}
});
