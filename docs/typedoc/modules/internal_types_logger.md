[httpuppy - v0.3.6](../README.md) / [Modules](../modules.md) / internal/types/logger

# Module: internal/types/logger

## Table of contents

### Interfaces

- [LogConfig](../interfaces/internal_types_logger.LogConfig.md)
- [LogMsg](../interfaces/internal_types_logger.LogMsg.md)

### Type Aliases

- [LogLevel](internal_types_logger.md#loglevel)
- [ValidLogMsg](internal_types_logger.md#validlogmsg)

### Functions

- [useDefaultLogConfig](internal_types_logger.md#usedefaultlogconfig)

## Type Aliases

### LogLevel

Ƭ **LogLevel**: ``"silent"`` \| ``"base"`` \| ``"verbose"``

#### Defined in

[src/internal/types/logger.ts:1](https://github.com/abschill/httpuppy/blob/cf51615/src/internal/types/logger.ts#L1)

___

### ValidLogMsg

Ƭ **ValidLogMsg**: `string` \| [`LogMsg`](../interfaces/internal_types_logger.LogMsg.md) \| `object`

#### Defined in

[src/internal/types/logger.ts:24](https://github.com/abschill/httpuppy/blob/cf51615/src/internal/types/logger.ts#L24)

## Functions

### useDefaultLogConfig

▸ **useDefaultLogConfig**(): [`LogConfig`](../interfaces/internal_types_logger.LogConfig.md)

#### Returns

[`LogConfig`](../interfaces/internal_types_logger.LogConfig.md)

#### Defined in

[src/internal/types/logger.ts:9](https://github.com/abschill/httpuppy/blob/cf51615/src/internal/types/logger.ts#L9)
