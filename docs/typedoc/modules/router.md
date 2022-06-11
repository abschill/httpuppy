[httpuppy - v0.3.5](../README.md) / [Modules](../modules.md) / router

# Module: router

**`description`** for adding custom routing to your server

## Table of contents

### Interfaces

- [HTTPuppyRouter](../interfaces/router.HTTPuppyRouter.md)

### Type Aliases

- [HTTPHeader](router.md#httpheader)
- [HTTPHeaders](router.md#httpheaders)

### Functions

- [HTTPuppyCallback](router.md#httpuppycallback)
- [HTTPuppyRouterMethod](router.md#httpuppyroutermethod)
- [useRouter](router.md#userouter)

## Type Aliases

### HTTPHeader

Ƭ **HTTPHeader**: `string`[]

#### Defined in

[src/router.ts:24](https://github.com/abschill/httpuppy/blob/94ff392/src/router.ts#L24)

___

### HTTPHeaders

Ƭ **HTTPHeaders**: [`HTTPHeader`](router.md#httpheader)[]

#### Defined in

[src/router.ts:25](https://github.com/abschill/httpuppy/blob/94ff392/src/router.ts#L25)

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

[src/router.ts:12](https://github.com/abschill/httpuppy/blob/94ff392/src/router.ts#L12)

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

[src/router.ts:14](https://github.com/abschill/httpuppy/blob/94ff392/src/router.ts#L14)

___

### useRouter

▸ **useRouter**(`server`, `routerOptions?`): [`HTTPuppyRouter`](../interfaces/router.HTTPuppyRouter.md)

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
| `routerOptions?` | `any` |

#### Returns

[`HTTPuppyRouter`](../interfaces/router.HTTPuppyRouter.md)

#### Defined in

[src/router.ts:37](https://github.com/abschill/httpuppy/blob/94ff392/src/router.ts#L37)
