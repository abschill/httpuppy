const { join } = require('path');
const { HTTPuppyCore } = require('../lib');

const app = HTTPuppyCore.createServer({
	static: {
		path: join(process.cwd(), './examples/files')
	},
	onMount: () => console.log('server started, open browser to port 3000'),
    throwWarnings: false,
	coldInit: true
});


app.listen(3000, app.onMount);
