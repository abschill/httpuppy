const { join } = require('path');
const { useServer } = require('../lib');

const app = useServer({
	static: {
		path: join(process.cwd(), './examples/files')
	},
	onMount: () => console.log('server started, open browser to port 3000'),
    throwWarnings: false,
	middleware: [
		{
			href: '/',
			handler: (req, res) => console.log(req.url)
		}
	],
	// so they will want to pass in something from an internal hook, like useRouter()
	// handler: (req, res)
});


app.listen(3000, app.onMount);
