[httpuppy - v0.1.0](../README.md) / [Modules](../modules.md) / middleware

# Module: middleware

## Table of contents

### Functions

- [useHeaders](middleware.md#useheaders)

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

[middleware.ts:14](https://github.com/abschill/http-simple/blob/a9450e2/src/middleware.ts#L14)
