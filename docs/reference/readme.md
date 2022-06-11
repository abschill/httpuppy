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


### json/yml configuration

you can also configure your file to be in json/yml, which directly maps to the config structure, and needs no sort of mental difference in mapping. When you run `npx httpuppy` you will be greeted with a menu that gives you a list of options of valid config files that it detected, so just choose the one you want. these 2 have a more direct mapping to the structure so its probably the best to use them.

[json example](httpuppy.json)
[yaml example](/__fixtures__/httpuppy.yml)

### ini config

config parser follows .ini format, so you can add key value pairs as such to organize your properties. The important one for now is the `config` key, which roughly maps to your [`HTTPuppyServerOptions`](https://github.com/abschill/httpuppy/blob/main/docs/interfaces/types_server.HTTPuppyServerOptions.md) configuration object if you are using the library itself.


In the [base](https://github.com/abschill/httpuppy/blob/main/__fixtures__/http.puppy) of the repository you will find an example configuration, the alternative being inline flags that map to the correct keys when stripped of their prefixed `--`. The exception is the static option `path` is just aliased to the top level of the file-based config.
