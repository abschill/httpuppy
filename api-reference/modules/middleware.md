[httpuppy - v0.1.0](../README.md) / [Modules](../modules.md) / middleware

# Module: middleware

## Table of contents

### Functions

- [useHeaders](middleware.md#useheaders)

## Functions

### useHeaders

▸ **useHeaders**(`options`, `config`): `iPuppy.HTTPHeaders`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `HTTPuppyWriterOptions` | the writer options to apply the headers against |
| `config` | `UserHTTPConfig` | the server config to apply against |

#### Returns

`iPuppy.HTTPHeaders`

default list of http headers based on given config cache settings / content type of the request options

#### Defined in

[middleware.ts:13](https://github.com/abschill/http-simple/blob/762f144/src/middleware.ts#L13)
