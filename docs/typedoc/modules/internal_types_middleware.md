[httpuppy - v0.3.10](../README.md) / [Modules](../modules.md) / internal/types/middleware

# Module: internal/types/middleware

## Table of contents

### Type Aliases

- [CacheSettings](internal_types_middleware.md#cachesettings)
- [UserMiddlewareOption](internal_types_middleware.md#usermiddlewareoption)
- [iExitHandler](internal_types_middleware.md#iexithandler)
- [iHandlerType](internal_types_middleware.md#ihandlertype)

### Variables

- [defaultCacheSettings](internal_types_middleware.md#defaultcachesettings)

### Functions

- [fromDefaultCacheSettings](internal_types_middleware.md#fromdefaultcachesettings)
- [use404](internal_types_middleware.md#use404)

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

[src/internal/types/middleware.ts:23](https://github.com/abschill/httpuppy/blob/0ce48f2/src/internal/types/middleware.ts#L23)

___

### UserMiddlewareOption

Ƭ **UserMiddlewareOption**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `handler` | [`iHandlerType`](internal_types_middleware.md#ihandlertype) |
| `href` | `string` |

#### Defined in

[src/internal/types/middleware.ts:57](https://github.com/abschill/httpuppy/blob/0ce48f2/src/internal/types/middleware.ts#L57)

___

### iExitHandler

Ƭ **iExitHandler**: `undefined` \| () => `Promise`<`void`\> \| () => `void`

#### Defined in

[src/internal/types/middleware.ts:55](https://github.com/abschill/httpuppy/blob/0ce48f2/src/internal/types/middleware.ts#L55)

___

### iHandlerType

Ƭ **iHandlerType**: (`req`: [`HTTPuppyRequest`](../interfaces/useServer.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](../interfaces/useServer.HTTPuppyResponse.md)) => `Promise`<`void`\> \| (`req`: [`HTTPuppyRequest`](../interfaces/useServer.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](../interfaces/useServer.HTTPuppyResponse.md)) => `void`

#### Type declaration

▸ (`req`, `res`): `Promise`<`void`\> \| (`req`: [`HTTPuppyRequest`](../interfaces/useServer.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](../interfaces/useServer.HTTPuppyResponse.md)) => `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`HTTPuppyRequest`](../interfaces/useServer.HTTPuppyRequest.md) |
| `res` | [`HTTPuppyResponse`](../interfaces/useServer.HTTPuppyResponse.md) |

##### Returns

`Promise`<`void`\> \| (`req`: [`HTTPuppyRequest`](../interfaces/useServer.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](../interfaces/useServer.HTTPuppyResponse.md)) => `void`

#### Defined in

[src/internal/types/middleware.ts:56](https://github.com/abschill/httpuppy/blob/0ce48f2/src/internal/types/middleware.ts#L56)

## Variables

### defaultCacheSettings

• `Const` **defaultCacheSettings**: [`CacheSettings`](internal_types_middleware.md#cachesettings)

#### Defined in

[src/internal/types/middleware.ts:39](https://github.com/abschill/httpuppy/blob/0ce48f2/src/internal/types/middleware.ts#L39)

## Functions

### fromDefaultCacheSettings

▸ **fromDefaultCacheSettings**(`settings`): [`CacheSettings`](internal_types_middleware.md#cachesettings)

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | [`CacheSettings`](internal_types_middleware.md#cachesettings) |

#### Returns

[`CacheSettings`](internal_types_middleware.md#cachesettings)

#### Defined in

[src/internal/types/middleware.ts:46](https://github.com/abschill/httpuppy/blob/0ce48f2/src/internal/types/middleware.ts#L46)

___

### use404

▸ `Private` **use404**(`res`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `res` | [`HTTPuppyResponse`](../interfaces/useServer.HTTPuppyResponse.md) |

#### Returns

`void`

nothing

#### Defined in

[src/internal/types/middleware.ts:67](https://github.com/abschill/httpuppy/blob/0ce48f2/src/internal/types/middleware.ts#L67)
