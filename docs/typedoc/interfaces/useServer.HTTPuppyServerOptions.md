[httpuppy - v0.3.22](../README.md) / [Modules](../modules.md) / [useServer](../modules/useServer.md) / HTTPuppyServerOptions

# Interface: HTTPuppyServerOptions

[useServer](../modules/useServer.md).HTTPuppyServerOptions

Config for useServer hook

## Table of contents

### Properties

- [cache](useServer.HTTPuppyServerOptions.md#cache)
- [clustered](useServer.HTTPuppyServerOptions.md#clustered)
- [handler](useServer.HTTPuppyServerOptions.md#handler)
- [hostname](useServer.HTTPuppyServerOptions.md#hostname)
- [log](useServer.HTTPuppyServerOptions.md#log)
- [middleware](useServer.HTTPuppyServerOptions.md#middleware)
- [onClose](useServer.HTTPuppyServerOptions.md#onclose)
- [onMount](useServer.HTTPuppyServerOptions.md#onmount)
- [port](useServer.HTTPuppyServerOptions.md#port)
- [secure](useServer.HTTPuppyServerOptions.md#secure)
- [secureContext](useServer.HTTPuppyServerOptions.md#securecontext)
- [static](useServer.HTTPuppyServerOptions.md#static)
- [throwWarnings](useServer.HTTPuppyServerOptions.md#throwwarnings)
- [timeout](useServer.HTTPuppyServerOptions.md#timeout)
- [tmpDir](useServer.HTTPuppyServerOptions.md#tmpdir)

## Properties

### cache

• `Optional` **cache**: `CacheSettings`

#### Defined in

[server.ts:36](https://github.com/abschill/httpuppy/blob/5ba56c7/src/server.ts#L36)

___

### clustered

• `Optional` **clustered**: `boolean`

#### Defined in

[server.ts:28](https://github.com/abschill/httpuppy/blob/5ba56c7/src/server.ts#L28)

___

### handler

• `Optional` **handler**: `any`

#### Defined in

[server.ts:37](https://github.com/abschill/httpuppy/blob/5ba56c7/src/server.ts#L37)

___

### hostname

• `Optional` **hostname**: `string`

#### Defined in

[server.ts:29](https://github.com/abschill/httpuppy/blob/5ba56c7/src/server.ts#L29)

___

### log

• `Optional` **log**: `LogConfig`

#### Defined in

[server.ts:32](https://github.com/abschill/httpuppy/blob/5ba56c7/src/server.ts#L32)

___

### middleware

• `Optional` **middleware**: `UserMiddlewareOption`[]

#### Defined in

[server.ts:33](https://github.com/abschill/httpuppy/blob/5ba56c7/src/server.ts#L33)

___

### onClose

• `Optional` **onClose**: `iExitHandler`

#### Defined in

[server.ts:35](https://github.com/abschill/httpuppy/blob/5ba56c7/src/server.ts#L35)

___

### onMount

• `Optional` **onMount**: `iHandlerType`

#### Defined in

[server.ts:34](https://github.com/abschill/httpuppy/blob/5ba56c7/src/server.ts#L34)

___

### port

• `Optional` **port**: `number`

#### Defined in

[server.ts:27](https://github.com/abschill/httpuppy/blob/5ba56c7/src/server.ts#L27)

___

### secure

• `Optional` **secure**: `boolean`

#### Defined in

[server.ts:38](https://github.com/abschill/httpuppy/blob/5ba56c7/src/server.ts#L38)

___

### secureContext

• `Optional` **secureContext**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cert` | `string` |
| `dhparam?` | `string` |
| `key` | `string` |

#### Defined in

[server.ts:39](https://github.com/abschill/httpuppy/blob/5ba56c7/src/server.ts#L39)

___

### static

• `Optional` **static**: `UserStaticConfig`

#### Defined in

[server.ts:30](https://github.com/abschill/httpuppy/blob/5ba56c7/src/server.ts#L30)

___

### throwWarnings

• `Optional` **throwWarnings**: `boolean`

#### Defined in

[server.ts:31](https://github.com/abschill/httpuppy/blob/5ba56c7/src/server.ts#L31)

___

### timeout

• `Optional` **timeout**: `number`

#### Defined in

[server.ts:44](https://github.com/abschill/httpuppy/blob/5ba56c7/src/server.ts#L44)

___

### tmpDir

• `Optional` **tmpDir**: `string`

#### Defined in

[server.ts:45](https://github.com/abschill/httpuppy/blob/5ba56c7/src/server.ts#L45)
