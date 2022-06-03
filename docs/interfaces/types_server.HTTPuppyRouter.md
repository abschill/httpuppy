[httpuppy - v0.1.0](../README.md) / [Modules](../modules.md) / [types/server](../modules/types_server.md) / HTTPuppyRouter

# Interface: HTTPuppyRouter

[types/server](../modules/types_server.md).HTTPuppyRouter

## Table of contents

### Properties

- [baseUrl](types_server.HTTPuppyRouter.md#baseurl)
- [delete](types_server.HTTPuppyRouter.md#delete)
- [get](types_server.HTTPuppyRouter.md#get)
- [head](types_server.HTTPuppyRouter.md#head)
- [patch](types_server.HTTPuppyRouter.md#patch)
- [post](types_server.HTTPuppyRouter.md#post)
- [put](types_server.HTTPuppyRouter.md#put)

## Properties

### baseUrl

• **baseUrl**: `string`

#### Defined in

[src/types/server/index.ts:107](https://github.com/abschill/httpuppy/blob/edd8373/src/types/server/index.ts#L107)

___

### delete

• **delete**: (`url`: `string`, `cb`: (`req`: [`HTTPuppyRequest`](types_server.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)) => `any`) => typeof [`HTTPuppyCallback`](../modules/types_server.md#httpuppycallback) \| `void`

#### Type declaration

▸ (`url`, `cb`): typeof [`HTTPuppyCallback`](../modules/types_server.md#httpuppycallback) \| `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `cb` | (`req`: [`HTTPuppyRequest`](types_server.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)) => `any` |

##### Returns

typeof [`HTTPuppyCallback`](../modules/types_server.md#httpuppycallback) \| `void`

#### Defined in

[src/types/server/index.ts:113](https://github.com/abschill/httpuppy/blob/edd8373/src/types/server/index.ts#L113)

___

### get

• **get**: (`url`: `string`, `cb`: (`req`: [`HTTPuppyRequest`](types_server.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)) => `any`) => typeof [`HTTPuppyCallback`](../modules/types_server.md#httpuppycallback) \| `void`

#### Type declaration

▸ (`url`, `cb`): typeof [`HTTPuppyCallback`](../modules/types_server.md#httpuppycallback) \| `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `cb` | (`req`: [`HTTPuppyRequest`](types_server.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)) => `any` |

##### Returns

typeof [`HTTPuppyCallback`](../modules/types_server.md#httpuppycallback) \| `void`

#### Defined in

[src/types/server/index.ts:108](https://github.com/abschill/httpuppy/blob/edd8373/src/types/server/index.ts#L108)

___

### head

• **head**: (`url`: `string`, `cb`: (`req`: [`HTTPuppyRequest`](types_server.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)) => `any`) => typeof [`HTTPuppyCallback`](../modules/types_server.md#httpuppycallback) \| `void`

#### Type declaration

▸ (`url`, `cb`): typeof [`HTTPuppyCallback`](../modules/types_server.md#httpuppycallback) \| `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `cb` | (`req`: [`HTTPuppyRequest`](types_server.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)) => `any` |

##### Returns

typeof [`HTTPuppyCallback`](../modules/types_server.md#httpuppycallback) \| `void`

#### Defined in

[src/types/server/index.ts:109](https://github.com/abschill/httpuppy/blob/edd8373/src/types/server/index.ts#L109)

___

### patch

• **patch**: (`url`: `string`, `cb`: (`req`: [`HTTPuppyRequest`](types_server.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)) => `any`) => typeof [`HTTPuppyCallback`](../modules/types_server.md#httpuppycallback) \| `void`

#### Type declaration

▸ (`url`, `cb`): typeof [`HTTPuppyCallback`](../modules/types_server.md#httpuppycallback) \| `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `cb` | (`req`: [`HTTPuppyRequest`](types_server.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)) => `any` |

##### Returns

typeof [`HTTPuppyCallback`](../modules/types_server.md#httpuppycallback) \| `void`

#### Defined in

[src/types/server/index.ts:112](https://github.com/abschill/httpuppy/blob/edd8373/src/types/server/index.ts#L112)

___

### post

• **post**: (`url`: `string`, `cb`: (`req`: [`HTTPuppyRequest`](types_server.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)) => `any`) => typeof [`HTTPuppyCallback`](../modules/types_server.md#httpuppycallback) \| `void`

#### Type declaration

▸ (`url`, `cb`): typeof [`HTTPuppyCallback`](../modules/types_server.md#httpuppycallback) \| `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `cb` | (`req`: [`HTTPuppyRequest`](types_server.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)) => `any` |

##### Returns

typeof [`HTTPuppyCallback`](../modules/types_server.md#httpuppycallback) \| `void`

#### Defined in

[src/types/server/index.ts:110](https://github.com/abschill/httpuppy/blob/edd8373/src/types/server/index.ts#L110)

___

### put

• **put**: (`url`: `string`, `cb`: (`req`: [`HTTPuppyRequest`](types_server.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)) => `any`) => typeof [`HTTPuppyCallback`](../modules/types_server.md#httpuppycallback) \| `void`

#### Type declaration

▸ (`url`, `cb`): typeof [`HTTPuppyCallback`](../modules/types_server.md#httpuppycallback) \| `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `cb` | (`req`: [`HTTPuppyRequest`](types_server.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)) => `any` |

##### Returns

typeof [`HTTPuppyCallback`](../modules/types_server.md#httpuppycallback) \| `void`

#### Defined in

[src/types/server/index.ts:111](https://github.com/abschill/httpuppy/blob/edd8373/src/types/server/index.ts#L111)
