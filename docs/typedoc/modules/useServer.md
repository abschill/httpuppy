[httpuppy - v0.3.20](../README.md) / [Modules](../modules.md) / useServer

# Module: useServer

**`description`** core server module

## Table of contents

### Interfaces

- [HTTPuppyRequest](../interfaces/useServer.HTTPuppyRequest.md)
- [HTTPuppyResponse](../interfaces/useServer.HTTPuppyResponse.md)
- [HTTPuppyServer](../interfaces/useServer.HTTPuppyServer.md)
- [HTTPuppyServerOptions](../interfaces/useServer.HTTPuppyServerOptions.md)

### Type Aliases

- [DiagnosticLog](useServer.md#diagnosticlog)
- [HTTPuppySleep](useServer.md#httpuppysleep)
- [UserStaticConfig](useServer.md#userstaticconfig)

### Variables

- [defaultHTTPConfig](useServer.md#defaulthttpconfig)

### Functions

- [fromDefaultHTTPConfig](useServer.md#fromdefaulthttpconfig)
- [useServer](useServer.md#useserver)

## Type Aliases

### DiagnosticLog

Ƭ **DiagnosticLog**: `Object`

**`description`** Runtime Diagnostic log to store for debug purposes

#### Type declaration

| Name | Type |
| :------ | :------ |
| `msg` | `string` |
| `timestamp` | `string` |

#### Defined in

[src/server.ts:73](https://github.com/abschill/httpuppy/blob/6913fac/src/server.ts#L73)

___

### HTTPuppySleep

Ƭ **HTTPuppySleep**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

##### Returns

`Promise`<`void`\>

#### Defined in

[src/server.ts:78](https://github.com/abschill/httpuppy/blob/6913fac/src/server.ts#L78)

___

### UserStaticConfig

Ƭ **UserStaticConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `href?` | `string` |
| `indexType?` | `string` |
| `path?` | `string` |

#### Defined in

[src/server.ts:64](https://github.com/abschill/httpuppy/blob/6913fac/src/server.ts#L64)

## Variables

### defaultHTTPConfig

• `Const` **defaultHTTPConfig**: [`HTTPuppyServerOptions`](../interfaces/useServer.HTTPuppyServerOptions.md)

#### Defined in

[src/server.ts:118](https://github.com/abschill/httpuppy/blob/6913fac/src/server.ts#L118)

## Functions

### fromDefaultHTTPConfig

▸ **fromDefaultHTTPConfig**(`config`): [`HTTPuppyServerOptions`](../interfaces/useServer.HTTPuppyServerOptions.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`HTTPuppyServerOptions`](../interfaces/useServer.HTTPuppyServerOptions.md) |

#### Returns

[`HTTPuppyServerOptions`](../interfaces/useServer.HTTPuppyServerOptions.md)

#### Defined in

[src/server.ts:130](https://github.com/abschill/httpuppy/blob/6913fac/src/server.ts#L130)

___

### useServer

▸ **useServer**(`conf`): [`HTTPuppyServer`](../interfaces/useServer.HTTPuppyServer.md)

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
| `conf` | [`HTTPuppyServerOptions`](../interfaces/useServer.HTTPuppyServerOptions.md) | configuration options |

#### Returns

[`HTTPuppyServer`](../interfaces/useServer.HTTPuppyServer.md)

httpuppy server

#### Defined in

[src/server.ts:152](https://github.com/abschill/httpuppy/blob/6913fac/src/server.ts#L152)
