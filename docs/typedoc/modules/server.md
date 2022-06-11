[httpuppy - v0.3.5](../README.md) / [Modules](../modules.md) / server

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

[src/server.ts:60](https://github.com/abschill/httpuppy/blob/acdf1e9/src/server.ts#L60)

___

### HTTPuppySleep

Ƭ **HTTPuppySleep**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

##### Returns

`Promise`<`void`\>

#### Defined in

[src/server.ts:64](https://github.com/abschill/httpuppy/blob/acdf1e9/src/server.ts#L64)

## Variables

### defaultHTTPConfig

• `Const` **defaultHTTPConfig**: [`HTTPuppyServerOptions`](../interfaces/server.HTTPuppyServerOptions.md)

#### Defined in

[src/server.ts:102](https://github.com/abschill/httpuppy/blob/acdf1e9/src/server.ts#L102)

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

[src/server.ts:113](https://github.com/abschill/httpuppy/blob/acdf1e9/src/server.ts#L113)

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

[src/server.ts:135](https://github.com/abschill/httpuppy/blob/acdf1e9/src/server.ts#L135)
