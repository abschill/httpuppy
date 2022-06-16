[httpuppy - v0.3.12](../README.md) / [Modules](../modules.md) / useRouter

# Module: useRouter

**`description`** for adding custom routing to your server

## Table of contents

### Interfaces

- [HTTPuppyRouter](../interfaces/useRouter.HTTPuppyRouter.md)

### Type Aliases

- [HTTPHeader](useRouter.md#httpheader)
- [HTTPHeaders](useRouter.md#httpheaders)
- [HTTPuppyRouterOptions](useRouter.md#httpuppyrouteroptions)

### Functions

- [HTTPuppyCallback](useRouter.md#httpuppycallback)
- [HTTPuppyRouterMethod](useRouter.md#httpuppyroutermethod)
- [useRouter](useRouter.md#userouter)

## Type Aliases

### HTTPHeader

Ƭ `Private` **HTTPHeader**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[src/router.ts:34](https://github.com/abschill/httpuppy/blob/3328e6c/src/router.ts#L34)

___

### HTTPHeaders

Ƭ `Private` **HTTPHeaders**: [`HTTPHeader`](useRouter.md#httpheader)[]

#### Defined in

[src/router.ts:41](https://github.com/abschill/httpuppy/blob/3328e6c/src/router.ts#L41)

___

### HTTPuppyRouterOptions

Ƭ **HTTPuppyRouterOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowPassthrough?` | `boolean` |
| `baseUrl?` | `string` |

#### Defined in

[src/router.ts:43](https://github.com/abschill/httpuppy/blob/3328e6c/src/router.ts#L43)

## Functions

### HTTPuppyCallback

▸ **HTTPuppyCallback**(`req`, `res`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`HTTPuppyRequest`](../interfaces/useServer.HTTPuppyRequest.md) |
| `res` | [`HTTPuppyResponse`](../interfaces/useServer.HTTPuppyResponse.md) |

#### Returns

`any`

#### Defined in

[src/router.ts:11](https://github.com/abschill/httpuppy/blob/3328e6c/src/router.ts#L11)

___

### HTTPuppyRouterMethod

▸ `Private` **HTTPuppyRouterMethod**(`url`, `cb`): typeof [`HTTPuppyCallback`](useRouter.md#httpuppycallback) \| `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `cb` | (`req`: [`HTTPuppyRequest`](../interfaces/useServer.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](../interfaces/useServer.HTTPuppyResponse.md)) => `any` |

#### Returns

typeof [`HTTPuppyCallback`](useRouter.md#httpuppycallback) \| `void`

#### Defined in

[src/router.ts:17](https://github.com/abschill/httpuppy/blob/3328e6c/src/router.ts#L17)

___

### useRouter

▸ **useRouter**(`server`, `rOptions?`): [`HTTPuppyRouter`](../interfaces/useRouter.HTTPuppyRouter.md)

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
| `server` | [`HTTPuppyServer`](../interfaces/useServer.HTTPuppyServer.md) |
| `rOptions?` | [`HTTPuppyRouterOptions`](useRouter.md#httpuppyrouteroptions) |

#### Returns

[`HTTPuppyRouter`](../interfaces/useRouter.HTTPuppyRouter.md)

#### Defined in

[src/router.ts:103](https://github.com/abschill/httpuppy/blob/3328e6c/src/router.ts#L103)
