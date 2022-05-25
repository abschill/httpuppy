#! /usr/bin/node
const { useProcessArgs } = require('../lib/internal/argv');
const { WebServer } = require('../lib');
const args = useProcessArgs();
let pathHref = '';

if(args && args.path) {
	pathHref = args.path;
}

WebServer.create({
	port: 3000,
	static: {
		path: pathHref
	}
});


