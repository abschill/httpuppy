const { join } = require('path');
const { HTTPuppyCore } = require('../lib');
const { readFileSync } = require('fs');
const app = HTTPuppyCore.createServer({
	static: {
		path: join(process.cwd(), './examples/files')
	},
	onMount: () => console.log('server started, open browser to port 3000'),
    throwWarnings: false,
	coldInit: true,
	secure: true,
	secureContext: {
		key: readFileSync(join(process.cwd(), 'server.key')),
		cert: readFileSync(join('server.cert'))
	}
});


app.listen(3000, app.onMount);
