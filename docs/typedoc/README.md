httpuppy - v0.3.5 / [Modules](modules.md)

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

[Examples](/examples/)

[Documentation](/docs/reference/)

[API Reference](/docs/typedoc/modules.md)
