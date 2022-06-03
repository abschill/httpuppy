const { join } = require('path');
const { useServer, useRouter } = require('../lib');

const app = useServer({
	static: {
		path: join(process.cwd(), './examples/files')
	},
    throwWarnings: false,
	logLevel: 'base',
	middleware: [
		{
			href: '/',
			handler: (req, res) => console.log('middleware')
		}
	],
});

const endpoint = useRouter(app);
endpoint.get('/test', (req, res) => res.end('hello'));

app.listen(3000, () => console.log('server started, open browser to port 3000'));
