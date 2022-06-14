[httpuppy - v0.3.8](../README.md) / [Modules](../modules.md) / server

# Module: server

**`description`** core server module

## Table of contents

### Interfaces

- [HTTPuppyRequest](../interfaces/server.HTTPuppyRequest.md)
- [HTTPuppyResponse](../interfaces/server.HTTPuppyResponse.md)
- [HTTPuppyServer](../interfaces/server.HTTPuppyServer.md)
- [HTTPuppyServerOptions](../interfaces/server.HTTPuppyServerOptions.md)

### Type Aliases

- [DiagnosticLog](server.md#diagnosticlog)
- [HTTPuppySleep](server.md#httpuppysleep)
- [UserStaticConfig](server.md#userstaticconfig)

### Variables

- [defaultHTTPConfig](server.md#defaulthttpconfig)

### Functions

- [fromDefaultHTTPConfig](server.md#fromdefaulthttpconfig)
- [useServer](server.md#useserver)

## Type Aliases

### DiagnosticLog

Ƭ **DiagnosticLog**: `Object`

**`description`** Runtime Diagnostic log to store for debug purposes

#### Type declaration

| Name | Type |
| :------ | :------ |
| `msg` | `string` |

#### Defined in

[src/server.ts:64](https://github.com/abschill/httpuppy/blob/272217e/src/server.ts#L64)

___

### HTTPuppySleep

Ƭ **HTTPuppySleep**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

##### Returns

`Promise`<`void`\>

#### Defined in

[src/server.ts:68](https://github.com/abschill/httpuppy/blob/272217e/src/server.ts#L68)

___

### UserStaticConfig

Ƭ **UserStaticConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `href?` | `string` |
| `indexType?` | `string` |
| `mimeType?` | `string` |
| `path?` | `string` |

#### Defined in

[src/server.ts:54](https://github.com/abschill/httpuppy/blob/272217e/src/server.ts#L54)

## Variables

### defaultHTTPConfig

• `Const` **defaultHTTPConfig**: [`HTTPuppyServerOptions`](../interfaces/server.HTTPuppyServerOptions.md)

#### Defined in

[src/server.ts:106](https://github.com/abschill/httpuppy/blob/272217e/src/server.ts#L106)

## Functions

### fromDefaultHTTPConfig

▸ **fromDefaultHTTPConfig**(`config`): [`HTTPuppyServerOptions`](../interfaces/server.HTTPuppyServerOptions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`HTTPuppyServerOptions`](../interfaces/server.HTTPuppyServerOptions.md) |

#### Returns

[`HTTPuppyServerOptions`](../interfaces/server.HTTPuppyServerOptions.md)

#### Defined in

[src/server.ts:117](https://github.com/abschill/httpuppy/blob/272217e/src/server.ts#L117)

___

### useServer

▸ **useServer**(`conf`): [`HTTPuppyServer`](../interfaces/server.HTTPuppyServer.md)

**`function`** useServer

**`example`**
```javascript
const app = useServer({
	static: {
		path: './examples/files'
	}
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conf` | [`HTTPuppyServerOptions`](../interfaces/server.HTTPuppyServerOptions.md) | configuration options |

#### Returns

[`HTTPuppyServer`](../interfaces/server.HTTPuppyServer.md)

httpuppy server

#### Defined in

[src/server.ts:139](https://github.com/abschill/httpuppy/blob/272217e/src/server.ts#L139)
