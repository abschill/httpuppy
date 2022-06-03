[httpuppy - v0.1.0](../README.md) / [Modules](../modules.md) / internal/config

# Module: internal/config

## Table of contents

### Functions

- [useConfig](internal_config.md#useconfig)

## Functions

### useConfig

▸ **useConfig**(`conf`, `diagnostics`): [`HTTPuppyServerOptions`](../interfaces/types_server.HTTPuppyServerOptions.md)

**`internal`** useConfig

**`description`** hook for applying default config settings against given user input

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conf` | [`HTTPuppyServerOptions`](../interfaces/types_server.HTTPuppyServerOptions.md) | the submitted user input |
| `diagnostics` | [`DiagnosticLog`](types_server.md#diagnosticlog)[] | diagnostic log of the top level |

#### Returns

[`HTTPuppyServerOptions`](../interfaces/types_server.HTTPuppyServerOptions.md)

cleaned user config

#### Defined in

[src/internal/config.ts:11](https://github.com/abschill/httpuppy/blob/f8e9db0/src/internal/config.ts#L11)
