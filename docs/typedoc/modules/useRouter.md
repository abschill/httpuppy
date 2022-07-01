[httpuppy - v0.4.0](../README.md) / [Modules](../modules.md) / useRouter

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
| `server` | `HTTPuppyServer` |
| `cb` | `HTTPuppyRouterCallback` |
| `async` | `boolean` |

#### Returns

`void`

#### Defined in

[router.ts:90](https://github.com/abschill/httpuppy/blob/4cc0584/src/router.ts#L90)

___

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
| `server` | `HTTPuppyServer` |
| `rOptions?` | `HTTPuppyRouterOptions` |

#### Returns

`HTTPuppyRouter`

#### Defined in

[router.ts:130](https://github.com/abschill/httpuppy/blob/4cc0584/src/router.ts#L130)
