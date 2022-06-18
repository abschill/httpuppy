[httpuppy - v0.3.17](../README.md) / [Modules](../modules.md) / useRouter

# Module: useRouter

**`description`** for adding custom routing to your server

## Table of contents

### Type Aliases

- [HTTPuppyBindMethod](useRouter.md#httpuppybindmethod)
- [HTTPuppyRouterOptions](useRouter.md#httpuppyrouteroptions)

### Functions

- [useRouter](useRouter.md#userouter)

## Type Aliases

### HTTPuppyBindMethod

Ƭ **HTTPuppyBindMethod**: (`url`: `string`, `cb`: `HTTPuppyRouterCallback`) => `any`

#### Type declaration

▸ (`url`, `cb`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `cb` | `HTTPuppyRouterCallback` |

##### Returns

`any`

#### Defined in

[src/router.ts:15](https://github.com/abschill/httpuppy/blob/4904c0b/src/router.ts#L15)

___

### HTTPuppyRouterOptions

Ƭ **HTTPuppyRouterOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowPassthrough?` | `boolean` |
| `baseUrl?` | `string` |

#### Defined in

[src/router.ts:46](https://github.com/abschill/httpuppy/blob/4904c0b/src/router.ts#L46)

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

[src/router.ts:125](https://github.com/abschill/httpuppy/blob/4904c0b/src/router.ts#L125)
