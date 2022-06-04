const { useServer, useRouter } = require('../lib');

const app = useServer({
	static: {
		path: './examples/files'
	},
	log: {
		logLevel: 'base'
	}
});

const endpoint = useRouter(app);
endpoint.get('/test', (req, res) => res.send('hello'));
endpoint.get('/test1', (req, res) => res.json({foo: "bar"}));
app.listen(3000, () => console.log('server started, open browser to port 3000'));
