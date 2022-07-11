[httpuppy - v0.4.1](../README.md) / [Modules](../modules.md) / useServer

# Module: useServer

**`description`** core server module

## Table of contents

### Interfaces

- [HTTPServerOptions](../interfaces/useServer.HTTPServerOptions.md)

### Functions

- [useServer](useServer.md#useserver)

## Functions

### useServer

▸ **useServer**(`conf`): `HTTPServer`

**`function`** useServer

**`example`**
```javascript
const app0 = useServer({ port: 3000, clustered: false });
const app1 = useServer({ port: 3001, clustered: true })

```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conf` | [`HTTPServerOptions`](../interfaces/useServer.HTTPServerOptions.md) | configuration options |

#### Returns

`HTTPServer`

httpuppy server

#### Defined in

[server.ts:106](https://github.com/webpuppy/httpuppy/blob/fae7f8c/src/server.ts#L106)
