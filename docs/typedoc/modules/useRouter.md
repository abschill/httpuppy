[httpuppy - v0.3.21](../README.md) / [Modules](../modules.md) / useRouter

# Module: useRouter

**`description`** for adding custom routing to your server

## Table of contents

### Functions

- [useRouter](useRouter.md#userouter)

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
| `rOptions?` | `HTTPuppyRouterOptions` |

#### Returns

`HTTPuppyRouter`

#### Defined in

[src/router.ts:114](https://github.com/abschill/httpuppy/blob/731a790/src/router.ts#L114)
