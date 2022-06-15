[httpuppy - v0.3.10](../README.md) / [Modules](../modules.md) / useRouter

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
- [useHTTPHandle](useRouter.md#usehttphandle)
- [useRouter](useRouter.md#userouter)
- [useRouterSignatures](useRouter.md#useroutersignatures)

## Type Aliases

### HTTPHeader

Ƭ **HTTPHeader**: `string`[]

#### Defined in

[src/router.ts:26](https://github.com/abschill/httpuppy/blob/05aa246/src/router.ts#L26)

___

### HTTPHeaders

Ƭ **HTTPHeaders**: [`HTTPHeader`](useRouter.md#httpheader)[]

#### Defined in

[src/router.ts:27](https://github.com/abschill/httpuppy/blob/05aa246/src/router.ts#L27)

___

### HTTPuppyRouterOptions

Ƭ **HTTPuppyRouterOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowPassthrough?` | `boolean` |
| `baseUrl?` | `string` |

#### Defined in

[src/router.ts:29](https://github.com/abschill/httpuppy/blob/05aa246/src/router.ts#L29)

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

[src/router.ts:11](https://github.com/abschill/httpuppy/blob/05aa246/src/router.ts#L11)

___

### HTTPuppyRouterMethod

▸ **HTTPuppyRouterMethod**(`url`, `cb`): typeof [`HTTPuppyCallback`](useRouter.md#httpuppycallback) \| `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `cb` | (`req`: [`HTTPuppyRequest`](../interfaces/useServer.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](../interfaces/useServer.HTTPuppyResponse.md)) => `any` |

#### Returns

typeof [`HTTPuppyCallback`](useRouter.md#httpuppycallback) \| `void`

#### Defined in

[src/router.ts:13](https://github.com/abschill/httpuppy/blob/05aa246/src/router.ts#L13)

___

### useHTTPHandle

▸ **useHTTPHandle**(`name`, `_url`, `server`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `_url` | `string` |
| `server` | [`HTTPuppyServer`](../interfaces/useServer.HTTPuppyServer.md) |
| `cb` | (`req`: [`HTTPuppyRequest`](../interfaces/useServer.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](../interfaces/useServer.HTTPuppyResponse.md)) => `any` |

#### Returns

`void`

#### Defined in

[src/router.ts:53](https://github.com/abschill/httpuppy/blob/05aa246/src/router.ts#L53)

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

[src/router.ts:81](https://github.com/abschill/httpuppy/blob/05aa246/src/router.ts#L81)

___

### useRouterSignatures

▸ **useRouterSignatures**(`res`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `res` | [`HTTPuppyResponse`](../interfaces/useServer.HTTPuppyResponse.md) |

#### Returns

`void`

#### Defined in

[src/router.ts:34](https://github.com/abschill/httpuppy/blob/05aa246/src/router.ts#L34)
