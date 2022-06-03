[httpuppy - v0.1.0](../README.md) / [Modules](../modules.md) / url

# Module: url

**`description`** Hooks for handling url parsing strategies

## Table of contents

### Functions

- [useStaticURLParser](url.md#usestaticurlparser)

## Functions

### useStaticURLParser

▸ **useStaticURLParser**(`req`, `config`): `iTypes.HTTPuppyServer.MountedFile`

**`function`** useStaticURLParser

**`description`** hook for handling a response with a virtually mounted static filesystem browser

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `req` | `IncomingMessage` | the request to be replied to with the virtual FS response |
| `config` | `uOptions` | the configuration for the parent server |

#### Returns

`iTypes.HTTPuppyServer.MountedFile`

the mounted file to serve based on the given request information

#### Defined in

[url.ts:15](https://github.com/abschill/httpuppy/blob/18aaec0/src/url.ts#L15)
