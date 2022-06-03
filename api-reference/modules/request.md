[httpuppy - v0.1.0](../README.md) / [Modules](../modules.md) / request

# Module: request

**`description`** hooks for handling requests for the core module

## Table of contents

### Functions

- [useStaticHandler](request.md#usestatichandler)

## Functions

### useStaticHandler

▸ **useStaticHandler**(`req`, `res`, `config`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `req` | `HTTPuppyRequest` | incoming message to handle args from |
| `res` | `HTTPuppyResponse` | response message to send |
| `config` | `uOptions` | config from server |

#### Returns

`void`

nothing, it inherits flow control from the requesting branch

#### Defined in

[request.ts:32](https://github.com/abschill/httpuppy/blob/a105d2f/src/request.ts#L32)
