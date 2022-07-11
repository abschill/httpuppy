[httpuppy - v0.4.1](../README.md) / [Modules](../modules.md) / [useServer](../modules/useServer.md) / HTTPServerOptions

# Interface: HTTPServerOptions

[useServer](../modules/useServer.md).HTTPServerOptions

Config for useServer hook

## Table of contents

### Properties

- [cache](useServer.HTTPServerOptions.md#cache)
- [clustered](useServer.HTTPServerOptions.md#clustered)
- [handler](useServer.HTTPServerOptions.md#handler)
- [hostname](useServer.HTTPServerOptions.md#hostname)
- [local\_storage\_path](useServer.HTTPServerOptions.md#local_storage_path)
- [log\_error\_file](useServer.HTTPServerOptions.md#log_error_file)
- [log\_event\_file](useServer.HTTPServerOptions.md#log_event_file)
- [log\_level](useServer.HTTPServerOptions.md#log_level)
- [port](useServer.HTTPServerOptions.md#port)
- [secure](useServer.HTTPServerOptions.md#secure)
- [throw\_warnings](useServer.HTTPServerOptions.md#throw_warnings)
- [ttl\_default](useServer.HTTPServerOptions.md#ttl_default)

## Properties

### cache

• `Optional` **cache**: `CacheSettings`

#### Defined in

[server.ts:29](https://github.com/webpuppy/httpuppy/blob/fae7f8c/src/server.ts#L29)

___

### clustered

• `Optional` **clustered**: `boolean`

#### Defined in

[server.ts:30](https://github.com/webpuppy/httpuppy/blob/fae7f8c/src/server.ts#L30)

___

### handler

• `Optional` **handler**: `any`

#### Defined in

[server.ts:31](https://github.com/webpuppy/httpuppy/blob/fae7f8c/src/server.ts#L31)

___

### hostname

• `Optional` **hostname**: `string`

#### Defined in

[server.ts:32](https://github.com/webpuppy/httpuppy/blob/fae7f8c/src/server.ts#L32)

___

### local\_storage\_path

• `Optional` **local\_storage\_path**: `string`

#### Defined in

[server.ts:44](https://github.com/webpuppy/httpuppy/blob/fae7f8c/src/server.ts#L44)

___

### log\_error\_file

• `Optional` **log\_error\_file**: `string`

#### Defined in

[server.ts:34](https://github.com/webpuppy/httpuppy/blob/fae7f8c/src/server.ts#L34)

___

### log\_event\_file

• `Optional` **log\_event\_file**: `string`

#### Defined in

[server.ts:35](https://github.com/webpuppy/httpuppy/blob/fae7f8c/src/server.ts#L35)

___

### log\_level

• `Optional` **log\_level**: `LogLevel`

#### Defined in

[server.ts:33](https://github.com/webpuppy/httpuppy/blob/fae7f8c/src/server.ts#L33)

___

### port

• `Optional` **port**: `number`

#### Defined in

[server.ts:36](https://github.com/webpuppy/httpuppy/blob/fae7f8c/src/server.ts#L36)

___

### secure

• `Optional` **secure**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cert` | `string` |
| `dhparam?` | `string` |
| `key` | `string` |

#### Defined in

[server.ts:37](https://github.com/webpuppy/httpuppy/blob/fae7f8c/src/server.ts#L37)

___

### throw\_warnings

• `Optional` **throw\_warnings**: `boolean`

#### Defined in

[server.ts:45](https://github.com/webpuppy/httpuppy/blob/fae7f8c/src/server.ts#L45)

___

### ttl\_default

• `Optional` **ttl\_default**: `number`

#### Defined in

[server.ts:43](https://github.com/webpuppy/httpuppy/blob/fae7f8c/src/server.ts#L43)
