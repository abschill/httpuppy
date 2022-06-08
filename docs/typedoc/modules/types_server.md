[httpuppy - v0.2.15](../README.md) / [Modules](../modules.md) / types/server

# Module: types/server

## Table of contents

### Interfaces

- [HTTPuppyRequest](../interfaces/types_server.HTTPuppyRequest.md)
- [HTTPuppyResponse](../interfaces/types_server.HTTPuppyResponse.md)
- [HTTPuppyRouter](../interfaces/types_server.HTTPuppyRouter.md)
- [HTTPuppyServerOptions](../interfaces/types_server.HTTPuppyServerOptions.md)
- [LogConfig](../interfaces/types_server.LogConfig.md)
- [Runtime](../interfaces/types_server.Runtime.md)

### Type Aliases

- [CacheSettings](types_server.md#cachesettings)
- [DiagnosticLog](types_server.md#diagnosticlog)
- [HTTPuppySleep](types_server.md#httpuppysleep)
- [HTTPuppyWriterOptions](types_server.md#httpuppywriteroptions)
- [LogLevel](types_server.md#loglevel)
- [MountedFile](types_server.md#mountedfile)
- [UserMiddlewareOption](types_server.md#usermiddlewareoption)
- [UserStaticConfig](types_server.md#userstaticconfig)
- [VirtualFileSystem](types_server.md#virtualfilesystem)
- [VirtualWriteableFile](types_server.md#virtualwriteablefile)
- [iExitHandler](types_server.md#iexithandler)
- [iHandlerType](types_server.md#ihandlertype)

### Variables

- [defaultCacheSettings](types_server.md#defaultcachesettings)
- [defaultHTTPConfig](types_server.md#defaulthttpconfig)

### Functions

- [HTTPuppyCallback](types_server.md#httpuppycallback)
- [HTTPuppyRouterMethod](types_server.md#httpuppyroutermethod)
- [fromDefaultCacheSettings](types_server.md#fromdefaultcachesettings)
- [fromDefaultHTTPConfig](types_server.md#fromdefaulthttpconfig)
- [useDefaultLogConfig](types_server.md#usedefaultlogconfig)

## Type Aliases

### CacheSettings

Ƭ **CacheSettings**: `Object`

**`interface`** Cache Settings

**`description`** All supported cache control options in camelcase

**`member`** maxAge maximum age to keep a response as "fresh" after its etag is generated

**`member`** sMaxAge maxAge for shared caches

**`member`** noCache response can be stored in caches, but must be revalidated with origin before reuse

**`member`** noStore caches of any kind (private or shared) should not store this response

**`member`** noTransform any intermediary (regardless of whether it implements a cache) shouldn't transform the response contents

**`member`** mustRevalidate response can be stored in caches and can be reused while fresh. If the response becomes stale, it must be validated with the origin server before reuse

**`member`** mustUnderstand should store the response only if it understands the requirements for caching based on status code

**`member`** proxyRevalidate response directive is the equivalent of must-revalidate, but specifically for shared caches only

**`member`** immutable response directive indicates that the response will not be updated while it's fresh.

**`member`** private response can be stored only in a private cache (e.g. local caches in browsers)

**`member`** public can be stored in a shared cache

**`member`** staleWhileRevalidate the cache could reuse a stale response while it revalidates it to a cache

**`member`** staleIfError  cache can reuse a stale response when an origin server responds with an error (500, 502, 503, or 504)

#### Type declaration

| Name | Type |
| :------ | :------ |
| `immutable?` | `boolean` |
| `maxAge?` | `number` |
| `mustRevalidate?` | `boolean` |
| `mustUnderstand?` | `boolean` |
| `noCache?` | `boolean` |
| `noStore?` | `boolean` |
| `noTransform?` | `boolean` |
| `private?` | `boolean` |
| `proxyRevalidate?` | `boolean` |
| `public?` | `boolean` |
| `sMaxAge?` | `number` |
| `staleIfError?` | `boolean` |
| `staleWhileRevalidate?` | `boolean` |

#### Defined in

[src/types/server/middleware.ts:20](https://github.com/abschill/httpuppy/blob/5552f00/src/types/server/middleware.ts#L20)

___

### DiagnosticLog

Ƭ **DiagnosticLog**: `Object`

**`description`** Runtime Diagnostic log to store for debug purposes

#### Type declaration

| Name | Type |
| :------ | :------ |
| `msg` | `string` |

#### Defined in

[src/types/server/index.ts:20](https://github.com/abschill/httpuppy/blob/5552f00/src/types/server/index.ts#L20)

___

### HTTPuppySleep

Ƭ **HTTPuppySleep**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

##### Returns

`Promise`<`void`\>

#### Defined in

[src/types/server/index.ts:36](https://github.com/abschill/httpuppy/blob/5552f00/src/types/server/index.ts#L36)

___

### HTTPuppyWriterOptions

Ƭ **HTTPuppyWriterOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `status` | `number` |
| `statusText` | `string` |
| `type` | `string` |
| `virtualFile` | [`VirtualWriteableFile`](types_server.md#virtualwriteablefile) |

#### Defined in

[src/types/server/writer.ts:3](https://github.com/abschill/httpuppy/blob/5552f00/src/types/server/writer.ts#L3)

___

### LogLevel

Ƭ **LogLevel**: ``"silent"`` \| ``"base"`` \| ``"verbose"``

#### Defined in

[src/types/server/logger.ts:1](https://github.com/abschill/httpuppy/blob/5552f00/src/types/server/logger.ts#L1)

___

### MountedFile

Ƭ **MountedFile**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `content` | `any` |
| `contentType` | `HTTPHeader` |
| `fileName` | `string` |
| `hrefs` | `string`[] |
| `symLink` | `string` |

#### Defined in

[src/types/server/vfs.ts:15](https://github.com/abschill/httpuppy/blob/5552f00/src/types/server/vfs.ts#L15)

___

### UserMiddlewareOption

Ƭ **UserMiddlewareOption**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `handler` | [`iHandlerType`](types_server.md#ihandlertype) |
| `href` | `string` |

#### Defined in

[src/types/server/middleware.ts:54](https://github.com/abschill/httpuppy/blob/5552f00/src/types/server/middleware.ts#L54)

___

### UserStaticConfig

Ƭ **UserStaticConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `href?` | `string` |
| `indexType?` | `string` |
| `mimeType?` | `string` |
| `path?` | `string` |

#### Defined in

[src/types/server/vfs.ts:23](https://github.com/abschill/httpuppy/blob/5552f00/src/types/server/vfs.ts#L23)

___

### VirtualFileSystem

Ƭ **VirtualFileSystem**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `mountedFiles` | [`MountedFile`](types_server.md#mountedfile)[] |
| `mountedPath` | `string` |

#### Defined in

[src/types/server/vfs.ts:30](https://github.com/abschill/httpuppy/blob/5552f00/src/types/server/vfs.ts#L30)

___

### VirtualWriteableFile

Ƭ **VirtualWriteableFile**: `Object`

**`description`** A File Mounted within a virtual filesystem to be served at a given static href

#### Type declaration

| Name | Type |
| :------ | :------ |
| `contentType` | `HTTPHeader` |
| `fileName` | `string` |
| `hrefs` | `string`[] |
| `reqUrl` | `string` |
| `symLink?` | `string` |

#### Defined in

[src/types/server/vfs.ts:7](https://github.com/abschill/httpuppy/blob/5552f00/src/types/server/vfs.ts#L7)

___

### iExitHandler

Ƭ **iExitHandler**: `undefined` \| () => `Promise`<`void`\> \| () => `void`

#### Defined in

[src/types/server/middleware.ts:52](https://github.com/abschill/httpuppy/blob/5552f00/src/types/server/middleware.ts#L52)

___

### iHandlerType

Ƭ **iHandlerType**: (`req`: [`HTTPuppyRequest`](../interfaces/types_server.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](../interfaces/types_server.HTTPuppyResponse.md)) => `Promise`<`void`\> \| (`req`: [`HTTPuppyRequest`](../interfaces/types_server.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](../interfaces/types_server.HTTPuppyResponse.md)) => `void`

#### Type declaration

▸ (`req`, `res`): `Promise`<`void`\> \| (`req`: [`HTTPuppyRequest`](../interfaces/types_server.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](../interfaces/types_server.HTTPuppyResponse.md)) => `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`HTTPuppyRequest`](../interfaces/types_server.HTTPuppyRequest.md) |
| `res` | [`HTTPuppyResponse`](../interfaces/types_server.HTTPuppyResponse.md) |

##### Returns

`Promise`<`void`\> \| (`req`: [`HTTPuppyRequest`](../interfaces/types_server.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](../interfaces/types_server.HTTPuppyResponse.md)) => `void`

#### Defined in

[src/types/server/middleware.ts:53](https://github.com/abschill/httpuppy/blob/5552f00/src/types/server/middleware.ts#L53)

## Variables

### defaultCacheSettings

• `Const` **defaultCacheSettings**: [`CacheSettings`](types_server.md#cachesettings)

#### Defined in

[src/types/server/middleware.ts:36](https://github.com/abschill/httpuppy/blob/5552f00/src/types/server/middleware.ts#L36)

___

### defaultHTTPConfig

• `Const` **defaultHTTPConfig**: [`HTTPuppyServerOptions`](../interfaces/types_server.HTTPuppyServerOptions.md)

#### Defined in

[src/types/server/index.ts:73](https://github.com/abschill/httpuppy/blob/5552f00/src/types/server/index.ts#L73)

## Functions

### HTTPuppyCallback

▸ **HTTPuppyCallback**(`req`, `res`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`HTTPuppyRequest`](../interfaces/types_server.HTTPuppyRequest.md) |
| `res` | [`HTTPuppyResponse`](../interfaces/types_server.HTTPuppyResponse.md) |

#### Returns

`any`

#### Defined in

[src/types/server/index.ts:100](https://github.com/abschill/httpuppy/blob/5552f00/src/types/server/index.ts#L100)

___

### HTTPuppyRouterMethod

▸ **HTTPuppyRouterMethod**(`url`, `cb`): typeof [`HTTPuppyCallback`](types_server.md#httpuppycallback) \| `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `cb` | (`req`: [`HTTPuppyRequest`](../interfaces/types_server.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](../interfaces/types_server.HTTPuppyResponse.md)) => `any` |

#### Returns

typeof [`HTTPuppyCallback`](types_server.md#httpuppycallback) \| `void`

#### Defined in

[src/types/server/index.ts:102](https://github.com/abschill/httpuppy/blob/5552f00/src/types/server/index.ts#L102)

___

### fromDefaultCacheSettings

▸ **fromDefaultCacheSettings**(`settings`): [`CacheSettings`](types_server.md#cachesettings)

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | [`CacheSettings`](types_server.md#cachesettings) |

#### Returns

[`CacheSettings`](types_server.md#cachesettings)

#### Defined in

[src/types/server/middleware.ts:43](https://github.com/abschill/httpuppy/blob/5552f00/src/types/server/middleware.ts#L43)

___

### fromDefaultHTTPConfig

▸ **fromDefaultHTTPConfig**(`config`): [`HTTPuppyServerOptions`](../interfaces/types_server.HTTPuppyServerOptions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`HTTPuppyServerOptions`](../interfaces/types_server.HTTPuppyServerOptions.md) |

#### Returns

[`HTTPuppyServerOptions`](../interfaces/types_server.HTTPuppyServerOptions.md)

#### Defined in

[src/types/server/index.ts:82](https://github.com/abschill/httpuppy/blob/5552f00/src/types/server/index.ts#L82)

___

### useDefaultLogConfig

▸ **useDefaultLogConfig**(): [`LogConfig`](../interfaces/types_server.LogConfig.md)

#### Returns

[`LogConfig`](../interfaces/types_server.LogConfig.md)

#### Defined in

[src/types/server/logger.ts:8](https://github.com/abschill/httpuppy/blob/5552f00/src/types/server/logger.ts#L8)
