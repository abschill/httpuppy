const { join } = require('path');
const { useServer } = require('../lib');

const app = useServer({
	static: {
		path: './examples/files'
	},
    throwWarnings: false,
	log: {
		logLevel: 'base'
	}
});


app.listen(3000, app.onMount);
