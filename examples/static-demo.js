const { useServer } = require('../lib');

const app = useServer({
	static: {
		path: './examples/files'
	}
});

app.listen(3000, () => console.log('listening on port 3000'));
