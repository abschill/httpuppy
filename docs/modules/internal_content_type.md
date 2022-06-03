[httpuppy - v0.1.0](../README.md) / [Modules](../modules.md) / internal/content-type

# Module: internal/content-type

## Table of contents

### Functions

- [default](internal_content_type.md#default)

## Functions

### default

▸ **default**(`fpath`): [`HTTPHeader`](types_http.md#httpheader)

**`internal`** useContentType

**`description`** hook for determining content type of a virtual fpath on the system

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fpath` | `string` | the file path of the type to resolve |

#### Returns

[`HTTPHeader`](types_http.md#httpheader)

the tuple representing the content type header for the static file

#### Defined in

[src/internal/content-type.ts:10](https://github.com/abschill/httpuppy/blob/769369d/src/internal/content-type.ts#L10)
