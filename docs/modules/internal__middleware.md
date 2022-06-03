[httpuppy - v0.1.0](../README.md) / [Modules](../modules.md) / internal/\_middleware

# Module: internal/\_middleware

## Table of contents

### Functions

- [\_onReadable](internal__middleware.md#_onreadable)
- [\_useCloseHandler](internal__middleware.md#_useclosehandler)

## Functions

### \_onReadable

▸ **_onReadable**(`req`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`HTTPuppyRequest`](../interfaces/types_server.HTTPuppyRequest.md) |
| `cb` | () => `void` |

#### Returns

`void`

#### Defined in

[src/internal/_middleware.ts:15](https://github.com/abschill/httpuppy/blob/769369d/src/internal/_middleware.ts#L15)

___

### \_useCloseHandler

▸ **_useCloseHandler**<`T`\>(`msg`, `cb`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`HTTPuppyRequest`](../interfaces/types_server.HTTPuppyRequest.md) \| [`HTTPuppyResponse`](../interfaces/types_server.HTTPuppyResponse.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `T` |
| `cb` | (`ctx`: `T`) => `void` |

#### Returns

`void`

#### Defined in

[src/internal/_middleware.ts:5](https://github.com/abschill/httpuppy/blob/769369d/src/internal/_middleware.ts#L5)
