[httpuppy - v0.2.20](../README.md) / [Modules](../modules.md) / server

# Module: server

**`description`** core server module

## Table of contents

### Functions

- [useServer](server.md#useserver)

## Functions

### useServer

▸ **useServer**(`conf`): [`Runtime`](../interfaces/types_server.Runtime.md)

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
| `conf` | [`HTTPuppyServerOptions`](../interfaces/types_server.HTTPuppyServerOptions.md) | configuration options |

#### Returns

[`Runtime`](../interfaces/types_server.Runtime.md)

httpuppy server

#### Defined in

[src/server.ts:34](https://github.com/abschill/httpuppy/blob/9944926/src/server.ts#L34)
