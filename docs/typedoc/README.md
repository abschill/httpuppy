httpuppy - v0.3.11 / [Modules](modules.md)

# HTTPuppy

![](/.assets/logo.png)

A simple & speedy abstraction layer for node web servers :dog:

## Installation

```cmd
npm i httpuppy
```

```cmd
yarn add httpuppy
```

## Command Line Use
```
npx httpuppy
```

[example config file](/http.puppy)

## Programmatic Usage

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

## Layered Routing

```js
const { useServer, useRouter } = require('httpuppy');

const app = useServer({
	static: {
		path: './path/to/content'
	},
	port: 3000,
	onMount: () => console.log('listening on 3000')
});

const router = useRouter(app);

router.get('/api/v1/content', (req, res) => res.json({msg: "success"}));

app.start();

```
## clustered mode

clustered mode will allow your server to utilize multiple cores available on your system to speed up your requests. If you'd like to enable this, make sure to set `clustered: true` in your config, programmatic or cli it will be available.
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

## built in static upload parsing

by default any form submissions will be uploaded (files, and the body as JSON with a random seed) into the user-defined (default tmp) temp dir. planning to add an override to allow people to define a hook to determine what to name the file.

[Examples](/examples/)

[Documentation](/docs/reference/)

[API Reference](/docs/typedoc/modules.md)
