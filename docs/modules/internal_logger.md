[httpuppy - v0.1.0](../README.md) / [Modules](../modules.md) / internal/logger

# Module: internal/logger

## Table of contents

### Functions

- [useLogConfig](internal_logger.md#uselogconfig)
- [useLogger](internal_logger.md#uselogger)

## Functions

### useLogConfig

▸ **useLogConfig**(`config?`): [`LogConfig`](../interfaces/types_server.LogConfig.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | [`LogConfig`](../interfaces/types_server.LogConfig.md) |

#### Returns

[`LogConfig`](../interfaces/types_server.LogConfig.md)

#### Defined in

[src/internal/logger.ts:8](https://github.com/abschill/httpuppy/blob/a85d5bb/src/internal/logger.ts#L8)

___

### useLogger

▸ **useLogger**(`config`, `server`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`LogConfig`](../interfaces/types_server.LogConfig.md) |
| `server` | [`Runtime`](../interfaces/types_server.Runtime.md) |

#### Returns

`void`

#### Defined in

[src/internal/logger.ts:18](https://github.com/abschill/httpuppy/blob/a85d5bb/src/internal/logger.ts#L18)
