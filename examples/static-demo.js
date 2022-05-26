const { join } = require('path');
const { WebServer } = require('../lib');

const app = WebServer.create({
	static: {
		path: join(process.cwd(), './examples/files')
	},
	onMount: () => console.log('server started, open browser to port 3000'),
    throwWarnings: false,
	coldInit: true
});


app.listen(3000, app.onMount);
