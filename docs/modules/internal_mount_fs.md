[httpuppy - v0.1.0](../README.md) / [Modules](../modules.md) / internal/mount-fs

# Module: internal/mount-fs

## Table of contents

### Functions

- [useMountedFS](internal_mount_fs.md#usemountedfs)

## Functions

### useMountedFS

▸ **useMountedFS**(`config`): `Object`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`HTTPuppyServerOptions`](../interfaces/types_server.HTTPuppyServerOptions.md) | config options for the runtime that wants to mount an FS |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `filesMounted` | { `content`: `Buffer` ; `contentType`: `any`[] ; `fileName`: `string` = file; `hrefs`: `string`[] ; `symLink`: `string`  }[] |
| `mountedPath` | `string` |

#### Defined in

[src/internal/mount-fs.ts:36](https://github.com/abschill/httpuppy/blob/70019ad/src/internal/mount-fs.ts#L36)
