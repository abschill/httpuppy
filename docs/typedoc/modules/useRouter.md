[httpuppy - v0.4.1](../README.md) / [Modules](../modules.md) / useRouter

# Module: useRouter

**`description`** for adding custom routing to your server

## Table of contents

### Functions

- [usePassthrough](useRouter.md#usepassthrough)
- [useRouter](useRouter.md#userouter)

## Functions

### usePassthrough

▸ **usePassthrough**(`_url`, `server`, `cb`, `async`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_url` | `string` |
| `server` | `HTTPServer` |
| `cb` | `HTTPRouterCallback` |
| `async` | `boolean` |

#### Returns

`void`

#### Defined in

[router.ts:89](https://github.com/webpuppy/httpuppy/blob/fae7f8c/src/router.ts#L89)

___

### useRouter

▸ **useRouter**(`server`, `rOptions?`): `HTTPRouter`

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
| `server` | `HTTPServer` |
| `rOptions?` | `HTTPRouterOptions` |

#### Returns

`HTTPRouter`

#### Defined in

[router.ts:124](https://github.com/webpuppy/httpuppy/blob/fae7f8c/src/router.ts#L124)
