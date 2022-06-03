[httpuppy - v0.1.0](../README.md) / [Modules](../modules.md) / server

# Module: server

**`description`** core server module

## Table of contents

### Functions

- [useServer](server.md#useserver)

## Functions

### useServer

▸ **useServer**(`conf`): `HTTPuppyServer.Runtime`

**`function`** useServer

**`example`**
```javascript
const app = useServer({
	static: {
		path: './examples/files'
	}
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conf` | `HTTPuppyServerOptions` | configuration options |

#### Returns

`HTTPuppyServer.Runtime`

httpuppy server

#### Defined in

[server.ts:29](https://github.com/abschill/httpuppy/blob/48a3c5c/src/server.ts#L29)
