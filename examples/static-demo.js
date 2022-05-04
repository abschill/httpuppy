const { createWebServer } = require('../lib');

createWebServer({
    port: 3000,
	static: {
		path: './examples/files',
		headers: [ ['Content-Type', 'text/html']]
	},
	mountCallback: () => console.log('server started, open browser to port 3000'),
    throwWarnings: false
});
