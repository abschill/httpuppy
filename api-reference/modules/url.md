[httpuppy - v0.1.0](../README.md) / [Modules](../modules.md) / url

# Module: url

## Table of contents

### Functions

- [useVFSResponse](url.md#usevfsresponse)

## Functions

### useVFSResponse

▸ **useVFSResponse**(`req`, `config`): `iTypes.HTTPuppyServer.MountedFile`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `req` | `IncomingMessage` | the request to be replied to with the virtual FS response |
| `config` | `UserHTTPConfig` | the configuration for the parent server |

#### Returns

`iTypes.HTTPuppyServer.MountedFile`

the mounted file to serve for the given request information

#### Defined in

[url.ts:10](https://github.com/abschill/http-simple/blob/472772b/src/url.ts#L10)
