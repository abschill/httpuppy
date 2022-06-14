[httpuppy - v0.3.7](../README.md) / [Modules](../modules.md) / router

# Module: router

**`description`** for adding custom routing to your server

## Table of contents

### Interfaces

- [HTTPuppyRouter](../interfaces/router.HTTPuppyRouter.md)

### Type Aliases

- [HTTPHeader](router.md#httpheader)
- [HTTPHeaders](router.md#httpheaders)
- [HTTPuppyRouterOptions](router.md#httpuppyrouteroptions)

### Functions

- [HTTPuppyCallback](router.md#httpuppycallback)
- [HTTPuppyRouterMethod](router.md#httpuppyroutermethod)
- [useRouter](router.md#userouter)

## Type Aliases

### HTTPHeader

Ƭ **HTTPHeader**: `string`[]

#### Defined in

[src/router.ts:27](https://github.com/abschill/httpuppy/blob/eda9c3a/src/router.ts#L27)

___

### HTTPHeaders

Ƭ **HTTPHeaders**: [`HTTPHeader`](router.md#httpheader)[]

#### Defined in

[src/router.ts:28](https://github.com/abschill/httpuppy/blob/eda9c3a/src/router.ts#L28)

___

### HTTPuppyRouterOptions

Ƭ **HTTPuppyRouterOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowPassthrough?` | `boolean` |
| `baseUrl?` | `string` |

#### Defined in

[src/router.ts:30](https://github.com/abschill/httpuppy/blob/eda9c3a/src/router.ts#L30)

## Functions

### HTTPuppyCallback

▸ **HTTPuppyCallback**(`req`, `res`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`HTTPuppyRequest`](../interfaces/server.HTTPuppyRequest.md) |
| `res` | [`HTTPuppyResponse`](../interfaces/server.HTTPuppyResponse.md) |

#### Returns

`any`

#### Defined in

[src/router.ts:12](https://github.com/abschill/httpuppy/blob/eda9c3a/src/router.ts#L12)

___

### HTTPuppyRouterMethod

▸ **HTTPuppyRouterMethod**(`url`, `cb`): typeof [`HTTPuppyCallback`](router.md#httpuppycallback) \| `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `cb` | (`req`: [`HTTPuppyRequest`](../interfaces/server.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](../interfaces/server.HTTPuppyResponse.md)) => `any` |

#### Returns

typeof [`HTTPuppyCallback`](router.md#httpuppycallback) \| `void`

#### Defined in

[src/router.ts:14](https://github.com/abschill/httpuppy/blob/eda9c3a/src/router.ts#L14)

___

### useRouter

▸ **useRouter**(`server`, `rOptions?`): [`HTTPuppyRouter`](../interfaces/router.HTTPuppyRouter.md)

**`function`** useRouter

**`example`**
```javascript
const app = useServer({...});
const router = useRouter(app);
router.get('/test', (req, res) => res.end('hello'));
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `server` | [`HTTPuppyServer`](../interfaces/server.HTTPuppyServer.md) |
| `rOptions?` | [`HTTPuppyRouterOptions`](router.md#httpuppyrouteroptions) |

#### Returns

[`HTTPuppyRouter`](../interfaces/router.HTTPuppyRouter.md)

#### Defined in

[src/router.ts:46](https://github.com/abschill/httpuppy/blob/eda9c3a/src/router.ts#L46)
