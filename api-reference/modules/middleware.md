[httpuppy - v0.1.0](../README.md) / [Modules](../modules.md) / middleware

# Module: middleware

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

[middleware.ts:16](https://github.com/abschill/httpuppy/blob/907161d/src/middleware.ts#L16)

___

### useMiddleware

▸ **useMiddleware**(`config`, `req`, `res`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `uOptions` |
| `req` | `IncomingMessage` |
| `res` | `ServerResponse` |

#### Returns

`void`

#### Defined in

[middleware.ts:38](https://github.com/abschill/httpuppy/blob/907161d/src/middleware.ts#L38)
