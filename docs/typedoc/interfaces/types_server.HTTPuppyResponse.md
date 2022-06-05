[httpuppy - v0.2.10](../README.md) / [Modules](../modules.md) / [types/server](../modules/types_server.md) / HTTPuppyResponse

# Interface: HTTPuppyResponse

[types/server](../modules/types_server.md).HTTPuppyResponse

## Hierarchy

- `ServerResponse`

  ↳ **`HTTPuppyResponse`**

## Table of contents

### Properties

- [\_process](types_server.HTTPuppyResponse.md#_process)
- [chunkedEncoding](types_server.HTTPuppyResponse.md#chunkedencoding)
- [connection](types_server.HTTPuppyResponse.md#connection)
- [destroyed](types_server.HTTPuppyResponse.md#destroyed)
- [finished](types_server.HTTPuppyResponse.md#finished)
- [headersSent](types_server.HTTPuppyResponse.md#headerssent)
- [req](types_server.HTTPuppyResponse.md#req)
- [sendDate](types_server.HTTPuppyResponse.md#senddate)
- [shouldKeepAlive](types_server.HTTPuppyResponse.md#shouldkeepalive)
- [socket](types_server.HTTPuppyResponse.md#socket)
- [statusCode](types_server.HTTPuppyResponse.md#statuscode)
- [statusMessage](types_server.HTTPuppyResponse.md#statusmessage)
- [useChunkedEncodingByDefault](types_server.HTTPuppyResponse.md#usechunkedencodingbydefault)
- [writable](types_server.HTTPuppyResponse.md#writable)
- [writableCorked](types_server.HTTPuppyResponse.md#writablecorked)
- [writableEnded](types_server.HTTPuppyResponse.md#writableended)
- [writableFinished](types_server.HTTPuppyResponse.md#writablefinished)
- [writableHighWaterMark](types_server.HTTPuppyResponse.md#writablehighwatermark)
- [writableLength](types_server.HTTPuppyResponse.md#writablelength)
- [writableObjectMode](types_server.HTTPuppyResponse.md#writableobjectmode)

### Methods

- [\_construct](types_server.HTTPuppyResponse.md#_construct)
- [\_destroy](types_server.HTTPuppyResponse.md#_destroy)
- [\_final](types_server.HTTPuppyResponse.md#_final)
- [\_write](types_server.HTTPuppyResponse.md#_write)
- [\_writev](types_server.HTTPuppyResponse.md#_writev)
- [addListener](types_server.HTTPuppyResponse.md#addlistener)
- [addTrailers](types_server.HTTPuppyResponse.md#addtrailers)
- [assignSocket](types_server.HTTPuppyResponse.md#assignsocket)
- [cork](types_server.HTTPuppyResponse.md#cork)
- [destroy](types_server.HTTPuppyResponse.md#destroy)
- [detachSocket](types_server.HTTPuppyResponse.md#detachsocket)
- [emit](types_server.HTTPuppyResponse.md#emit)
- [end](types_server.HTTPuppyResponse.md#end)
- [eventNames](types_server.HTTPuppyResponse.md#eventnames)
- [flushHeaders](types_server.HTTPuppyResponse.md#flushheaders)
- [getHeader](types_server.HTTPuppyResponse.md#getheader)
- [getHeaderNames](types_server.HTTPuppyResponse.md#getheadernames)
- [getHeaders](types_server.HTTPuppyResponse.md#getheaders)
- [getMaxListeners](types_server.HTTPuppyResponse.md#getmaxlisteners)
- [hasHeader](types_server.HTTPuppyResponse.md#hasheader)
- [json](types_server.HTTPuppyResponse.md#json)
- [listenerCount](types_server.HTTPuppyResponse.md#listenercount)
- [listeners](types_server.HTTPuppyResponse.md#listeners)
- [off](types_server.HTTPuppyResponse.md#off)
- [on](types_server.HTTPuppyResponse.md#on)
- [once](types_server.HTTPuppyResponse.md#once)
- [pipe](types_server.HTTPuppyResponse.md#pipe)
- [prependListener](types_server.HTTPuppyResponse.md#prependlistener)
- [prependOnceListener](types_server.HTTPuppyResponse.md#prependoncelistener)
- [rawListeners](types_server.HTTPuppyResponse.md#rawlisteners)
- [removeAllListeners](types_server.HTTPuppyResponse.md#removealllisteners)
- [removeHeader](types_server.HTTPuppyResponse.md#removeheader)
- [removeListener](types_server.HTTPuppyResponse.md#removelistener)
- [send](types_server.HTTPuppyResponse.md#send)
- [setDefaultEncoding](types_server.HTTPuppyResponse.md#setdefaultencoding)
- [setHeader](types_server.HTTPuppyResponse.md#setheader)
- [setMaxListeners](types_server.HTTPuppyResponse.md#setmaxlisteners)
- [setTimeout](types_server.HTTPuppyResponse.md#settimeout)
- [uncork](types_server.HTTPuppyResponse.md#uncork)
- [write](types_server.HTTPuppyResponse.md#write)
- [writeContinue](types_server.HTTPuppyResponse.md#writecontinue)
- [writeHead](types_server.HTTPuppyResponse.md#writehead)
- [writeProcessing](types_server.HTTPuppyResponse.md#writeprocessing)

## Properties

### \_process

• **\_process**: [`Runtime`](types_server.Runtime.md)

#### Defined in

[src/types/server/index.ts:95](https://github.com/abschill/httpuppy/blob/392e7f9/src/types/server/index.ts#L95)

___

### chunkedEncoding

• **chunkedEncoding**: `boolean`

#### Inherited from

ServerResponse.chunkedEncoding

#### Defined in

node_modules/@types/node/http.d.ts:328

___

### connection

• `Readonly` **connection**: ``null`` \| `Socket`

Aliases of `outgoingMessage.socket`

**`since`** v0.3.0

**`deprecated`** Since v15.12.0,v14.17.1 - Use `socket` instead.

#### Inherited from

ServerResponse.connection

#### Defined in

node_modules/@types/node/http.d.ts:346

___

### destroyed

• **destroyed**: `boolean`

Is `true` after `writable.destroy()` has been called.

**`since`** v8.0.0

#### Inherited from

ServerResponse.destroyed

#### Defined in

node_modules/@types/node/stream.d.ts:543

___

### finished

• **finished**: `boolean`

**`deprecated`** Use `writableEnded` instead.

#### Inherited from

ServerResponse.finished

#### Defined in

node_modules/@types/node/http.d.ts:335

___

### headersSent

• `Readonly` **headersSent**: `boolean`

Read-only. `true` if the headers were sent, otherwise `false`.

**`since`** v0.9.3

#### Inherited from

ServerResponse.headersSent

#### Defined in

node_modules/@types/node/http.d.ts:340

___

### req

• `Readonly` **req**: `IncomingMessage`

#### Inherited from

ServerResponse.req

#### Defined in

node_modules/@types/node/http.d.ts:327

___

### sendDate

• **sendDate**: `boolean`

#### Inherited from

ServerResponse.sendDate

#### Defined in

node_modules/@types/node/http.d.ts:331

___

### shouldKeepAlive

• **shouldKeepAlive**: `boolean`

#### Inherited from

ServerResponse.shouldKeepAlive

#### Defined in

node_modules/@types/node/http.d.ts:329

___

### socket

• `Readonly` **socket**: ``null`` \| `Socket`

Reference to the underlying socket. Usually, users will not want to access
this property.

After calling `outgoingMessage.end()`, this property will be nulled.

**`since`** v0.3.0

#### Inherited from

ServerResponse.socket

#### Defined in

node_modules/@types/node/http.d.ts:354

___

### statusCode

• **statusCode**: `number`

When using implicit headers (not calling `response.writeHead()` explicitly),
this property controls the status code that will be sent to the client when
the headers get flushed.

```js
response.statusCode = 404;
```

After response header was sent to the client, this property indicates the
status code which was sent out.

**`since`** v0.4.0

#### Inherited from

ServerResponse.statusCode

#### Defined in

node_modules/@types/node/http.d.ts:478

___

### statusMessage

• **statusMessage**: `string`

When using implicit headers (not calling `response.writeHead()` explicitly),
this property controls the status message that will be sent to the client when
the headers get flushed. If this is left as `undefined` then the standard
message for the status code will be used.

```js
response.statusMessage = 'Not found';
```

After response header was sent to the client, this property indicates the
status message which was sent out.

**`since`** v0.11.8

#### Inherited from

ServerResponse.statusMessage

#### Defined in

node_modules/@types/node/http.d.ts:493

___

### useChunkedEncodingByDefault

• **useChunkedEncodingByDefault**: `boolean`

#### Inherited from

ServerResponse.useChunkedEncodingByDefault

#### Defined in

node_modules/@types/node/http.d.ts:330

___

### writable

• `Readonly` **writable**: `boolean`

Is `true` if it is safe to call `writable.write()`, which means
the stream has not been destroyed, errored or ended.

**`since`** v11.4.0

#### Inherited from

ServerResponse.writable

#### Defined in

node_modules/@types/node/stream.d.ts:504

___

### writableCorked

• `Readonly` **writableCorked**: `number`

Number of times `writable.uncork()` needs to be
called in order to fully uncork the stream.

**`since`** v13.2.0, v12.16.0

#### Inherited from

ServerResponse.writableCorked

#### Defined in

node_modules/@types/node/stream.d.ts:538

___

### writableEnded

• `Readonly` **writableEnded**: `boolean`

Is `true` after `writable.end()` has been called. This property
does not indicate whether the data has been flushed, for this use `writable.writableFinished` instead.

**`since`** v12.9.0

#### Inherited from

ServerResponse.writableEnded

#### Defined in

node_modules/@types/node/stream.d.ts:510

___

### writableFinished

• `Readonly` **writableFinished**: `boolean`

Is set to `true` immediately before the `'finish'` event is emitted.

**`since`** v12.6.0

#### Inherited from

ServerResponse.writableFinished

#### Defined in

node_modules/@types/node/stream.d.ts:515

___

### writableHighWaterMark

• `Readonly` **writableHighWaterMark**: `number`

Return the value of `highWaterMark` passed when creating this `Writable`.

**`since`** v9.3.0

#### Inherited from

ServerResponse.writableHighWaterMark

#### Defined in

node_modules/@types/node/stream.d.ts:520

___

### writableLength

• `Readonly` **writableLength**: `number`

This property contains the number of bytes (or objects) in the queue
ready to be written. The value provides introspection data regarding
the status of the `highWaterMark`.

**`since`** v9.4.0

#### Inherited from

ServerResponse.writableLength

#### Defined in

node_modules/@types/node/stream.d.ts:527

___

### writableObjectMode

• `Readonly` **writableObjectMode**: `boolean`

Getter for the property `objectMode` of a given `Writable` stream.

**`since`** v12.3.0

#### Inherited from

ServerResponse.writableObjectMode

#### Defined in

node_modules/@types/node/stream.d.ts:532

## Methods

### \_construct

▸ `Optional` **_construct**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`error?`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

ServerResponse.\_construct

#### Defined in

node_modules/@types/node/stream.d.ts:553

___

### \_destroy

▸ **_destroy**(`error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | ``null`` \| `Error` |
| `callback` | (`error?`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

ServerResponse.\_destroy

#### Defined in

node_modules/@types/node/stream.d.ts:554

___

### \_final

▸ **_final**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`error?`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

ServerResponse.\_final

#### Defined in

node_modules/@types/node/stream.d.ts:555

___

### \_write

▸ **_write**(`chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding` | `BufferEncoding` |
| `callback` | (`error?`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

ServerResponse.\_write

#### Defined in

node_modules/@types/node/stream.d.ts:545

___

### \_writev

▸ `Optional` **_writev**(`chunks`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunks` | { `chunk`: `any` ; `encoding`: `BufferEncoding`  }[] |
| `callback` | (`error?`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

ServerResponse.\_writev

#### Defined in

node_modules/@types/node/stream.d.ts:546

___

### addListener

▸ **addListener**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

Event emitter
The defined events on documents including:
1. close
2. drain
3. error
4. finish
5. pipe
6. unpipe

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:721

▸ **addListener**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:722

▸ **addListener**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:723

▸ **addListener**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:724

▸ **addListener**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:725

▸ **addListener**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:726

▸ **addListener**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:727

___

### addTrailers

▸ **addTrailers**(`headers`): `void`

Adds HTTP trailers (headers but at the end of the message) to the message.

Trailers are **only** be emitted if the message is chunked encoded. If not,
the trailer will be silently discarded.

HTTP requires the `Trailer` header to be sent to emit trailers,
with a list of header fields in its value, e.g.

```js
message.writeHead(200, { 'Content-Type': 'text/plain',
                         'Trailer': 'Content-MD5' });
message.write(fileData);
message.addTrailers({ 'Content-MD5': '7895bf4b8828b55ceaf47747b4bca667' });
message.end();
```

Attempting to set a header field name or value that contains invalid characters
will result in a `TypeError` being thrown.

**`since`** v0.3.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `headers` | `OutgoingHttpHeaders` \| readonly [`string`, `string`][] |

#### Returns

`void`

#### Inherited from

ServerResponse.addTrailers

#### Defined in

node_modules/@types/node/http.d.ts:444

___

### assignSocket

▸ **assignSocket**(`socket`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `socket` | `Socket` |

#### Returns

`void`

#### Inherited from

ServerResponse.assignSocket

#### Defined in

node_modules/@types/node/http.d.ts:495

___

### cork

▸ **cork**(): `void`

The `writable.cork()` method forces all written data to be buffered in memory.
The buffered data will be flushed when either the [uncork](types_server.HTTPuppyResponse.md#uncork) or [end](types_server.HTTPuppyResponse.md#end) methods are called.

The primary intent of `writable.cork()` is to accommodate a situation in which
several small chunks are written to the stream in rapid succession. Instead of
immediately forwarding them to the underlying destination, `writable.cork()`buffers all the chunks until `writable.uncork()` is called, which will pass them
all to `writable._writev()`, if present. This prevents a head-of-line blocking
situation where data is being buffered while waiting for the first small chunk
to be processed. However, use of `writable.cork()` without implementing`writable._writev()` may have an adverse effect on throughput.

See also: `writable.uncork()`, `writable._writev()`.

**`since`** v0.11.2

#### Returns

`void`

#### Inherited from

ServerResponse.cork

#### Defined in

node_modules/@types/node/stream.d.ts:659

___

### destroy

▸ **destroy**(`error?`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

Destroy the stream. Optionally emit an `'error'` event, and emit a `'close'`event (unless `emitClose` is set to `false`). After this call, the writable
stream has ended and subsequent calls to `write()` or `end()` will result in
an `ERR_STREAM_DESTROYED` error.
This is a destructive and immediate way to destroy a stream. Previous calls to`write()` may not have drained, and may trigger an `ERR_STREAM_DESTROYED` error.
Use `end()` instead of destroy if data should flush before close, or wait for
the `'drain'` event before destroying the stream.

Once `destroy()` has been called any further calls will be a no-op and no
further errors except from `_destroy()` may be emitted as `'error'`.

Implementors should not override this method,
but instead implement `writable._destroy()`.

**`since`** v8.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error?` | `Error` | Optional, an error to emit with `'error'` event. |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.destroy

#### Defined in

node_modules/@types/node/stream.d.ts:710

___

### detachSocket

▸ **detachSocket**(`socket`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `socket` | `Socket` |

#### Returns

`void`

#### Inherited from

ServerResponse.detachSocket

#### Defined in

node_modules/@types/node/http.d.ts:496

___

### emit

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |

#### Returns

`boolean`

#### Inherited from

ServerResponse.emit

#### Defined in

node_modules/@types/node/stream.d.ts:728

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |

#### Returns

`boolean`

#### Inherited from

ServerResponse.emit

#### Defined in

node_modules/@types/node/stream.d.ts:729

▸ **emit**(`event`, `err`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `err` | `Error` |

#### Returns

`boolean`

#### Inherited from

ServerResponse.emit

#### Defined in

node_modules/@types/node/stream.d.ts:730

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |

#### Returns

`boolean`

#### Inherited from

ServerResponse.emit

#### Defined in

node_modules/@types/node/stream.d.ts:731

▸ **emit**(`event`, `src`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `src` | `Readable` |

#### Returns

`boolean`

#### Inherited from

ServerResponse.emit

#### Defined in

node_modules/@types/node/stream.d.ts:732

▸ **emit**(`event`, `src`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `src` | `Readable` |

#### Returns

`boolean`

#### Inherited from

ServerResponse.emit

#### Defined in

node_modules/@types/node/stream.d.ts:733

▸ **emit**(`event`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

ServerResponse.emit

#### Defined in

node_modules/@types/node/stream.d.ts:734

___

### end

▸ **end**(`cb?`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

Calling the `writable.end()` method signals that no more data will be written
to the `Writable`. The optional `chunk` and `encoding` arguments allow one
final additional chunk of data to be written immediately before closing the
stream.

Calling the [write](types_server.HTTPuppyResponse.md#write) method after calling [end](types_server.HTTPuppyResponse.md#end) will raise an error.

```js
// Write 'hello, ' and then end with 'world!'.
const fs = require('fs');
const file = fs.createWriteStream('example.txt');
file.write('hello, ');
file.end('world!');
// Writing more now is not allowed!
```

**`since`** v0.9.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb?` | () => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.end

#### Defined in

node_modules/@types/node/stream.d.ts:642

▸ **end**(`chunk`, `cb?`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `cb?` | () => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.end

#### Defined in

node_modules/@types/node/stream.d.ts:643

▸ **end**(`chunk`, `encoding`, `cb?`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding` | `BufferEncoding` |
| `cb?` | () => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.end

#### Defined in

node_modules/@types/node/stream.d.ts:644

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

ServerResponse.eventNames

#### Defined in

node_modules/@types/node/events.d.ts:642

___

### flushHeaders

▸ **flushHeaders**(): `void`

Compulsorily flushes the message headers

For efficiency reason, Node.js normally buffers the message headers
until `outgoingMessage.end()` is called or the first chunk of message data
is written. It then tries to pack the headers and data into a single TCP
packet.

It is usually desired (it saves a TCP round-trip), but not when the first
data is not sent until possibly much later. `outgoingMessage.flushHeaders()`bypasses the optimization and kickstarts the request.

**`since`** v1.6.0

#### Returns

`void`

#### Inherited from

ServerResponse.flushHeaders

#### Defined in

node_modules/@types/node/http.d.ts:457

___

### getHeader

▸ **getHeader**(`name`): `undefined` \| `string` \| `number` \| `string`[]

Gets the value of HTTP header with the given name. If such a name doesn't
exist in message, it will be `undefined`.

**`since`** v0.4.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name of header |

#### Returns

`undefined` \| `string` \| `number` \| `string`[]

#### Inherited from

ServerResponse.getHeader

#### Defined in

node_modules/@types/node/http.d.ts:375

___

### getHeaderNames

▸ **getHeaderNames**(): `string`[]

Returns an array of names of headers of the outgoing outgoingMessage. All
names are lowercase.

**`since`** v8.0.0

#### Returns

`string`[]

#### Inherited from

ServerResponse.getHeaderNames

#### Defined in

node_modules/@types/node/http.d.ts:403

___

### getHeaders

▸ **getHeaders**(): `OutgoingHttpHeaders`

Returns a shallow copy of the current outgoing headers. Since a shallow
copy is used, array values may be mutated without additional calls to
various header-related HTTP module methods. The keys of the returned
object are the header names and the values are the respective header
values. All header names are lowercase.

The object returned by the `outgoingMessage.getHeaders()` method does
not prototypically inherit from the JavaScript Object. This means that
typical Object methods such as `obj.toString()`, `obj.hasOwnProperty()`,
and others are not defined and will not work.

```js
outgoingMessage.setHeader('Foo', 'bar');
outgoingMessage.setHeader('Set-Cookie', ['foo=bar', 'bar=baz']);

const headers = outgoingMessage.getHeaders();
// headers === { foo: 'bar', 'set-cookie': ['foo=bar', 'bar=baz'] }
```

**`since`** v8.0.0

#### Returns

`OutgoingHttpHeaders`

#### Inherited from

ServerResponse.getHeaders

#### Defined in

node_modules/@types/node/http.d.ts:397

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to {@link defaultMaxListeners}.

**`since`** v1.0.0

#### Returns

`number`

#### Inherited from

ServerResponse.getMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:499

___

### hasHeader

▸ **hasHeader**(`name`): `boolean`

Returns `true` if the header identified by `name` is currently set in the
outgoing headers. The header name is case-insensitive.

```js
const hasContentType = outgoingMessage.hasHeader('content-type');
```

**`since`** v8.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Inherited from

ServerResponse.hasHeader

#### Defined in

node_modules/@types/node/http.d.ts:413

___

### json

▸ **json**(`msg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `any` |

#### Returns

`void`

#### Defined in

[src/types/server/index.ts:97](https://github.com/abschill/httpuppy/blob/392e7f9/src/types/server/index.ts#L97)

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

ServerResponse.listenerCount

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

ServerResponse.listeners

#### Defined in

node_modules/@types/node/events.d.ts:512

___

### off

▸ **off**(`eventName`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

Alias for `emitter.removeListener()`.

**`since`** v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.off

#### Defined in

node_modules/@types/node/events.d.ts:472

___

### on

▸ **on**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.on

#### Defined in

node_modules/@types/node/stream.d.ts:735

▸ **on**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.on

#### Defined in

node_modules/@types/node/stream.d.ts:736

▸ **on**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.on

#### Defined in

node_modules/@types/node/stream.d.ts:737

▸ **on**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.on

#### Defined in

node_modules/@types/node/stream.d.ts:738

▸ **on**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.on

#### Defined in

node_modules/@types/node/stream.d.ts:739

▸ **on**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.on

#### Defined in

node_modules/@types/node/stream.d.ts:740

▸ **on**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.on

#### Defined in

node_modules/@types/node/stream.d.ts:741

___

### once

▸ **once**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.once

#### Defined in

node_modules/@types/node/stream.d.ts:742

▸ **once**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.once

#### Defined in

node_modules/@types/node/stream.d.ts:743

▸ **once**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.once

#### Defined in

node_modules/@types/node/stream.d.ts:744

▸ **once**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.once

#### Defined in

node_modules/@types/node/stream.d.ts:745

▸ **once**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.once

#### Defined in

node_modules/@types/node/stream.d.ts:746

▸ **once**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.once

#### Defined in

node_modules/@types/node/stream.d.ts:747

▸ **once**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.once

#### Defined in

node_modules/@types/node/stream.d.ts:748

___

### pipe

▸ **pipe**<`T`\>(`destination`, `options?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `WritableStream`<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | `T` |
| `options?` | `Object` |
| `options.end?` | `boolean` |

#### Returns

`T`

#### Inherited from

ServerResponse.pipe

#### Defined in

node_modules/@types/node/stream.d.ts:24

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:749

▸ **prependListener**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:750

▸ **prependListener**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:751

▸ **prependListener**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:752

▸ **prependListener**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:753

▸ **prependListener**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:754

▸ **prependListener**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:755

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:756

▸ **prependOnceListener**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:757

▸ **prependOnceListener**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:758

▸ **prependOnceListener**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:759

▸ **prependOnceListener**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:760

▸ **prependOnceListener**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:761

▸ **prependOnceListener**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:762

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

ServerResponse.rawListeners

#### Defined in

node_modules/@types/node/events.d.ts:542

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

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

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.removeAllListeners

#### Defined in

node_modules/@types/node/events.d.ts:483

___

### removeHeader

▸ **removeHeader**(`name`): `void`

Removes a header that is queued for implicit sending.

```js
outgoingMessage.removeHeader('Content-Encoding');
```

**`since`** v0.4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Inherited from

ServerResponse.removeHeader

#### Defined in

node_modules/@types/node/http.d.ts:422

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:763

▸ **removeListener**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:764

▸ **removeListener**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:765

▸ **removeListener**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:766

▸ **removeListener**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:767

▸ **removeListener**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:768

▸ **removeListener**(`event`, `listener`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:769

___

### send

▸ **send**(`msg`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `any` |

#### Returns

`void`

#### Defined in

[src/types/server/index.ts:96](https://github.com/abschill/httpuppy/blob/392e7f9/src/types/server/index.ts#L96)

___

### setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

The `writable.setDefaultEncoding()` method sets the default `encoding` for a `Writable` stream.

**`since`** v0.11.15

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoding` | `BufferEncoding` | The new default encoding |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.setDefaultEncoding

#### Defined in

node_modules/@types/node/stream.d.ts:619

___

### setHeader

▸ **setHeader**(`name`, `value`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

Sets a single header value for the header object.

**`since`** v0.4.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Header name |
| `value` | `string` \| `number` \| readonly `string`[] | Header value |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.setHeader

#### Defined in

node_modules/@types/node/http.d.ts:368

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

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

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:493

___

### setTimeout

▸ **setTimeout**(`msecs`, `callback?`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

Once a socket is associated with the message and is connected,`socket.setTimeout()` will be called with `msecs` as the first parameter.

**`since`** v0.9.12

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msecs` | `number` | - |
| `callback?` | () => `void` | Optional function to be called when a timeout occurs. Same as binding to the `timeout` event. |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.setTimeout

#### Defined in

node_modules/@types/node/http.d.ts:361

___

### uncork

▸ **uncork**(): `void`

The `writable.uncork()` method flushes all data buffered since [cork](types_server.HTTPuppyResponse.md#cork) was called.

When using `writable.cork()` and `writable.uncork()` to manage the buffering
of writes to a stream, it is recommended that calls to `writable.uncork()` be
deferred using `process.nextTick()`. Doing so allows batching of all`writable.write()` calls that occur within a given Node.js event loop phase.

```js
stream.cork();
stream.write('some ');
stream.write('data ');
process.nextTick(() => stream.uncork());
```

If the `writable.cork()` method is called multiple times on a stream, the
same number of calls to `writable.uncork()` must be called to flush the buffered
data.

```js
stream.cork();
stream.write('some ');
stream.cork();
stream.write('data ');
process.nextTick(() => {
  stream.uncork();
  // The data will not be flushed until uncork() is called a second time.
  stream.uncork();
});
```

See also: `writable.cork()`.

**`since`** v0.11.2

#### Returns

`void`

#### Inherited from

ServerResponse.uncork

#### Defined in

node_modules/@types/node/stream.d.ts:693

___

### write

▸ **write**(`chunk`, `callback?`): `boolean`

The `writable.write()` method writes some data to the stream, and calls the
supplied `callback` once the data has been fully handled. If an error
occurs, the `callback` will be called with the error as its
first argument. The `callback` is called asynchronously and before `'error'` is
emitted.

The return value is `true` if the internal buffer is less than the`highWaterMark` configured when the stream was created after admitting `chunk`.
If `false` is returned, further attempts to write data to the stream should
stop until the `'drain'` event is emitted.

While a stream is not draining, calls to `write()` will buffer `chunk`, and
return false. Once all currently buffered chunks are drained (accepted for
delivery by the operating system), the `'drain'` event will be emitted.
It is recommended that once `write()` returns false, no more chunks be written
until the `'drain'` event is emitted. While calling `write()` on a stream that
is not draining is allowed, Node.js will buffer all written chunks until
maximum memory usage occurs, at which point it will abort unconditionally.
Even before it aborts, high memory usage will cause poor garbage collector
performance and high RSS (which is not typically released back to the system,
even after the memory is no longer required). Since TCP sockets may never
drain if the remote peer does not read the data, writing a socket that is
not draining may lead to a remotely exploitable vulnerability.

Writing data while the stream is not draining is particularly
problematic for a `Transform`, because the `Transform` streams are paused
by default until they are piped or a `'data'` or `'readable'` event handler
is added.

If the data to be written can be generated or fetched on demand, it is
recommended to encapsulate the logic into a `Readable` and use [pipe](types_server.HTTPuppyResponse.md#pipe). However, if calling `write()` is preferred, it is
possible to respect backpressure and avoid memory issues using the `'drain'` event:

```js
function write(data, cb) {
  if (!stream.write(data)) {
    stream.once('drain', cb);
  } else {
    process.nextTick(cb);
  }
}

// Wait for cb to be called before doing any other write.
write('hello', () => {
  console.log('Write completed, do more writes now.');
});
```

A `Writable` stream in object mode will always ignore the `encoding` argument.

**`since`** v0.9.4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chunk` | `any` | Optional data to write. For streams not operating in object mode, `chunk` must be a string, `Buffer` or `Uint8Array`. For object mode streams, `chunk` may be any JavaScript value other than `null`. |
| `callback?` | (`error`: `undefined` \| ``null`` \| `Error`) => `void` | Callback for when this chunk of data is flushed. |

#### Returns

`boolean`

`false` if the stream wishes for the calling code to wait for the `'drain'` event to be emitted before continuing to write additional data; otherwise `true`.

#### Inherited from

ServerResponse.write

#### Defined in

node_modules/@types/node/stream.d.ts:612

▸ **write**(`chunk`, `encoding`, `callback?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding` | `BufferEncoding` |
| `callback?` | (`error`: `undefined` \| ``null`` \| `Error`) => `void` |

#### Returns

`boolean`

#### Inherited from

ServerResponse.write

#### Defined in

node_modules/@types/node/stream.d.ts:613

___

### writeContinue

▸ **writeContinue**(`callback?`): `void`

Sends a HTTP/1.1 100 Continue message to the client, indicating that
the request body should be sent. See the `'checkContinue'` event on`Server`.

**`since`** v0.3.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | () => `void` |

#### Returns

`void`

#### Inherited from

ServerResponse.writeContinue

#### Defined in

node_modules/@types/node/http.d.ts:502

___

### writeHead

▸ **writeHead**(`statusCode`, `statusMessage?`, `headers?`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

Sends a response header to the request. The status code is a 3-digit HTTP
status code, like `404`. The last argument, `headers`, are the response headers.
Optionally one can give a human-readable `statusMessage` as the second
argument.

`headers` may be an `Array` where the keys and values are in the same list.
It is _not_ a list of tuples. So, the even-numbered offsets are key values,
and the odd-numbered offsets are the associated values. The array is in the same
format as `request.rawHeaders`.

Returns a reference to the `ServerResponse`, so that calls can be chained.

```js
const body = 'hello world';
response
  .writeHead(200, {
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/plain'
  })
  .end(body);
```

This method must only be called once on a message and it must
be called before `response.end()` is called.

If `response.write()` or `response.end()` are called before calling
this, the implicit/mutable headers will be calculated and call this function.

When headers have been set with `response.setHeader()`, they will be merged
with any headers passed to `response.writeHead()`, with the headers passed
to `response.writeHead()` given precedence.

If this method is called and `response.setHeader()` has not been called,
it will directly write the supplied header values onto the network channel
without caching internally, and the `response.getHeader()` on the header
will not yield the expected result. If progressive population of headers is
desired with potential future retrieval and modification, use `response.setHeader()` instead.

```js
// Returns content-type = text/plain
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('X-Foo', 'bar');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('ok');
});
```

`Content-Length` is given in bytes, not characters. Use `Buffer.byteLength()` to determine the length of the body in bytes. Node.js
does not check whether `Content-Length` and the length of the body which has
been transmitted are equal or not.

Attempting to set a header field name or value that contains invalid characters
will result in a `TypeError` being thrown.

**`since`** v0.1.30

#### Parameters

| Name | Type |
| :------ | :------ |
| `statusCode` | `number` |
| `statusMessage?` | `string` |
| `headers?` | `OutgoingHttpHeaders` \| `OutgoingHttpHeader`[] |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.writeHead

#### Defined in

node_modules/@types/node/http.d.ts:560

▸ **writeHead**(`statusCode`, `headers?`): [`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `statusCode` | `number` |
| `headers?` | `OutgoingHttpHeaders` \| `OutgoingHttpHeader`[] |

#### Returns

[`HTTPuppyResponse`](types_server.HTTPuppyResponse.md)

#### Inherited from

ServerResponse.writeHead

#### Defined in

node_modules/@types/node/http.d.ts:561

___

### writeProcessing

▸ **writeProcessing**(): `void`

Sends a HTTP/1.1 102 Processing message to the client, indicating that
the request body should be sent.

**`since`** v10.0.0

#### Returns

`void`

#### Inherited from

ServerResponse.writeProcessing

#### Defined in

node_modules/@types/node/http.d.ts:567
