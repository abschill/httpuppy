[httpuppy - v0.1.0](../README.md) / [Modules](../modules.md) / router

# Module: router

**`description`** for adding custom routing to your server

**`example`**
```javascript
const router = useRouter(app);
router.get('/', (req, res) => res.send('hi'))
```

## Table of contents

### Functions

- [useRouter](router.md#userouter)

## Functions

### useRouter

▸ **useRouter**(`attachTo`): `HTTPuppyRouter`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attachTo` | `Runtime` |

#### Returns

`HTTPuppyRouter`

#### Defined in

[router.ts:12](https://github.com/abschill/httpuppy/blob/3c91a72/src/router.ts#L12)
