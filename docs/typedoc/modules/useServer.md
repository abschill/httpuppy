[httpuppy - v0.3.21](../README.md) / [Modules](../modules.md) / useServer

# Module: useServer

**`description`** core server module

## Table of contents

### Interfaces

- [HTTPuppyServer](../interfaces/useServer.HTTPuppyServer.md)
- [HTTPuppyServerOptions](../interfaces/useServer.HTTPuppyServerOptions.md)

### Functions

- [useServer](useServer.md#useserver)

## Functions

### useServer

▸ **useServer**(`conf`): [`HTTPuppyServer`](../interfaces/useServer.HTTPuppyServer.md)

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

[`HTTPuppyServer`](../interfaces/useServer.HTTPuppyServer.md)

httpuppy server

#### Defined in

[src/server.ts:102](https://github.com/abschill/httpuppy/blob/731a790/src/server.ts#L102)
