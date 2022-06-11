[httpuppy - v0.3.5](../README.md) / [Modules](../modules.md) / [router](../modules/router.md) / HTTPuppyRouter

# Interface: HTTPuppyRouter

[router](../modules/router.md).HTTPuppyRouter

## Table of contents

### Properties

- [connect](router.HTTPuppyRouter.md#connect)
- [delete](router.HTTPuppyRouter.md#delete)
- [get](router.HTTPuppyRouter.md#get)
- [head](router.HTTPuppyRouter.md#head)
- [options](router.HTTPuppyRouter.md#options)
- [patch](router.HTTPuppyRouter.md#patch)
- [post](router.HTTPuppyRouter.md#post)
- [put](router.HTTPuppyRouter.md#put)
- [trace](router.HTTPuppyRouter.md#trace)
- [url](router.HTTPuppyRouter.md#url)

## Properties

### connect

• **connect**: (`url`: `string`, `cb`: (`req`: [`HTTPuppyRequest`](server.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](server.HTTPuppyResponse.md)) => `any`) => typeof [`HTTPuppyCallback`](../modules/router.md#httpuppycallback) \| `void`

#### Type declaration

▸ (`url`, `cb`): typeof [`HTTPuppyCallback`](../modules/router.md#httpuppycallback) \| `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `cb` | (`req`: [`HTTPuppyRequest`](server.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](server.HTTPuppyResponse.md)) => `any` |

##### Returns

typeof [`HTTPuppyCallback`](../modules/router.md#httpuppycallback) \| `void`

#### Defined in

[src/router.ts:26](https://github.com/abschill/httpuppy/blob/ee38a23/src/router.ts#L26)

___

### delete

• **delete**: (`url`: `string`, `cb`: (`req`: [`HTTPuppyRequest`](server.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](server.HTTPuppyResponse.md)) => `any`) => typeof [`HTTPuppyCallback`](../modules/router.md#httpuppycallback) \| `void`

#### Type declaration

▸ (`url`, `cb`): typeof [`HTTPuppyCallback`](../modules/router.md#httpuppycallback) \| `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `cb` | (`req`: [`HTTPuppyRequest`](server.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](server.HTTPuppyResponse.md)) => `any` |

##### Returns

typeof [`HTTPuppyCallback`](../modules/router.md#httpuppycallback) \| `void`

#### Defined in

[src/router.ts:27](https://github.com/abschill/httpuppy/blob/ee38a23/src/router.ts#L27)

___

### get

• **get**: (`url`: `string`, `cb`: (`req`: [`HTTPuppyRequest`](server.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](server.HTTPuppyResponse.md)) => `any`) => typeof [`HTTPuppyCallback`](../modules/router.md#httpuppycallback) \| `void`

#### Type declaration

▸ (`url`, `cb`): typeof [`HTTPuppyCallback`](../modules/router.md#httpuppycallback) \| `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `cb` | (`req`: [`HTTPuppyRequest`](server.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](server.HTTPuppyResponse.md)) => `any` |

##### Returns

typeof [`HTTPuppyCallback`](../modules/router.md#httpuppycallback) \| `void`

#### Defined in

[src/router.ts:20](https://github.com/abschill/httpuppy/blob/ee38a23/src/router.ts#L20)

___

### head

• **head**: (`url`: `string`, `cb`: (`req`: [`HTTPuppyRequest`](server.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](server.HTTPuppyResponse.md)) => `any`) => typeof [`HTTPuppyCallback`](../modules/router.md#httpuppycallback) \| `void`

#### Type declaration

▸ (`url`, `cb`): typeof [`HTTPuppyCallback`](../modules/router.md#httpuppycallback) \| `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `cb` | (`req`: [`HTTPuppyRequest`](server.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](server.HTTPuppyResponse.md)) => `any` |

##### Returns

typeof [`HTTPuppyCallback`](../modules/router.md#httpuppycallback) \| `void`

#### Defined in

[src/router.ts:21](https://github.com/abschill/httpuppy/blob/ee38a23/src/router.ts#L21)

___

### options

• **options**: (`url`: `string`, `cb`: (`req`: [`HTTPuppyRequest`](server.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](server.HTTPuppyResponse.md)) => `any`) => typeof [`HTTPuppyCallback`](../modules/router.md#httpuppycallback) \| `void`

#### Type declaration

▸ (`url`, `cb`): typeof [`HTTPuppyCallback`](../modules/router.md#httpuppycallback) \| `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `cb` | (`req`: [`HTTPuppyRequest`](server.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](server.HTTPuppyResponse.md)) => `any` |

##### Returns

typeof [`HTTPuppyCallback`](../modules/router.md#httpuppycallback) \| `void`

#### Defined in

[src/router.ts:28](https://github.com/abschill/httpuppy/blob/ee38a23/src/router.ts#L28)

___

### patch

• **patch**: (`url`: `string`, `cb`: (`req`: [`HTTPuppyRequest`](server.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](server.HTTPuppyResponse.md)) => `any`) => typeof [`HTTPuppyCallback`](../modules/router.md#httpuppycallback) \| `void`

#### Type declaration

▸ (`url`, `cb`): typeof [`HTTPuppyCallback`](../modules/router.md#httpuppycallback) \| `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `cb` | (`req`: [`HTTPuppyRequest`](server.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](server.HTTPuppyResponse.md)) => `any` |

##### Returns

typeof [`HTTPuppyCallback`](../modules/router.md#httpuppycallback) \| `void`

#### Defined in

[src/router.ts:24](https://github.com/abschill/httpuppy/blob/ee38a23/src/router.ts#L24)

___

### post

• **post**: (`url`: `string`, `cb`: (`req`: [`HTTPuppyRequest`](server.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](server.HTTPuppyResponse.md)) => `any`) => typeof [`HTTPuppyCallback`](../modules/router.md#httpuppycallback) \| `void`

#### Type declaration

▸ (`url`, `cb`): typeof [`HTTPuppyCallback`](../modules/router.md#httpuppycallback) \| `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `cb` | (`req`: [`HTTPuppyRequest`](server.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](server.HTTPuppyResponse.md)) => `any` |

##### Returns

typeof [`HTTPuppyCallback`](../modules/router.md#httpuppycallback) \| `void`

#### Defined in

[src/router.ts:22](https://github.com/abschill/httpuppy/blob/ee38a23/src/router.ts#L22)

___

### put

• **put**: (`url`: `string`, `cb`: (`req`: [`HTTPuppyRequest`](server.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](server.HTTPuppyResponse.md)) => `any`) => typeof [`HTTPuppyCallback`](../modules/router.md#httpuppycallback) \| `void`

#### Type declaration

▸ (`url`, `cb`): typeof [`HTTPuppyCallback`](../modules/router.md#httpuppycallback) \| `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `cb` | (`req`: [`HTTPuppyRequest`](server.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](server.HTTPuppyResponse.md)) => `any` |

##### Returns

typeof [`HTTPuppyCallback`](../modules/router.md#httpuppycallback) \| `void`

#### Defined in

[src/router.ts:23](https://github.com/abschill/httpuppy/blob/ee38a23/src/router.ts#L23)

___

### trace

• **trace**: (`url`: `string`, `cb`: (`req`: [`HTTPuppyRequest`](server.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](server.HTTPuppyResponse.md)) => `any`) => typeof [`HTTPuppyCallback`](../modules/router.md#httpuppycallback) \| `void`

#### Type declaration

▸ (`url`, `cb`): typeof [`HTTPuppyCallback`](../modules/router.md#httpuppycallback) \| `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `cb` | (`req`: [`HTTPuppyRequest`](server.HTTPuppyRequest.md), `res`: [`HTTPuppyResponse`](server.HTTPuppyResponse.md)) => `any` |

##### Returns

typeof [`HTTPuppyCallback`](../modules/router.md#httpuppycallback) \| `void`

#### Defined in

[src/router.ts:25](https://github.com/abschill/httpuppy/blob/ee38a23/src/router.ts#L25)

___

### url

• **url**: `string`

#### Defined in

[src/router.ts:19](https://github.com/abschill/httpuppy/blob/ee38a23/src/router.ts#L19)
