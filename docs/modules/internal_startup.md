[httpuppy - v0.1.0](../README.md) / [Modules](../modules.md) / internal/startup

# Module: internal/startup

## Table of contents

### Functions

- [\_useServer](internal_startup.md#_useserver)

## Functions

### \_useServer

▸ **_useServer**(`config`, `server`, `diagnostics`): [`Runtime`](../interfaces/types_server.Runtime.md)

**`internal`** _useServer

**`description`** an internal startup process for the `useServer` hook

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`HTTPuppyServerOptions`](../interfaces/types_server.HTTPuppyServerOptions.md) | config from user for runtime |
| `server` | [`Runtime`](../interfaces/types_server.Runtime.md) | server generated from node standard http library |
| `diagnostics` | [`DiagnosticLog`](types_server.md#diagnosticlog)[] | diagnostic list from the prestartup process |

#### Returns

[`Runtime`](../interfaces/types_server.Runtime.md)

the http server object

#### Defined in

[src/internal/startup.ts:14](https://github.com/abschill/httpuppy/blob/5ad0bb8/src/internal/startup.ts#L14)
