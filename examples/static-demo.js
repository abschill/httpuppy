const { join } = require('path');
const { createServer } = require('../lib');

const app = createServer({
	static: {
		path: join(process.cwd(), './examples/files')
	},
	onMount: () => console.log('server started, open browser to port 3000'),
    throwWarnings: false,
	coldInit: true,
	middleware: [
		{
			href: '/',
			handler: (req, res) => console.log(req.url)
		}
	]
});


app.listen(3000, app.onMount);
