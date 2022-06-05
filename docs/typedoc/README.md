httpuppy - v0.2.12 / [Modules](modules.md)

# HTTPuppy

![](/.assets/logo.png)

A simple abstraction layer for node web servers

## Installation

```cmd
npm i httpuppy
```

```cmd
yarn add httpuppy
```

## Command Line Use

```cmd
npx httpuppy --port=3000 --path=path/to/files
```

spin up a server at `<cwd>/path/to/files`

you can set up a config file instead of writing your arguments inline. [example here](/http.puppy)

## Programmatic Usage

```js
const { useServer } = require('httpuppy');

const app = useServer({
	static: {
		path: './path/to/content'
	}
});
app.listen(3000, () => console.log('listening on 3000'))
```

## Layered Routing

```js
const { useServer, useRouter } = require('httpuppy');

const app = useServer({
	static: {
		path: './path/to/content'
	}
});

const router = useRouter(app);

router.get('/api/v1/content', (req, res) => res.json({msg: "success"}));

app.listen(3000, () => console.log('listening on 3000'))

```

[Examples](/examples/)

[Documentation](/docs/reference/)

[API Reference](/docs/typedoc/modules.md)
