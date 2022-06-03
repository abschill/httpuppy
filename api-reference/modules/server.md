[httpuppy - v0.1.0](../README.md) / [Modules](../modules.md) / server

# Module: server

**`description`** Hooks for spinning up a web server

## Table of contents

### Functions

- [shutdown](server.md#shutdown)
- [useServer](server.md#useserver)

## Functions

### shutdown

▸ **shutdown**(`s`): `Promise`<`HTTPuppyServer.HTTPuppySleep`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `s` | `Runtime` | http server to shut down |

#### Returns

`Promise`<`HTTPuppyServer.HTTPuppySleep`\>

void promise to gracefully shut down

#### Defined in

[server.ts:49](https://github.com/abschill/httpuppy/blob/7cda2cd/src/server.ts#L49)

___

### useServer

▸ **useServer**(`conf`): `HTTPuppyServer.Runtime`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conf` | `uOptions` | configuration options |

#### Returns

`HTTPuppyServer.Runtime`

httpuppy server

#### Defined in

[server.ts:22](https://github.com/abschill/httpuppy/blob/7cda2cd/src/server.ts#L22)
