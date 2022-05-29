[httpuppy - v0.1.0](../README.md) / [Modules](../modules.md) / server

# Module: server

## Table of contents

### Functions

- [createServer](server.md#createserver)
- [shutdown](server.md#shutdown)
- [useServer](server.md#useserver)

## Functions

### createServer

▸ **createServer**(`conf`): `HTTPuppyServer.Runtime`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conf` | `UserHTTPConfig` | configuration options |

#### Returns

`HTTPuppyServer.Runtime`

httpuppy server

#### Defined in

[server.ts:31](https://github.com/abschill/http-simple/blob/762f144/src/server.ts#L31)

___

### shutdown

▸ **shutdown**(`s`): `HTTPuppyServer.HTTPuppySleep`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `s` | `Runtime` | http server to shut down |

#### Returns

`HTTPuppyServer.HTTPuppySleep`

void promise to gracefully shut down

#### Defined in

[server.ts:54](https://github.com/abschill/http-simple/blob/762f144/src/server.ts#L54)

___

### useServer

▸ **useServer**(`server`, `config`): `HTTPuppyServer.Runtime`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `server` | `Runtime` | The final hook to run when a server is created, will return and optionally start the server |
| `config` | `UserHTTPConfig` | the configuration for the given server |

#### Returns

`HTTPuppyServer.Runtime`

The HTTP Server runtime

#### Defined in

[server.ts:16](https://github.com/abschill/http-simple/blob/762f144/src/server.ts#L16)
