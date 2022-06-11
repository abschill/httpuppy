[httpuppy - v0.3.3](../README.md) / [Modules](../modules.md) / [types/server](../modules/types_server.md) / HTTPuppyRouter

# Interface: HTTPuppyRouter

[types/server](../modules/types_server.md).HTTPuppyRouter

## Table of contents

### Properties

- [delete](types_server.HTTPuppyRouter.md#delete)
- [get](types_server.HTTPuppyRouter.md#get)
- [head](types_server.HTTPuppyRouter.md#head)
- [patch](types_server.HTTPuppyRouter.md#patch)
- [post](types_server.HTTPuppyRouter.md#post)
- [put](types_server.HTTPuppyRouter.md#put)
- [url](types_server.HTTPuppyRouter.md#url)

## Properties

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

[src/types/server/index.ts:117](https://github.com/abschill/httpuppy/blob/64a998c/src/types/server/index.ts#L117)

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

[src/types/server/index.ts:112](https://github.com/abschill/httpuppy/blob/64a998c/src/types/server/index.ts#L112)

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

[src/types/server/index.ts:113](https://github.com/abschill/httpuppy/blob/64a998c/src/types/server/index.ts#L113)

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

[src/types/server/index.ts:116](https://github.com/abschill/httpuppy/blob/64a998c/src/types/server/index.ts#L116)

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

[src/types/server/index.ts:114](https://github.com/abschill/httpuppy/blob/64a998c/src/types/server/index.ts#L114)

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

[src/types/server/index.ts:115](https://github.com/abschill/httpuppy/blob/64a998c/src/types/server/index.ts#L115)

___

### url

• **url**: `string`

#### Defined in

[src/types/server/index.ts:111](https://github.com/abschill/httpuppy/blob/64a998c/src/types/server/index.ts#L111)
