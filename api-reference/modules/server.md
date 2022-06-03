[httpuppy - v0.1.0](../README.md) / [Modules](../modules.md) / server

# Module: server

**`description`** Hooks for spinning up a web server

**`example`** calling the userServer hook
```javascript
const app = useServer({
static: {
path: join(process.cwd(), './examples/files')
},
throwWarnings: false,
logLevel: 'base',
middleware: [
{
href: '/',
handler: (req, res) => console.log('middleware')
}
],
});
```

## Table of contents

### Functions

- [shutdown](server.md#shutdown)
- [useServer](server.md#useserver)

## Functions

### shutdown

▸ **shutdown**(`s`): `Promise`<`HTTPuppyServer.HTTPuppySleep`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `s` | `Runtime` | http server to shut down |

#### Returns

`Promise`<`HTTPuppyServer.HTTPuppySleep`\>

void promise to gracefully shut down

#### Defined in

[server.ts:65](https://github.com/abschill/httpuppy/blob/18aaec0/src/server.ts#L65)

___

### useServer

▸ **useServer**(`conf`): `HTTPuppyServer.Runtime`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conf` | `uOptions` | configuration options |

#### Returns

`HTTPuppyServer.Runtime`

httpuppy server

#### Defined in

[server.ts:38](https://github.com/abschill/httpuppy/blob/18aaec0/src/server.ts#L38)
