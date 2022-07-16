const { useServer } = require('../lib');

const app = useServer({
	clustered: true,
	port: 3000
});

app.static('/', './examples/files').then(_ => app.start());
