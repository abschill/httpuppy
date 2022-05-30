#! /usr/bin/node
const { useProcessArgs } = require('../lib/internal/argv');
const { createServer } = require('../lib');
// const { readFileSync } = require('fs');
// const { join } = require('path');
const args = useProcessArgs();
let pathHref = process.cwd();

if(args && args.path) {
	pathHref = args.path;
}

createServer({
	port: 3000,
	static: {
		path: pathHref
	},
	onMount: () => console.log('listening on 3000')
});


