const { useServer } = require('../lib');

const app = useServer({
	clustered: true,
	static: {
		path: './examples/files'
	},
	port: 3000
});

app.start();
