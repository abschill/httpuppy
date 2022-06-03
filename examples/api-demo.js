const { useServer, useRouter } = require('../lib');

const app = useServer({
	static: {
		path: './examples/files'
	},
    throwWarnings: false,
	logLevel: 'base'
});

const endpoint = useRouter(app);
endpoint.get('/test', (req, res) => res.end('hello'));

app.listen(3000, () => console.log('server started, open browser to port 3000'));
