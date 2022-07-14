#! /usr/bin/env node
const { color_tag } = require('../lib/internal/include');
const { useServer } = require('../lib');
const { log } = console;
const args = process.argv;


if(!args.includes('--serve')) {
	log(color_tag('red', 'error: must provide a directory with the --serve option'));
	process.exit(1);
}
const serve_index = args.indexOf('--serve');
let port = 3000;
const port_index = args.indexOf('--port');
if(port_index !== -1 && (args.length <= port_index)) port = args[port_index+1];
if(args.length <= serve_index) {
	log(color_tag('red', 'error: no directory provided after --serve'));
	process.exit(1);
}
const hot_dir = args[args.indexOf('--serve')+1];

const server = useServer({
	clustered: true,
	port,
	log_level: 'verbose'
});

server.static('/', hot_dir);
server.start();
