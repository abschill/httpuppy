/**
 * @internal
 * @remarks middleware hooks, such mime type header resolution / header setting
 */
import GracefulShutdown from 'http-graceful-shutdown';
import { Stats } from 'fs';
import { createHash } from 'crypto';
import {
	HTTPServer,
	HTTPServerOptions,
	HTTPHeaders,
	HTTPuppyResponse,
	HTTPuppySleep,
	ENV_DEFAULT_CONTENT_TYPE,
	ENV_STATUS_404,
	HTTPWriterOptions
} from '@httpuppy/common';
/**
 *
 * @param options - the writer options to apply the headers against
 * @param config - the server config to apply against
 * @returns default list of http headers based on given config cache settings / content type of the request options
 */
export function $applyHeaders(
	options: HTTPWriterOptions,
	config: HTTPServerOptions
): HTTPHeaders {
	const applyHeaders: HTTPHeaders = [
		{
			'Content-Type': options.type ?? ENV_DEFAULT_CONTENT_TYPE
		}
	];

	// set weak etag generation if applicable
	if (config.cache) {
		applyHeaders.push({
			ETag: etag(options.virtualFile.fileName, { weak: true })
		});
	}
	return applyHeaders;
}

export function $apply404(res: HTTPuppyResponse) {
	if (res.writable) {
		res.writeHead(404, ENV_STATUS_404);
		res.end();
		return;
	}
	res.end();
}

/**
 *
 * @param s - http server to shut down
 * @returns void promise to gracefully shut down
 */
export function $cleanShutdown(s: HTTPServer): HTTPuppySleep {
	try {
		if (s.onClose) s.onClose();
		s.removeAllListeners();
		s.close();
		// eslint-disable-next-line new-cap
		return GracefulShutdown(s);
	} catch (e) {
		throw new Error('invalid shutdown, nothing submitted/already shut down');
	}
}

/**
 * @internal
 * create entity tag with content hash
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function __etag(entity: any) {
	if (entity.length === 0) {
		return '"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk"';
	}
	const hash = createHash('sha1')
		.update(entity, 'utf8')
		.digest('base64')
		.substring(0, 27);

	const len =
		typeof entity === 'string' ? Buffer.byteLength(entity, 'utf8') : entity.length;
	return '"' + len.toString(16) + '-' + hash + '"';
}
/**
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function etag(entity: any, options: any) {
	if (!entity) {
		throw new Error('etag entity is null');
	}

	const isFileStats = _vstats(entity);
	const weak = options && typeof options.weak === 'boolean' ? options.weak : isFileStats;

	if (!isFileStats && typeof entity !== 'string' && !Buffer.isBuffer(entity)) {
		throw new Error('etag arg must be a string, buffer or fs.Stats');
	}

	const tag = isFileStats ? file_stats(entity) : __etag(entity);
	return weak ? 'W/' + tag : tag;
}

/**
 * @internal
 * create file system stamp for cache
 */
export function file_stats(stats: Stats): string {
	const mTime = stats.mtime.getTime().toString(16);
	const size = stats.size.toString(16);
	return '"' + size + '-' + mTime + '"';
}

/**
 *
 * @internal
 * determine if an entry is a valid fs stat
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function _vstats(o: any): boolean {
	if (typeof Stats === 'function' && o instanceof Stats) {
		return true;
	}
	return (
		o &&
		typeof o === 'object' &&
		'ctime' in o &&
		toString.call(o.ctime) === '[object Date]' &&
		'mtime' in o &&
		toString.call(o.mtime) === '[object Date]' &&
		'ino' in o &&
		typeof o.ino === 'number' &&
		'size' in o &&
		typeof o.size === 'number'
	);
}
