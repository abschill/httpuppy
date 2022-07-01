[httpuppy - v0.4.0](../README.md) / [Modules](../modules.md) / [useServer](../modules/useServer.md) / HTTPuppyServerOptions

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
- [resTimeout](useServer.HTTPuppyServerOptions.md#restimeout)
- [secure](useServer.HTTPuppyServerOptions.md#secure)
- [secureContext](useServer.HTTPuppyServerOptions.md#securecontext)
- [throwWarnings](useServer.HTTPuppyServerOptions.md#throwwarnings)
- [timeout](useServer.HTTPuppyServerOptions.md#timeout)
- [tmpDir](useServer.HTTPuppyServerOptions.md#tmpdir)

## Properties

### cache

• `Optional` **cache**: `CacheSettings`

#### Defined in

[server.ts:42](https://github.com/abschill/httpuppy/blob/4cc0584/src/server.ts#L42)

___

### clustered

• `Optional` **clustered**: `boolean`

#### Defined in

[server.ts:34](https://github.com/abschill/httpuppy/blob/4cc0584/src/server.ts#L34)

___

### handler

• `Optional` **handler**: `any`

#### Defined in

[server.ts:43](https://github.com/abschill/httpuppy/blob/4cc0584/src/server.ts#L43)

___

### hostname

• `Optional` **hostname**: `string`

#### Defined in

[server.ts:35](https://github.com/abschill/httpuppy/blob/4cc0584/src/server.ts#L35)

___

### log

• `Optional` **log**: `LogConfig`

#### Defined in

[server.ts:38](https://github.com/abschill/httpuppy/blob/4cc0584/src/server.ts#L38)

___

### middleware

• `Optional` **middleware**: `UserMiddlewareOption`[]

#### Defined in

[server.ts:39](https://github.com/abschill/httpuppy/blob/4cc0584/src/server.ts#L39)

___

### onClose

• `Optional` **onClose**: `iExitHandler`

#### Defined in

[server.ts:41](https://github.com/abschill/httpuppy/blob/4cc0584/src/server.ts#L41)

___

### onMount

• `Optional` **onMount**: `iHandlerType`

#### Defined in

[server.ts:40](https://github.com/abschill/httpuppy/blob/4cc0584/src/server.ts#L40)

___

### port

• `Optional` **port**: `number`

#### Defined in

[server.ts:33](https://github.com/abschill/httpuppy/blob/4cc0584/src/server.ts#L33)

___

### resTimeout

• `Optional` **resTimeout**: `number`

#### Defined in

[server.ts:51](https://github.com/abschill/httpuppy/blob/4cc0584/src/server.ts#L51)

___

### secure

• `Optional` **secure**: `boolean`

#### Defined in

[server.ts:44](https://github.com/abschill/httpuppy/blob/4cc0584/src/server.ts#L44)

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

[server.ts:45](https://github.com/abschill/httpuppy/blob/4cc0584/src/server.ts#L45)

___

### throwWarnings

• `Optional` **throwWarnings**: `boolean`

#### Defined in

[server.ts:37](https://github.com/abschill/httpuppy/blob/4cc0584/src/server.ts#L37)

___

### timeout

• `Optional` **timeout**: `number`

#### Defined in

[server.ts:50](https://github.com/abschill/httpuppy/blob/4cc0584/src/server.ts#L50)

___

### tmpDir

• `Optional` **tmpDir**: `string`

#### Defined in

[server.ts:52](https://github.com/abschill/httpuppy/blob/4cc0584/src/server.ts#L52)
