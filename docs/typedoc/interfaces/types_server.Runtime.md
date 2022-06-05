[httpuppy - v0.2.10](../README.md) / [Modules](../modules.md) / [types/server](../modules/types_server.md) / Runtime

# Interface: Runtime

[types/server](../modules/types_server.md).Runtime

**`interface`** Runtime

**`description`** Core Module to wrap the standard http library for node

## Hierarchy

- `Server`

  ↳ **`Runtime`**

## Table of contents

### Properties

- [\_vfs](types_server.Runtime.md#_vfs)
- [connections](types_server.Runtime.md#connections)
- [diagnostics](types_server.Runtime.md#diagnostics)
- [headersTimeout](types_server.Runtime.md#headerstimeout)
- [keepAliveTimeout](types_server.Runtime.md#keepalivetimeout)
- [listening](types_server.Runtime.md#listening)
- [maxConnections](types_server.Runtime.md#maxconnections)
- [maxHeadersCount](types_server.Runtime.md#maxheaderscount)
- [maxRequestsPerSocket](types_server.Runtime.md#maxrequestspersocket)
- [onClose](types_server.Runtime.md#onclose)
- [pConfig](types_server.Runtime.md#pconfig)
- [requestTimeout](types_server.Runtime.md#requesttimeout)
- [timeout](types_server.Runtime.md#timeout)

### Methods

- [\_shutdown](types_server.Runtime.md#_shutdown)
- [addListener](types_server.Runtime.md#addlistener)
- [address](types_server.Runtime.md#address)
- [close](types_server.Runtime.md#close)
- [emit](types_server.Runtime.md#emit)
- [eventNames](types_server.Runtime.md#eventnames)
- [getConnections](types_server.Runtime.md#getconnections)
- [getMaxListeners](types_server.Runtime.md#getmaxlisteners)
- [listen](types_server.Runtime.md#listen)
- [listenerCount](types_server.Runtime.md#listenercount)
- [listeners](types_server.Runtime.md#listeners)
- [off](types_server.Runtime.md#off)
- [on](types_server.Runtime.md#on)
- [once](types_server.Runtime.md#once)
- [prependListener](types_server.Runtime.md#prependlistener)
- [prependOnceListener](types_server.Runtime.md#prependoncelistener)
- [rawListeners](types_server.Runtime.md#rawlisteners)
- [ref](types_server.Runtime.md#ref)
- [removeAllListeners](types_server.Runtime.md#removealllisteners)
- [removeListener](types_server.Runtime.md#removelistener)
- [setMaxListeners](types_server.Runtime.md#setmaxlisteners)
- [setTimeout](types_server.Runtime.md#settimeout)
- [unref](types_server.Runtime.md#unref)

## Properties

### \_vfs

• **\_vfs**: [`VirtualFileSystem`](../modules/types_server.md#virtualfilesystem)

#### Defined in

[src/types/server/index.ts:33](https://github.com/abschill/httpuppy/blob/392e7f9/src/types/server/index.ts#L33)

___

### connections

• **connections**: `number`

#### Inherited from

stlServer.connections

#### Defined in

node_modules/@types/node/net.d.ts:527

___

### diagnostics

• **diagnostics**: [`DiagnosticLog`](../modules/types_server.md#diagnosticlog)[]

#### Defined in

[src/types/server/index.ts:30](https://github.com/abschill/httpuppy/blob/392e7f9/src/types/server/index.ts#L30)

___

### headersTimeout

• **headersTimeout**: `number`

Limit the amount of time the parser will wait to receive the complete HTTP
headers.

In case of inactivity, the rules defined in `server.timeout` apply. However,
that inactivity based timeout would still allow the connection to be kept open
if the headers are being sent very slowly (by default, up to a byte per 2
minutes). In order to prevent this, whenever header data arrives an additional
check is made that more than `server.headersTimeout` milliseconds has not
passed since the connection was established. If the check fails, a `'timeout'`event is emitted on the server object, and (by default) the socket is destroyed.
See `server.timeout` for more information on how timeout behavior can be
customized.

**`since`** v11.3.0, v10.14.0

#### Inherited from

stlServer.headersTimeout

#### Defined in

node_modules/@types/node/http.d.ts:224

___

### keepAliveTimeout

• **keepAliveTimeout**: `number`

The number of milliseconds of inactivity a server needs to wait for additional
incoming data, after it has finished writing the last response, before a socket
will be destroyed. If the server receives new data before the keep-alive
timeout has fired, it will reset the regular inactivity timeout, i.e.,`server.timeout`.

A value of `0` will disable the keep-alive timeout behavior on incoming
connections.
A value of `0` makes the http server behave similarly to Node.js versions prior
to 8.0.0, which did not have a keep-alive timeout.

The socket timeout logic is set up on connection, so changing this value only
affects new connections to the server, not any existing connections.

**`since`** v8.0.0

#### Inherited from

stlServer.keepAliveTimeout

#### Defined in

node_modules/@types/node/http.d.ts:240

___

### listening

• **listening**: `boolean`

Indicates whether or not the server is listening for connections.

**`since`** v5.7.0

#### Inherited from

stlServer.listening

#### Defined in

node_modules/@types/node/net.d.ts:532

___

### maxConnections

• **maxConnections**: `number`

Set this property to reject connections when the server's connection count gets
high.

It is not recommended to use this option once a socket has been sent to a child
with `child_process.fork()`.

**`since`** v0.2.0

#### Inherited from

stlServer.maxConnections

#### Defined in

node_modules/@types/node/net.d.ts:526

___

### maxHeadersCount

• **maxHeadersCount**: ``null`` \| `number`

Limits maximum incoming headers count. If set to 0, no limit will be applied.

**`since`** v0.7.0

#### Inherited from

stlServer.maxHeadersCount

#### Defined in

node_modules/@types/node/http.d.ts:186

___

### maxRequestsPerSocket

• **maxRequestsPerSocket**: ``null`` \| `number`

The maximum number of requests socket can handle
before closing keep alive connection.

A value of `0` will disable the limit.

When the limit is reached it will set the `Connection` header value to `close`,
but will not actually close the connection, subsequent requests sent
after the limit is reached will get `503 Service Unavailable` as a response.

**`since`** v16.10.0

#### Inherited from

stlServer.maxRequestsPerSocket

#### Defined in

node_modules/@types/node/http.d.ts:198

___

### onClose

• **onClose**: [`iExitHandler`](../modules/types_server.md#iexithandler)

#### Defined in

[src/types/server/index.ts:31](https://github.com/abschill/httpuppy/blob/392e7f9/src/types/server/index.ts#L31)

___

### pConfig

• **pConfig**: [`HTTPuppyServerOptions`](types_server.HTTPuppyServerOptions.md)

#### Defined in

[src/types/server/index.ts:29](https://github.com/abschill/httpuppy/blob/392e7f9/src/types/server/index.ts#L29)

___

### requestTimeout

• **requestTimeout**: `number`

Sets the timeout value in milliseconds for receiving the entire request from
the client.

If the timeout expires, the server responds with status 408 without
forwarding the request to the request listener and then closes the connection.

It must be set to a non-zero value (e.g. 120 seconds) to protect against
potential Denial-of-Service attacks in case the server is deployed without a
reverse proxy in front.

**`since`** v14.11.0

#### Inherited from

stlServer.requestTimeout

#### Defined in

node_modules/@types/node/http.d.ts:253

___

### timeout

• **timeout**: `number`

The number of milliseconds of inactivity before a socket is presumed
to have timed out.

A value of `0` will disable the timeout behavior on incoming connections.

The socket timeout logic is set up on connection, so changing this
value only affects new connections to the server, not any existing connections.

**`since`** v0.9.12

#### Inherited from

stlServer.timeout

#### Defined in

node_modules/@types/node/http.d.ts:209

## Methods

### \_shutdown

▸ **_shutdown**(): `Promise`<[`HTTPuppySleep`](../modules/types_server.md#httpuppysleep)\>

#### Returns

`Promise`<[`HTTPuppySleep`](../modules/types_server.md#httpuppysleep)\>

#### Defined in

[src/types/server/index.ts:32](https://github.com/abschill/httpuppy/blob/392e7f9/src/types/server/index.ts#L32)

___

### addListener

▸ **addListener**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.addListener

#### Defined in

node_modules/@types/node/http.d.ts:254

▸ **addListener**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.addListener

#### Defined in

node_modules/@types/node/http.d.ts:255

▸ **addListener**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connection"`` |
| `listener` | (`socket`: `Socket`) => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.addListener

#### Defined in

node_modules/@types/node/http.d.ts:256

▸ **addListener**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.addListener

#### Defined in

node_modules/@types/node/http.d.ts:257

▸ **addListener**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"listening"`` |
| `listener` | () => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.addListener

#### Defined in

node_modules/@types/node/http.d.ts:258

▸ **addListener**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"checkContinue"`` |
| `listener` | `RequestListener` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.addListener

#### Defined in

node_modules/@types/node/http.d.ts:259

▸ **addListener**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"checkExpectation"`` |
| `listener` | `RequestListener` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.addListener

#### Defined in

node_modules/@types/node/http.d.ts:260

▸ **addListener**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"clientError"`` |
| `listener` | (`err`: `Error`, `socket`: `Duplex`) => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.addListener

#### Defined in

node_modules/@types/node/http.d.ts:261

▸ **addListener**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | (`req`: `IncomingMessage`, `socket`: `Duplex`, `head`: `Buffer`) => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.addListener

#### Defined in

node_modules/@types/node/http.d.ts:262

▸ **addListener**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"request"`` |
| `listener` | `RequestListener` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.addListener

#### Defined in

node_modules/@types/node/http.d.ts:263

▸ **addListener**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`req`: `IncomingMessage`, `socket`: `Duplex`, `head`: `Buffer`) => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.addListener

#### Defined in

node_modules/@types/node/http.d.ts:264

___

### address

▸ **address**(): ``null`` \| `string` \| `AddressInfo`

Returns the bound `address`, the address `family` name, and `port` of the server
as reported by the operating system if listening on an IP socket
(useful to find which port was assigned when getting an OS-assigned address):`{ port: 12346, family: 'IPv4', address: '127.0.0.1' }`.

For a server listening on a pipe or Unix domain socket, the name is returned
as a string.

```js
const server = net.createServer((socket) => {
  socket.end('goodbye\n');
}).on('error', (err) => {
  // Handle errors here.
  throw err;
});

// Grab an arbitrary unused port.
server.listen(() => {
  console.log('opened server on', server.address());
});
```

`server.address()` returns `null` before the `'listening'` event has been
emitted or after calling `server.close()`.

**`since`** v0.1.90

#### Returns

``null`` \| `string` \| `AddressInfo`

#### Inherited from

stlServer.address

#### Defined in

node_modules/@types/node/net.d.ts:497

___

### close

▸ **close**(`callback?`): [`Runtime`](types_server.Runtime.md)

Stops the server from accepting new connections and keeps existing
connections. This function is asynchronous, the server is finally closed
when all connections are ended and the server emits a `'close'` event.
The optional `callback` will be called once the `'close'` event occurs. Unlike
that event, it will be called with an `Error` as its only argument if the server
was not open when it was closed.

**`since`** v0.1.90

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback?` | (`err?`: `Error`) => `void` | Called when the server is closed. |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.close

#### Defined in

node_modules/@types/node/net.d.ts:470

___

### emit

▸ **emit**(`event`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

stlServer.emit

#### Defined in

node_modules/@types/node/http.d.ts:265

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |

#### Returns

`boolean`

#### Inherited from

stlServer.emit

#### Defined in

node_modules/@types/node/http.d.ts:266

▸ **emit**(`event`, `socket`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connection"`` |
| `socket` | `Socket` |

#### Returns

`boolean`

#### Inherited from

stlServer.emit

#### Defined in

node_modules/@types/node/http.d.ts:267

▸ **emit**(`event`, `err`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `err` | `Error` |

#### Returns

`boolean`

#### Inherited from

stlServer.emit

#### Defined in

node_modules/@types/node/http.d.ts:268

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"listening"`` |

#### Returns

`boolean`

#### Inherited from

stlServer.emit

#### Defined in

node_modules/@types/node/http.d.ts:269

▸ **emit**(`event`, `req`, `res`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"checkContinue"`` |
| `req` | `IncomingMessage` |
| `res` | `ServerResponse` |

#### Returns

`boolean`

#### Inherited from

stlServer.emit

#### Defined in

node_modules/@types/node/http.d.ts:270

▸ **emit**(`event`, `req`, `res`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"checkExpectation"`` |
| `req` | `IncomingMessage` |
| `res` | `ServerResponse` |

#### Returns

`boolean`

#### Inherited from

stlServer.emit

#### Defined in

node_modules/@types/node/http.d.ts:271

▸ **emit**(`event`, `err`, `socket`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"clientError"`` |
| `err` | `Error` |
| `socket` | `Duplex` |

#### Returns

`boolean`

#### Inherited from

stlServer.emit

#### Defined in

node_modules/@types/node/http.d.ts:272

▸ **emit**(`event`, `req`, `socket`, `head`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `req` | `IncomingMessage` |
| `socket` | `Duplex` |
| `head` | `Buffer` |

#### Returns

`boolean`

#### Inherited from

stlServer.emit

#### Defined in

node_modules/@types/node/http.d.ts:273

▸ **emit**(`event`, `req`, `res`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"request"`` |
| `req` | `IncomingMessage` |
| `res` | `ServerResponse` |

#### Returns

`boolean`

#### Inherited from

stlServer.emit

#### Defined in

node_modules/@types/node/http.d.ts:274

▸ **emit**(`event`, `req`, `socket`, `head`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `req` | `IncomingMessage` |
| `socket` | `Duplex` |
| `head` | `Buffer` |

#### Returns

`boolean`

#### Inherited from

stlServer.emit

#### Defined in

node_modules/@types/node/http.d.ts:275

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

**`since`** v6.0.0

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

stlServer.eventNames

#### Defined in

node_modules/@types/node/events.d.ts:642

___

### getConnections

▸ **getConnections**(`cb`): `void`

Asynchronously get the number of concurrent connections on the server. Works
when sockets were sent to forks.

Callback should take two arguments `err` and `count`.

**`since`** v0.9.7

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`error`: ``null`` \| `Error`, `count`: `number`) => `void` |

#### Returns

`void`

#### Inherited from

stlServer.getConnections

#### Defined in

node_modules/@types/node/net.d.ts:505

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to {@link defaultMaxListeners}.

**`since`** v1.0.0

#### Returns

`number`

#### Inherited from

stlServer.getMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:499

___

### listen

▸ **listen**(`port?`, `hostname?`, `backlog?`, `listeningListener?`): [`Runtime`](types_server.Runtime.md)

Start a server listening for connections. A `net.Server` can be a TCP or
an `IPC` server depending on what it listens to.

Possible signatures:

* `server.listen(handle[, backlog][, callback])`
* `server.listen(options[, callback])`
* `server.listen(path[, backlog][, callback])` for `IPC` servers
* `server.listen([port[, host[, backlog]]][, callback])` for TCP servers

This function is asynchronous. When the server starts listening, the `'listening'` event will be emitted. The last parameter `callback`will be added as a listener for the `'listening'`
event.

All `listen()` methods can take a `backlog` parameter to specify the maximum
length of the queue of pending connections. The actual length will be determined
by the OS through sysctl settings such as `tcp_max_syn_backlog` and `somaxconn`on Linux. The default value of this parameter is 511 (not 512).

All {@link Socket} are set to `SO_REUSEADDR` (see [`socket(7)`](https://man7.org/linux/man-pages/man7/socket.7.html) for
details).

The `server.listen()` method can be called again if and only if there was an
error during the first `server.listen()` call or `server.close()` has been
called. Otherwise, an `ERR_SERVER_ALREADY_LISTEN` error will be thrown.

One of the most common errors raised when listening is `EADDRINUSE`.
This happens when another server is already listening on the requested`port`/`path`/`handle`. One way to handle this would be to retry
after a certain amount of time:

```js
server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.log('Address in use, retrying...');
    setTimeout(() => {
      server.close();
      server.listen(PORT, HOST);
    }, 1000);
  }
});
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `port?` | `number` |
| `hostname?` | `string` |
| `backlog?` | `number` |
| `listeningListener?` | () => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.listen

#### Defined in

node_modules/@types/node/net.d.ts:451

▸ **listen**(`port?`, `hostname?`, `listeningListener?`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `port?` | `number` |
| `hostname?` | `string` |
| `listeningListener?` | () => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.listen

#### Defined in

node_modules/@types/node/net.d.ts:452

▸ **listen**(`port?`, `backlog?`, `listeningListener?`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `port?` | `number` |
| `backlog?` | `number` |
| `listeningListener?` | () => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.listen

#### Defined in

node_modules/@types/node/net.d.ts:453

▸ **listen**(`port?`, `listeningListener?`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `port?` | `number` |
| `listeningListener?` | () => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.listen

#### Defined in

node_modules/@types/node/net.d.ts:454

▸ **listen**(`path`, `backlog?`, `listeningListener?`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `backlog?` | `number` |
| `listeningListener?` | () => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.listen

#### Defined in

node_modules/@types/node/net.d.ts:455

▸ **listen**(`path`, `listeningListener?`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `listeningListener?` | () => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.listen

#### Defined in

node_modules/@types/node/net.d.ts:456

▸ **listen**(`options`, `listeningListener?`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ListenOptions` |
| `listeningListener?` | () => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.listen

#### Defined in

node_modules/@types/node/net.d.ts:457

▸ **listen**(`handle`, `backlog?`, `listeningListener?`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handle` | `any` |
| `backlog?` | `number` |
| `listeningListener?` | () => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.listen

#### Defined in

node_modules/@types/node/net.d.ts:458

▸ **listen**(`handle`, `listeningListener?`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handle` | `any` |
| `listeningListener?` | () => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.listen

#### Defined in

node_modules/@types/node/net.d.ts:459

___

### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the number of listeners listening to the event named `eventName`.

**`since`** v3.2.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |

#### Returns

`number`

#### Inherited from

stlServer.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:589

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

stlServer.listeners

#### Defined in

node_modules/@types/node/events.d.ts:512

___

### off

▸ **off**(`eventName`, `listener`): [`Runtime`](types_server.Runtime.md)

Alias for `emitter.removeListener()`.

**`since`** v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.off

#### Defined in

node_modules/@types/node/events.d.ts:472

___

### on

▸ **on**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.on

#### Defined in

node_modules/@types/node/http.d.ts:276

▸ **on**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.on

#### Defined in

node_modules/@types/node/http.d.ts:277

▸ **on**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connection"`` |
| `listener` | (`socket`: `Socket`) => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.on

#### Defined in

node_modules/@types/node/http.d.ts:278

▸ **on**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.on

#### Defined in

node_modules/@types/node/http.d.ts:279

▸ **on**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"listening"`` |
| `listener` | () => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.on

#### Defined in

node_modules/@types/node/http.d.ts:280

▸ **on**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"checkContinue"`` |
| `listener` | `RequestListener` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.on

#### Defined in

node_modules/@types/node/http.d.ts:281

▸ **on**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"checkExpectation"`` |
| `listener` | `RequestListener` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.on

#### Defined in

node_modules/@types/node/http.d.ts:282

▸ **on**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"clientError"`` |
| `listener` | (`err`: `Error`, `socket`: `Duplex`) => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.on

#### Defined in

node_modules/@types/node/http.d.ts:283

▸ **on**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | (`req`: `IncomingMessage`, `socket`: `Duplex`, `head`: `Buffer`) => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.on

#### Defined in

node_modules/@types/node/http.d.ts:284

▸ **on**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"request"`` |
| `listener` | `RequestListener` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.on

#### Defined in

node_modules/@types/node/http.d.ts:285

▸ **on**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`req`: `IncomingMessage`, `socket`: `Duplex`, `head`: `Buffer`) => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.on

#### Defined in

node_modules/@types/node/http.d.ts:286

___

### once

▸ **once**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.once

#### Defined in

node_modules/@types/node/http.d.ts:287

▸ **once**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.once

#### Defined in

node_modules/@types/node/http.d.ts:288

▸ **once**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connection"`` |
| `listener` | (`socket`: `Socket`) => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.once

#### Defined in

node_modules/@types/node/http.d.ts:289

▸ **once**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.once

#### Defined in

node_modules/@types/node/http.d.ts:290

▸ **once**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"listening"`` |
| `listener` | () => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.once

#### Defined in

node_modules/@types/node/http.d.ts:291

▸ **once**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"checkContinue"`` |
| `listener` | `RequestListener` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.once

#### Defined in

node_modules/@types/node/http.d.ts:292

▸ **once**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"checkExpectation"`` |
| `listener` | `RequestListener` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.once

#### Defined in

node_modules/@types/node/http.d.ts:293

▸ **once**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"clientError"`` |
| `listener` | (`err`: `Error`, `socket`: `Duplex`) => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.once

#### Defined in

node_modules/@types/node/http.d.ts:294

▸ **once**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | (`req`: `IncomingMessage`, `socket`: `Duplex`, `head`: `Buffer`) => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.once

#### Defined in

node_modules/@types/node/http.d.ts:295

▸ **once**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"request"`` |
| `listener` | `RequestListener` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.once

#### Defined in

node_modules/@types/node/http.d.ts:296

▸ **once**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`req`: `IncomingMessage`, `socket`: `Duplex`, `head`: `Buffer`) => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.once

#### Defined in

node_modules/@types/node/http.d.ts:297

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:298

▸ **prependListener**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:299

▸ **prependListener**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connection"`` |
| `listener` | (`socket`: `Socket`) => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:300

▸ **prependListener**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:301

▸ **prependListener**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"listening"`` |
| `listener` | () => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:302

▸ **prependListener**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"checkContinue"`` |
| `listener` | `RequestListener` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:303

▸ **prependListener**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"checkExpectation"`` |
| `listener` | `RequestListener` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:304

▸ **prependListener**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"clientError"`` |
| `listener` | (`err`: `Error`, `socket`: `Duplex`) => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:305

▸ **prependListener**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | (`req`: `IncomingMessage`, `socket`: `Duplex`, `head`: `Buffer`) => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:306

▸ **prependListener**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"request"`` |
| `listener` | `RequestListener` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:307

▸ **prependListener**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`req`: `IncomingMessage`, `socket`: `Duplex`, `head`: `Buffer`) => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:308

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:309

▸ **prependOnceListener**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:310

▸ **prependOnceListener**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connection"`` |
| `listener` | (`socket`: `Socket`) => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:311

▸ **prependOnceListener**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:312

▸ **prependOnceListener**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"listening"`` |
| `listener` | () => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:313

▸ **prependOnceListener**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"checkContinue"`` |
| `listener` | `RequestListener` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:314

▸ **prependOnceListener**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"checkExpectation"`` |
| `listener` | `RequestListener` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:315

▸ **prependOnceListener**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"clientError"`` |
| `listener` | (`err`: `Error`, `socket`: `Duplex`) => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:316

▸ **prependOnceListener**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | (`req`: `IncomingMessage`, `socket`: `Duplex`, `head`: `Buffer`) => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:317

▸ **prependOnceListener**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"request"`` |
| `listener` | `RequestListener` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:318

▸ **prependOnceListener**(`event`, `listener`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`req`: `IncomingMessage`, `socket`: `Duplex`, `head`: `Buffer`) => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:319

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

**`since`** v9.4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

stlServer.rawListeners

#### Defined in

node_modules/@types/node/events.d.ts:542

___

### ref

▸ **ref**(): [`Runtime`](types_server.Runtime.md)

Opposite of `unref()`, calling `ref()` on a previously `unref`ed server will_not_ let the program exit if it's the only server left (the default behavior).
If the server is `ref`ed calling `ref()` again will have no effect.

**`since`** v0.9.1

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.ref

#### Defined in

node_modules/@types/node/net.d.ts:511

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Runtime`](types_server.Runtime.md)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.removeAllListeners

#### Defined in

node_modules/@types/node/events.d.ts:483

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`Runtime`](types_server.Runtime.md)

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and_before_ the last listener finishes execution will
not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.removeListener

#### Defined in

node_modules/@types/node/events.d.ts:467

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`Runtime`](types_server.Runtime.md)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.3.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:493

___

### setTimeout

▸ **setTimeout**(`msecs?`, `callback?`): [`Runtime`](types_server.Runtime.md)

Sets the timeout value for sockets, and emits a `'timeout'` event on
the Server object, passing the socket as an argument, if a timeout
occurs.

If there is a `'timeout'` event listener on the Server object, then it
will be called with the timed-out socket as an argument.

By default, the Server does not timeout sockets. However, if a callback
is assigned to the Server's `'timeout'` event, timeouts must be handled
explicitly.

**`since`** v0.9.12

#### Parameters

| Name | Type |
| :------ | :------ |
| `msecs?` | `number` |
| `callback?` | () => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.setTimeout

#### Defined in

node_modules/@types/node/http.d.ts:180

▸ **setTimeout**(`callback`): [`Runtime`](types_server.Runtime.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.setTimeout

#### Defined in

node_modules/@types/node/http.d.ts:181

___

### unref

▸ **unref**(): [`Runtime`](types_server.Runtime.md)

Calling `unref()` on a server will allow the program to exit if this is the only
active server in the event system. If the server is already `unref`ed calling`unref()` again will have no effect.

**`since`** v0.9.1

#### Returns

[`Runtime`](types_server.Runtime.md)

#### Inherited from

stlServer.unref

#### Defined in

node_modules/@types/node/net.d.ts:517
