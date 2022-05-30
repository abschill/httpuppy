const { join } = require('path');
const { createServer } = require('../lib');
const { readFileSync } = require('fs');

const secureApp = createServer({
	static: {
		path: join(process.cwd(), './examples/files')
	},
	onMount: () => console.log('server started, open browser to port 3000'),
    throwWarnings: false,
	coldInit: true,
	secure: true,
	secureContext: {
		// define these files on your pc
		key: readFileSync(join(process.cwd(), 'server.key')),
		cert: readFileSync(join('server.cert'))
	}
});


secureApp.listen(3000, secureApp.onMount);
