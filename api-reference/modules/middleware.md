[httpuppy - v0.1.0](../README.md) / [Modules](../modules.md) / middleware

# Module: middleware

**`description`** hooks for setting up middleware for the request chain

## Table of contents

### Functions

- [useHeaders](middleware.md#useheaders)
- [useMiddleware](middleware.md#usemiddleware)

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

[middleware.ts:22](https://github.com/abschill/httpuppy/blob/3c91a72/src/middleware.ts#L22)

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

[middleware.ts:44](https://github.com/abschill/httpuppy/blob/3c91a72/src/middleware.ts#L44)
