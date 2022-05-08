const { WebServer } = require('../lib');

WebServer.create({
    port: 3000,
	static: {
		path: './examples/files',
		headers: [ ['Content-Type', 'text/html']]
	},
	onMount: () => console.log('server started, open browser to port 3000'),
    throwWarnings: false
});
