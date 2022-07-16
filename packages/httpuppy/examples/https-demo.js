const { join } = require('path');
const { useServer } = require('../lib');
const { readFileSync } = require('fs');
/**
 * local http server setup demo
 */
const secureApp = useServer({
	secure: {
		// define these files on your pc
		key: readFileSync(join(process.cwd(), 'server.key')),
		cert: readFileSync(join('server.cert'))
	},
	port: 3000
});
secureApp.static('/', 'examples/files').then(_ => secureApp.start())

