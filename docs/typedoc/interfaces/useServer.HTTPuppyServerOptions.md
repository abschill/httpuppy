[httpuppy - v0.3.11](../README.md) / [Modules](../modules.md) / [useServer](../modules/useServer.md) / HTTPuppyServerOptions

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

## Hierarchy

- `ServerOptions`

  ↳ **`HTTPuppyServerOptions`**

## Table of contents

### Properties

- [IncomingMessage](useServer.HTTPuppyServerOptions.md#incomingmessage)
- [ServerResponse](useServer.HTTPuppyServerOptions.md#serverresponse)
- [cache](useServer.HTTPuppyServerOptions.md#cache)
- [clustered](useServer.HTTPuppyServerOptions.md#clustered)
- [handler](useServer.HTTPuppyServerOptions.md#handler)
- [hostname](useServer.HTTPuppyServerOptions.md#hostname)
- [insecureHTTPParser](useServer.HTTPuppyServerOptions.md#insecurehttpparser)
- [log](useServer.HTTPuppyServerOptions.md#log)
- [maxHeaderSize](useServer.HTTPuppyServerOptions.md#maxheadersize)
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

### IncomingMessage

• `Optional` **IncomingMessage**: typeof `IncomingMessage`

#### Inherited from

stlServerOptions.IncomingMessage

#### Defined in

node_modules/@types/node/http.d.ts:142

___

### ServerResponse

• `Optional` **ServerResponse**: typeof `ServerResponse`

#### Inherited from

stlServerOptions.ServerResponse

#### Defined in

node_modules/@types/node/http.d.ts:143

___

### cache

• `Optional` **cache**: `CacheSettings`

#### Defined in

[src/server.ts:101](https://github.com/abschill/httpuppy/blob/3003846/src/server.ts#L101)

___

### clustered

• `Optional` **clustered**: `boolean`

#### Defined in

[src/server.ts:93](https://github.com/abschill/httpuppy/blob/3003846/src/server.ts#L93)

___

### handler

• `Optional` **handler**: `any`

#### Defined in

[src/server.ts:102](https://github.com/abschill/httpuppy/blob/3003846/src/server.ts#L102)

___

### hostname

• `Optional` **hostname**: `string`

#### Defined in

[src/server.ts:94](https://github.com/abschill/httpuppy/blob/3003846/src/server.ts#L94)

___

### insecureHTTPParser

• `Optional` **insecureHTTPParser**: `boolean`

Use an insecure HTTP parser that accepts invalid HTTP headers when true.
Using the insecure parser should be avoided.
See --insecure-http-parser for more information.

**`default`** false

#### Inherited from

stlServerOptions.insecureHTTPParser

#### Defined in

node_modules/@types/node/http.d.ts:157

___

### log

• `Optional` **log**: `LogConfig`

#### Defined in

[src/server.ts:97](https://github.com/abschill/httpuppy/blob/3003846/src/server.ts#L97)

___

### maxHeaderSize

• `Optional` **maxHeaderSize**: `number`

Optionally overrides the value of
`--max-http-header-size` for requests received by this server, i.e.
the maximum length of request headers in bytes.

**`default`** 8192

#### Inherited from

stlServerOptions.maxHeaderSize

#### Defined in

node_modules/@types/node/http.d.ts:150

___

### middleware

• `Optional` **middleware**: `UserMiddlewareOption`[]

#### Defined in

[src/server.ts:98](https://github.com/abschill/httpuppy/blob/3003846/src/server.ts#L98)

___

### onClose

• `Optional` **onClose**: `iExitHandler`

#### Defined in

[src/server.ts:100](https://github.com/abschill/httpuppy/blob/3003846/src/server.ts#L100)

___

### onMount

• `Optional` **onMount**: `iHandlerType`

#### Defined in

[src/server.ts:99](https://github.com/abschill/httpuppy/blob/3003846/src/server.ts#L99)

___

### port

• `Optional` **port**: `number`

#### Defined in

[src/server.ts:92](https://github.com/abschill/httpuppy/blob/3003846/src/server.ts#L92)

___

### secure

• `Optional` **secure**: `boolean`

#### Defined in

[src/server.ts:103](https://github.com/abschill/httpuppy/blob/3003846/src/server.ts#L103)

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

[src/server.ts:104](https://github.com/abschill/httpuppy/blob/3003846/src/server.ts#L104)

___

### static

• `Optional` **static**: [`UserStaticConfig`](../modules/useServer.md#userstaticconfig)

#### Defined in

[src/server.ts:95](https://github.com/abschill/httpuppy/blob/3003846/src/server.ts#L95)

___

### throwWarnings

• `Optional` **throwWarnings**: `boolean`

#### Defined in

[src/server.ts:96](https://github.com/abschill/httpuppy/blob/3003846/src/server.ts#L96)

___

### timeout

• `Optional` **timeout**: `number`

#### Defined in

[src/server.ts:109](https://github.com/abschill/httpuppy/blob/3003846/src/server.ts#L109)

___

### tmpDir

• `Optional` **tmpDir**: `string`

#### Defined in

[src/server.ts:110](https://github.com/abschill/httpuppy/blob/3003846/src/server.ts#L110)
