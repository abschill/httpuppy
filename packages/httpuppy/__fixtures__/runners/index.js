const {
	useServer,
	useRouter
} = require('../../lib');


const clusteredRouterPost = useServer({
	clustered: true,
	static: {
		path: '__fixtures__'
	},
	port: 3000
});


const router0 = useRouter(clusteredRouterPost);

router0.post('/', (req, res) => {
	console.log(req.body);
	res.json(req.body);
});

router0.post('/test', async (req, res) => {
	console.log(req.body);
	res.json({...req.body});
});
clusteredRouterPost.start();

module.exports = {
	clusteredRouterPost
}
