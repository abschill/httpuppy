# HTTPuppy - Documentation


## CLI - serve static

### install

```
npm i -g httpuppy
```

or

```
yarn global add httpuppy
```

then, if my-spa-dir has some static content in it

```
httpuppy --serve my-spa-dir
```


## API - Single vs Multi Core

single
```js
const { useServer } = require('httpuppy');

const app = useServer({
	port: 3000,
});

app.static('/', './path/to/content')
app.start();
```

multiple
```js
const app = useServer({
	clustered: true,
	port: 3000
});
app.static('/', './path/to/content')
app.start();
```
clustered mode will allow your server to utilize multiple cores available on your system to speed up your requests. If you'd like to enable this, make sure to set `clustered: true` in your config, programmatic or cli it will be available. if you leave logger to it's default settings it will print the pid of each cluster worker handling your requests.
