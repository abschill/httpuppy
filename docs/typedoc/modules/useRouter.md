[httpuppy - v0.3.24](../README.md) / [Modules](../modules.md) / useRouter

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

[router.ts:98](https://github.com/abschill/httpuppy/blob/6c8a84d/src/router.ts#L98)

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

[router.ts:138](https://github.com/abschill/httpuppy/blob/6c8a84d/src/router.ts#L138)
