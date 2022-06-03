[httpuppy - v0.1.0](README.md) / Exports

# httpuppy - v0.1.0

## Table of contents

### Functions

- [useRouter](modules.md#userouter)
- [useServer](modules.md#useserver)

## Functions

### useRouter

▸ **useRouter**(`attachTo`): `HTTPuppyRouter`

**`function`** useRouter

**`example`**
```javascript
const app = useServer({...});
const router = useRouter(app);
router.get('/test', (req, res) => res.end('hello'));
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachTo` | `Runtime` |

#### Returns

`HTTPuppyRouter`

#### Defined in

[router.ts:23](https://github.com/abschill/httpuppy/blob/f99777f/src/router.ts#L23)

___

### useServer

▸ **useServer**(`conf`): `HTTPuppyServer.Runtime`

**`function`** useServer

**`example`**
```javascript
const app = useServer({
	static: {
		path: join(process.cwd(), './examples/files')
	},
	middleware: [
		{
			href: '/',
			handler: (req, res) => console.log('middleware')
		}
	],
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conf` | `uOptions` | configuration options |

#### Returns

`HTTPuppyServer.Runtime`

httpuppy server

#### Defined in

[server.ts:39](https://github.com/abschill/httpuppy/blob/f99777f/src/server.ts#L39)
