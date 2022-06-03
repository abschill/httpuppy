[httpuppy - v0.1.0](../README.md) / [Modules](../modules.md) / router

# Module: router

**`description`** for adding custom routing to your server

## Table of contents

### Functions

- [useRouter](router.md#userouter)

## Functions

### useRouter

▸ **useRouter**(`server`, `routerOptions?`): `HTTPuppyRouter`

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
| `server` | `Runtime` |
| `routerOptions?` | `any` |

#### Returns

`HTTPuppyRouter`

#### Defined in

[router.ts:58](https://github.com/abschill/httpuppy/blob/958daf1/src/router.ts#L58)
