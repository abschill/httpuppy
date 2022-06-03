[httpuppy - v0.1.0](../README.md) / [Modules](../modules.md) / [types/server](../modules/types_server.md) / HTTPuppyServerOptions

# Interface: HTTPuppyServerOptions

[types/server](../modules/types_server.md).HTTPuppyServerOptions

**`interface`** HTTPuppyServerOptions

**`member`** port the port number to run the configuration with (default: 80)

**`member`** coldInit whether or not to return the server or autostart it from config (default: true)

**`member`** hostname hostname for the server itself (default: 127.0.0.1)

**`member`** static virtual file system options, static directories basically

**`member`** throwWarnings false = print warnings true = throw them as errors (default: false)

**`member`** handler default handler if you would like to override the request chain and handle each url externally

**`member`** middleware list of middleware instances to run along the server

**`member`** onMount a function to run once after the server is mounted (doesn't run on return if `coldInit` is set to true)

**`member`** cache options for caching, standard http but camelcase

**`member`** secure boolean for https instead of http, requires follow up options in secureContext

**`member`** secureContext options for resolving the SSL cert / key

## Hierarchy

- `ServerOptions`

  ↳ **`HTTPuppyServerOptions`**

## Table of contents

### Properties

- [IncomingMessage](types_server.HTTPuppyServerOptions.md#incomingmessage)
- [ServerResponse](types_server.HTTPuppyServerOptions.md#serverresponse)
- [cache](types_server.HTTPuppyServerOptions.md#cache)
- [coldInit](types_server.HTTPuppyServerOptions.md#coldinit)
- [handler](types_server.HTTPuppyServerOptions.md#handler)
- [hostname](types_server.HTTPuppyServerOptions.md#hostname)
- [insecureHTTPParser](types_server.HTTPuppyServerOptions.md#insecurehttpparser)
- [log](types_server.HTTPuppyServerOptions.md#log)
- [maxHeaderSize](types_server.HTTPuppyServerOptions.md#maxheadersize)
- [middleware](types_server.HTTPuppyServerOptions.md#middleware)
- [onClose](types_server.HTTPuppyServerOptions.md#onclose)
- [onMount](types_server.HTTPuppyServerOptions.md#onmount)
- [port](types_server.HTTPuppyServerOptions.md#port)
- [secure](types_server.HTTPuppyServerOptions.md#secure)
- [secureContext](types_server.HTTPuppyServerOptions.md#securecontext)
- [static](types_server.HTTPuppyServerOptions.md#static)
- [throwWarnings](types_server.HTTPuppyServerOptions.md#throwwarnings)

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

• `Optional` **cache**: [`CacheSettings`](../modules/types_server.md#cachesettings)

#### Defined in

[src/types/server/index.ts:74](https://github.com/abschill/httpuppy/blob/769369d/src/types/server/index.ts#L74)

___

### coldInit

• `Optional` **coldInit**: `boolean`

#### Defined in

[src/types/server/index.ts:65](https://github.com/abschill/httpuppy/blob/769369d/src/types/server/index.ts#L65)

___

### handler

• `Optional` **handler**: [`HTTPHandlerFunction`](../modules/types_server.md#httphandlerfunction)<`void`\>

#### Defined in

[src/types/server/index.ts:70](https://github.com/abschill/httpuppy/blob/769369d/src/types/server/index.ts#L70)

___

### hostname

• `Optional` **hostname**: `string`

#### Defined in

[src/types/server/index.ts:66](https://github.com/abschill/httpuppy/blob/769369d/src/types/server/index.ts#L66)

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

• `Optional` **log**: [`LogConfig`](types_server.LogConfig.md)

#### Defined in

[src/types/server/index.ts:69](https://github.com/abschill/httpuppy/blob/769369d/src/types/server/index.ts#L69)

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

• `Optional` **middleware**: [`UserMiddlewareOption`](../modules/types_server.md#usermiddlewareoption)[]

#### Defined in

[src/types/server/index.ts:71](https://github.com/abschill/httpuppy/blob/769369d/src/types/server/index.ts#L71)

___

### onClose

• `Optional` **onClose**: [`iExitHandler`](../modules/types_server.md#iexithandler)

#### Defined in

[src/types/server/index.ts:73](https://github.com/abschill/httpuppy/blob/769369d/src/types/server/index.ts#L73)

___

### onMount

• `Optional` **onMount**: [`iHandlerType`](../modules/types_server.md#ihandlertype)

#### Defined in

[src/types/server/index.ts:72](https://github.com/abschill/httpuppy/blob/769369d/src/types/server/index.ts#L72)

___

### port

• `Optional` **port**: `number`

#### Defined in

[src/types/server/index.ts:64](https://github.com/abschill/httpuppy/blob/769369d/src/types/server/index.ts#L64)

___

### secure

• `Optional` **secure**: `boolean`

#### Defined in

[src/types/server/index.ts:75](https://github.com/abschill/httpuppy/blob/769369d/src/types/server/index.ts#L75)

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

[src/types/server/index.ts:76](https://github.com/abschill/httpuppy/blob/769369d/src/types/server/index.ts#L76)

___

### static

• `Optional` **static**: [`UserStaticConfig`](../modules/types_server.md#userstaticconfig)

#### Defined in

[src/types/server/index.ts:67](https://github.com/abschill/httpuppy/blob/769369d/src/types/server/index.ts#L67)

___

### throwWarnings

• `Optional` **throwWarnings**: `boolean`

#### Defined in

[src/types/server/index.ts:68](https://github.com/abschill/httpuppy/blob/769369d/src/types/server/index.ts#L68)
