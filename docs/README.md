httpuppy - v0.2.3 / [Modules](modules.md)

# HTTPuppy

![](/logo.png)

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

[Reference](/docs/modules.md)
