# HTTPuppy - Documentation


## Single vs Multi Core

single
```js
const { useServer } = require('httpuppy');

const app = useServer({
	static: {
		path: './path/to/content'
	},
	port: 3000,
	onMount: () => console.log('listening on 3000')
});
app.start();
```

multiple
```js
const app = useServer({
	clustered: true,
	static: {
		path: './path/to/content'
	},
	port: 3000,
	onMount: () => console.log('listening on 3000')
});
```
clustered mode will allow your server to utilize multiple cores available on your system to speed up your requests. If you'd like to enable this, make sure to set `clustered: true` in your config, programmatic or cli it will be available. if you leave logger to it's default settings it will print the pid of each cluster worker handling your requests.

## File based configuration

you can set a custom path for the config file by adding argument in the format `npx httpuppy <config_path>`


file config options support json, yaml, and toml.
