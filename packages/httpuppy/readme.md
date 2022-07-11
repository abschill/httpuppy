# HTTPuppy

![](/.assets/logo.png)

A simple & speedy abstraction layer for node web servers :dog:

## Features

- simple, easy to use api
- worker thread support for :fire: blazing fast response times
- middleware support
- router support
- static directory serving
- exposes underlying node HTTP API for full customization, just adds helpers
- command line interface
- static typed, very handy intellisense
- familiar express style

## Installation

```cmd
npm i httpuppy
```

```cmd
yarn add httpuppy
```

## Command Line Use
```
npx httpuppy --serve path/to/files
```

create static dev server which is mounted at `path/to/files` by default on port 3000

## Programmatic Usage

```js
const { useServer } = require('httpuppy');

const app = useServer({
	port: 3000
});
app.static('/', 'path/to/content'); //serve arg[1] at the arg[0] href
app.start();
```

## Layered Routing

```js
const { useServer, useRouter } = require('httpuppy');

const app = useServer({
	port: 3000
});

app.static('/', 'path/to/content'); //serve arg[1] at the arg[0] href

const router = useRouter(app);

router.get('/api/v1/content', (req, res) => res.json({msg: "success"}));

app.start();

```
supports middleware without a `next` method - will continue when the computation is finished, supports async scoping as well.
## router middleware

```js
const { useServer, useRouter } = require('httpuppy');

const app = useServer({
	port: 3000
});

const router = useRouter(app);

router.get('/api/v1/content', (req, res) => res.json({msg: "success"}));
router.use('/api/v1/content', (req, res) => console.log('request at ' + req.url));
app.start();
```

## clustered mode

clustered mode will allow your server to utilize multiple cores available on your system to speed up your requests. If you'd like to enable this, make sure to set `clustered: true` in your config, programmatic or cli it will be available.
```js
const app = useServer({
	...
	clustered: true
	...
});
```

## handling form data

```js
const { useServer, useRouter } = require('httpuppy');

const app = useServer({
	...
});

const router = useRouter(app);

router.post('/api/v1/thing', (req, res) => {
	console.log(req.body) // json format: { foo: 'bar' }
	// do something with body and respond
});

app.start();

```

async support
```js
const { useServer, useRouter } = require('httpuppy');

const app = useServer({
	port: 3000
});
const router = useRouter(app);

router.post('/api/v1/thing', async(req, res) => {
	// await something
	console.log(req.body) // json format: { foo: 'bar' }
	// do something with body and respond
});

app.start();

```
[Examples](/examples/)

[Documentation](/docs/reference/)

[API Reference](/docs/typedoc/modules.md)
