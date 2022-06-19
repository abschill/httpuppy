[httpuppy - v0.3.22](../README.md) / [Modules](../modules.md) / useRouter

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
| `server` | `HTTPuppyServer` |
| `rOptions?` | `HTTPuppyRouterOptions` |

#### Returns

`HTTPuppyRouter`

#### Defined in

[router.ts:108](https://github.com/abschill/httpuppy/blob/c30de6c/src/router.ts#L108)
