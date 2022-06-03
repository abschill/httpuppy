[httpuppy - v0.1.0](../README.md) / [Modules](../modules.md) / internal/writer

# Module: internal/writer

## Table of contents

### Functions

- [isBufferType](internal_writer.md#isbuffertype)
- [useVirtualStreamReader](internal_writer.md#usevirtualstreamreader)
- [useWriter](internal_writer.md#usewriter)

## Functions

### isBufferType

▸ **isBufferType**(`file`): `boolean`

**`internal`** isBufferType

**`description`** check whether or not the file needs to be written into a stream as a buffer, or utf-8 content

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `string` | the file read by the VFS that is undergoing buffer check |

#### Returns

`boolean`

boolean whether or not it needs to be written as a buffer or can be served directly

#### Defined in

[src/internal/writer.ts:13](https://github.com/abschill/httpuppy/blob/70019ad/src/internal/writer.ts#L13)

___

### useVirtualStreamReader

▸ **useVirtualStreamReader**(`pathData`, `res`): `void`

**`internal`** useVirtualStreamReader

**`description`** apply virtual stream reader to the given request, and close stream on exit

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pathData` | [`MountedFile`](types_server.md#mountedfile) | the resulting mount file from useStaticUrlParser call in useStaticMount |
| `res` | [`HTTPuppyResponse`](../interfaces/types_server.HTTPuppyResponse.md) | the current response being handled by the server |

#### Returns

`void`

#### Defined in

[src/internal/writer.ts:26](https://github.com/abschill/httpuppy/blob/70019ad/src/internal/writer.ts#L26)

___

### useWriter

▸ **useWriter**(`res`, `config`, `options`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `res` | [`HTTPuppyResponse`](../interfaces/types_server.HTTPuppyResponse.md) | the response to write to |
| `config` | [`HTTPuppyServerOptions`](../interfaces/types_server.HTTPuppyServerOptions.md) | the config to base the write on |
| `options` | [`HTTPuppyWriterOptions`](types_server.md#httpuppywriteroptions) | the writer instance options |

#### Returns

`void`

#### Defined in

[src/internal/writer.ts:55](https://github.com/abschill/httpuppy/blob/70019ad/src/internal/writer.ts#L55)
