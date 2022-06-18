[httpuppy - v0.3.19](../README.md) / [Modules](../modules.md) / [useServer](../modules/useServer.md) / HTTPuppyServerOptions

# Interface: HTTPuppyServerOptions

[useServer](../modules/useServer.md).HTTPuppyServerOptions

**`interface`** HTTPuppyServerOptions

**`member`** port the port number to run the configuration with (default: 80)

**`member`** coldInit whether or not to return the server or autostart it from config (default: true)

**`member`** hostname hostname for the server itself (default: 127.0.0.1)

**`member`** static virtual file system options, static directories basically

**`member`** throwWarnings false = print warnings true = throw them as errors (default: false)

**`member`** handler default handler if you would like to override the request chain and handle each url manually thru the standard library

**`member`** middleware list of middleware instances to run along the server

**`member`** onMount a function to run once after the server is mounted (doesn't run on return if `coldInit` is set to true)

**`member`** cache options for caching, standard http but camelcase

**`member`** clustered is a planned feature for version 3 to automatically cluster the server process to utilize multiple core ipc it doesnt do anything in x.2.z

**`member`** secure boolean for https instead of http, requires follow up options in secureContext

**`member`** secureContext options for resolving the SSL cert / key

**`member`** tmpDir the dir to write files uploaded from multipart forms from request

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

[src/server.ts:107](https://github.com/abschill/httpuppy/blob/e5a29e6/src/server.ts#L107)

___

### clustered

• `Optional` **clustered**: `boolean`

#### Defined in

[src/server.ts:99](https://github.com/abschill/httpuppy/blob/e5a29e6/src/server.ts#L99)

___

### handler

• `Optional` **handler**: `any`

#### Defined in

[src/server.ts:108](https://github.com/abschill/httpuppy/blob/e5a29e6/src/server.ts#L108)

___

### hostname

• `Optional` **hostname**: `string`

#### Defined in

[src/server.ts:100](https://github.com/abschill/httpuppy/blob/e5a29e6/src/server.ts#L100)

___

### log

• `Optional` **log**: `LogConfig`

#### Defined in

[src/server.ts:103](https://github.com/abschill/httpuppy/blob/e5a29e6/src/server.ts#L103)

___

### middleware

• `Optional` **middleware**: `UserMiddlewareOption`[]

#### Defined in

[src/server.ts:104](https://github.com/abschill/httpuppy/blob/e5a29e6/src/server.ts#L104)

___

### onClose

• `Optional` **onClose**: `iExitHandler`

#### Defined in

[src/server.ts:106](https://github.com/abschill/httpuppy/blob/e5a29e6/src/server.ts#L106)

___

### onMount

• `Optional` **onMount**: `iHandlerType`

#### Defined in

[src/server.ts:105](https://github.com/abschill/httpuppy/blob/e5a29e6/src/server.ts#L105)

___

### port

• `Optional` **port**: `number`

#### Defined in

[src/server.ts:98](https://github.com/abschill/httpuppy/blob/e5a29e6/src/server.ts#L98)

___

### secure

• `Optional` **secure**: `boolean`

#### Defined in

[src/server.ts:109](https://github.com/abschill/httpuppy/blob/e5a29e6/src/server.ts#L109)

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

[src/server.ts:110](https://github.com/abschill/httpuppy/blob/e5a29e6/src/server.ts#L110)

___

### static

• `Optional` **static**: [`UserStaticConfig`](../modules/useServer.md#userstaticconfig)

#### Defined in

[src/server.ts:101](https://github.com/abschill/httpuppy/blob/e5a29e6/src/server.ts#L101)

___

### throwWarnings

• `Optional` **throwWarnings**: `boolean`

#### Defined in

[src/server.ts:102](https://github.com/abschill/httpuppy/blob/e5a29e6/src/server.ts#L102)

___

### timeout

• `Optional` **timeout**: `number`

#### Defined in

[src/server.ts:115](https://github.com/abschill/httpuppy/blob/e5a29e6/src/server.ts#L115)

___

### tmpDir

• `Optional` **tmpDir**: `string`

#### Defined in

[src/server.ts:116](https://github.com/abschill/httpuppy/blob/e5a29e6/src/server.ts#L116)
