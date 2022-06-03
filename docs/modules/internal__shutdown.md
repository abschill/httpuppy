[httpuppy - v0.1.0](../README.md) / [Modules](../modules.md) / internal/\_shutdown

# Module: internal/\_shutdown

## Table of contents

### Functions

- [shutdown](internal__shutdown.md#shutdown)

## Functions

### shutdown

▸ **shutdown**(`s`): `Promise`<[`HTTPuppySleep`](types_server.md#httpuppysleep)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `s` | [`Runtime`](../interfaces/types_server.Runtime.md) | http server to shut down |

#### Returns

`Promise`<[`HTTPuppySleep`](types_server.md#httpuppysleep)\>

void promise to gracefully shut down

#### Defined in

[src/internal/_shutdown.ts:8](https://github.com/abschill/httpuppy/blob/f8e9db0/src/internal/_shutdown.ts#L8)
