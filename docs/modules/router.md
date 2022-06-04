[httpuppy - v0.2.6](../README.md) / [Modules](../modules.md) / router

# Module: router

**`description`** for adding custom routing to your server

## Table of contents

### Functions

- [useRouter](router.md#userouter)

## Functions

### useRouter

▸ **useRouter**(`server`, `routerOptions?`): [`HTTPuppyRouter`](../interfaces/types_server.HTTPuppyRouter.md)

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
| `server` | [`Runtime`](../interfaces/types_server.Runtime.md) |
| `routerOptions?` | `any` |

#### Returns

[`HTTPuppyRouter`](../interfaces/types_server.HTTPuppyRouter.md)

#### Defined in

[src/router.ts:27](https://github.com/abschill/httpuppy/blob/d4a7c7e/src/router.ts#L27)
