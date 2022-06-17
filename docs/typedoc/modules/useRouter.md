[httpuppy - v0.3.15](../README.md) / [Modules](../modules.md) / useRouter

# Module: useRouter

**`description`** for adding custom routing to your server

## Table of contents

### Type Aliases

- [HTTPuppyRouterCallback](useRouter.md#httpuppyroutercallback)
- [HTTPuppyRouterOptions](useRouter.md#httpuppyrouteroptions)

### Functions

- [useRouter](useRouter.md#userouter)

## Type Aliases

### HTTPuppyRouterCallback

Ƭ **HTTPuppyRouterCallback**: (`req`: [`HTTPuppyRequest`](../interfaces/useServer.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](../interfaces/useServer.HTTPuppyResponse.md)) => `Promise`<`any`\> \| (`req`: [`HTTPuppyRequest`](../interfaces/useServer.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](../interfaces/useServer.HTTPuppyResponse.md)) => `any`

#### Type declaration

▸ (`req`, `res`): `Promise`<`any`\> \| (`req`: [`HTTPuppyRequest`](../interfaces/useServer.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](../interfaces/useServer.HTTPuppyResponse.md)) => `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`HTTPuppyRequest`](../interfaces/useServer.HTTPuppyRequest.md) |
| `res` | [`HTTPuppyResponse`](../interfaces/useServer.HTTPuppyResponse.md) |

##### Returns

`Promise`<`any`\> \| (`req`: [`HTTPuppyRequest`](../interfaces/useServer.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](../interfaces/useServer.HTTPuppyResponse.md)) => `any`

#### Defined in

[src/router.ts:16](https://github.com/abschill/httpuppy/blob/bf01d3d/src/router.ts#L16)

___

### HTTPuppyRouterOptions

Ƭ **HTTPuppyRouterOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowPassthrough?` | `boolean` |
| `baseUrl?` | `string` |

#### Defined in

[src/router.ts:52](https://github.com/abschill/httpuppy/blob/bf01d3d/src/router.ts#L52)

## Functions

### useRouter

▸ **useRouter**(`server`, `rOptions?`): `HTTPuppyRouter`

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

`HTTPuppyRouter`

#### Defined in

[src/router.ts:123](https://github.com/abschill/httpuppy/blob/bf01d3d/src/router.ts#L123)
