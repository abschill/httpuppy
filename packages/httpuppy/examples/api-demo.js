const { useServer, useRouter } = require('../lib');

const app = useServer({
	port: 3000,
	clustered: true,
});
app.static('/', 'examples/files').then((_) => {
	const endpoint = useRouter(app);
	endpoint.get('/test', (req, res) => res.send('hello'));
	endpoint.get('/test1', (req, res) => res.json({ foo: 'bar' }));
	endpoint.use('/test', (req, res) => console.log(req.url));
	app.start();
});
