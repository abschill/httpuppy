[httpuppy - v0.3.23](../README.md) / [Modules](../modules.md) / useServer

# Module: useServer

**`description`** core server module

## Table of contents

### Interfaces

- [HTTPuppyServerOptions](../interfaces/useServer.HTTPuppyServerOptions.md)

### Functions

- [useServer](useServer.md#useserver)

## Functions

### useServer

▸ **useServer**(`conf`): `HTTPuppyServer`

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
| `conf` | [`HTTPuppyServerOptions`](../interfaces/useServer.HTTPuppyServerOptions.md) | configuration options |

#### Returns

`HTTPuppyServer`

httpuppy server

#### Defined in

[server.ts:61](https://github.com/abschill/httpuppy/blob/146176d/src/server.ts#L61)
