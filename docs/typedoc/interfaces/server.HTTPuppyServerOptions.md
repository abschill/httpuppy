[httpuppy - v0.3.5](../README.md) / [Modules](../modules.md) / [server](../modules/server.md) / HTTPuppyServerOptions

# Interface: HTTPuppyServerOptions

[server](../modules/server.md).HTTPuppyServerOptions

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

## Hierarchy

- `ServerOptions`

  ↳ **`HTTPuppyServerOptions`**

## Table of contents

### Properties

- [IncomingMessage](server.HTTPuppyServerOptions.md#incomingmessage)
- [ServerResponse](server.HTTPuppyServerOptions.md#serverresponse)
- [cache](server.HTTPuppyServerOptions.md#cache)
- [clustered](server.HTTPuppyServerOptions.md#clustered)
- [handler](server.HTTPuppyServerOptions.md#handler)
- [hostname](server.HTTPuppyServerOptions.md#hostname)
- [insecureHTTPParser](server.HTTPuppyServerOptions.md#insecurehttpparser)
- [log](server.HTTPuppyServerOptions.md#log)
- [maxHeaderSize](server.HTTPuppyServerOptions.md#maxheadersize)
- [middleware](server.HTTPuppyServerOptions.md#middleware)
- [onClose](server.HTTPuppyServerOptions.md#onclose)
- [onMount](server.HTTPuppyServerOptions.md#onmount)
- [port](server.HTTPuppyServerOptions.md#port)
- [secure](server.HTTPuppyServerOptions.md#secure)
- [secureContext](server.HTTPuppyServerOptions.md#securecontext)
- [static](server.HTTPuppyServerOptions.md#static)
- [throwWarnings](server.HTTPuppyServerOptions.md#throwwarnings)
- [timeout](server.HTTPuppyServerOptions.md#timeout)

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

[src/server.ts:91](https://github.com/abschill/httpuppy/blob/94ff392/src/server.ts#L91)

___

### clustered

• `Optional` **clustered**: `boolean`

#### Defined in

[src/server.ts:83](https://github.com/abschill/httpuppy/blob/94ff392/src/server.ts#L83)

___

### handler

• `Optional` **handler**: `any`

#### Defined in

[src/server.ts:92](https://github.com/abschill/httpuppy/blob/94ff392/src/server.ts#L92)

___

### hostname

• `Optional` **hostname**: `string`

#### Defined in

[src/server.ts:84](https://github.com/abschill/httpuppy/blob/94ff392/src/server.ts#L84)

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

[src/server.ts:87](https://github.com/abschill/httpuppy/blob/94ff392/src/server.ts#L87)

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

[src/server.ts:88](https://github.com/abschill/httpuppy/blob/94ff392/src/server.ts#L88)

___

### onClose

• `Optional` **onClose**: `iExitHandler`

#### Defined in

[src/server.ts:90](https://github.com/abschill/httpuppy/blob/94ff392/src/server.ts#L90)

___

### onMount

• `Optional` **onMount**: `iHandlerType`

#### Defined in

[src/server.ts:89](https://github.com/abschill/httpuppy/blob/94ff392/src/server.ts#L89)

___

### port

• `Optional` **port**: `number`

#### Defined in

[src/server.ts:82](https://github.com/abschill/httpuppy/blob/94ff392/src/server.ts#L82)

___

### secure

• `Optional` **secure**: `boolean`

#### Defined in

[src/server.ts:93](https://github.com/abschill/httpuppy/blob/94ff392/src/server.ts#L93)

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

[src/server.ts:94](https://github.com/abschill/httpuppy/blob/94ff392/src/server.ts#L94)

___

### static

• `Optional` **static**: `UserStaticConfig`

#### Defined in

[src/server.ts:85](https://github.com/abschill/httpuppy/blob/94ff392/src/server.ts#L85)

___

### throwWarnings

• `Optional` **throwWarnings**: `boolean`

#### Defined in

[src/server.ts:86](https://github.com/abschill/httpuppy/blob/94ff392/src/server.ts#L86)

___

### timeout

• `Optional` **timeout**: `number`

#### Defined in

[src/server.ts:99](https://github.com/abschill/httpuppy/blob/94ff392/src/server.ts#L99)
