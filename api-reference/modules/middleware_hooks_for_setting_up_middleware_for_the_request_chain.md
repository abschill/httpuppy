[httpuppy - v0.1.0](../README.md) / [Modules](../modules.md) / middleware
hooks for setting up middleware for the request chain

# Module: middleware
hooks for setting up middleware for the request chain

## Table of contents

### Functions

- [useHeaders](middleware_hooks_for_setting_up_middleware_for_the_request_chain.md#useheaders)
- [useMiddleware](middleware_hooks_for_setting_up_middleware_for_the_request_chain.md#usemiddleware)

## Functions

### useHeaders

▸ **useHeaders**(`options`, `config`): `iHTTP.HTTPHeaders`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `HTTPuppyWriterOptions` | the writer options to apply the headers against |
| `config` | `uOptions` | the server config to apply against |

#### Returns

`iHTTP.HTTPHeaders`

default list of http headers based on given config cache settings / content type of the request options

#### Defined in

[middleware.ts:22](https://github.com/abschill/httpuppy/blob/a105d2f/src/middleware.ts#L22)

___

### useMiddleware

▸ **useMiddleware**(`config`, `req`, `res`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `uOptions` |
| `req` | `HTTPuppyRequest` |
| `res` | `HTTPuppyResponse` |

#### Returns

`void`

#### Defined in

[middleware.ts:44](https://github.com/abschill/httpuppy/blob/a105d2f/src/middleware.ts#L44)
