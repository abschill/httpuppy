#! /usr/bin/env node
const { color } = require('terminal-color');
const { useServer } = require('../lib');
const { resolve } = require('path');
const cluster = require('cluster');
const { log } = console;
const args = process.argv;
const VERSION = '0.4.16';

if(!args.includes('--serve')) {
	log(color.fg.red('error: must provide a directory with the --serve option'));
	process.exit(1);
}
const serve_index = args.indexOf('--serve');
let port = 3000;
const port_index = args.indexOf('--port');
if(port_index !== -1 && (args.length <= port_index)) port = args[port_index+1];
if(args.length <= serve_index) {
	log(color.fg.red('error: no directory provided after --serve'));
	process.exit(1);
}
const hot_dir = args[args.indexOf('--serve')+1];

const server = useServer({
	clustered: true,
	port,
	log_level: 'base'
});

server.static('/', hot_dir).then(_ => {
	server.start();
	if(cluster.isPrimary) {
		log(color.fg.blue(`HTTPuppy Version: ${VERSION}`));
		log(`
${color.fg.green('Server Listening')}
${color.fg.yellow('Port:')} ${color.fg.purple(port)}
${color.fg.yellow('Directory:')} ${resolve(process.cwd(), hot_dir)}
${color.fg.yellow('Base View:')} ${server._vfs.mounted_files.filter(f => f.hrefs.includes('/'))?.[0]?._abspath}
${color.fg.blue('Host:')} ${color.fg.yellow(server.pConfig.hostname ?? 'http://127.0.0.1:')}${color.fg.purple(port)}
`);
	}
});

