[httpuppy - v0.3.12](../README.md) / [Modules](../modules.md) / useRouter

# Module: useRouter

**`description`** for adding custom routing to your server

## Table of contents

### Type Aliases

- [HTTPuppyRouterOptions](useRouter.md#httpuppyrouteroptions)

### Functions

- [useRouter](useRouter.md#userouter)

## Type Aliases

### HTTPuppyRouterOptions

Ƭ **HTTPuppyRouterOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowPassthrough?` | `boolean` |
| `baseUrl?` | `string` |

#### Defined in

[src/router.ts:50](https://github.com/abschill/httpuppy/blob/53d71ee/src/router.ts#L50)

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

[src/router.ts:110](https://github.com/abschill/httpuppy/blob/53d71ee/src/router.ts#L110)
