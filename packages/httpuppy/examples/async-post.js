const { useServer, useRouter } = require('../../lib');

const clusteredRouterPost = useServer({
	clustered: true,
	port: 3000
});
clusteredRouterPost.static('/', '__fixtures__').then((_) => {
	const router0 = useRouter(clusteredRouterPost);

	router0.post('/', (req, res) => {
		console.log(req.body);
		res.json(req.body);
	});

	router0.post('/test', async (req, res) => {
		console.log(req.body);
		res.json({ ...req.body });
	});
	clusteredRouterPost.start();
});
