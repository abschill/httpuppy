/**
 * @internal
 * @description middleware hooks, such mime type header resolution / header setting
 */
import GracefulShutdown from 'http-graceful-shutdown';
import { Stats } from 'fs';
import { createHash } from 'crypto';
import { ENV_DEFAULT_CONTENT_TYPE, ENV_STATUS_404, HTTPWriterOptions } from '.';
import {
	HTTPServer,
	HTTPuppySleep,
	HTTPServerOptions,
	HTTPHeaders,
	HTTPuppyResponse,
} from 'httpuppy-types';
/**
 *
 * @param options the writer options to apply the headers against
 * @param config the server config to apply against
 * @returns default list of http headers based on given config cache settings / content type of the request options
 */
export function apply_headers(
	options: HTTPWriterOptions,
	config: HTTPServerOptions
): HTTPHeaders {
	const applyHeaders: HTTPHeaders = [
		{
			'Content-Type': options.type ?? ENV_DEFAULT_CONTENT_TYPE,
		},
	];

	// set weak etag generation if applicable
	if (config.cache) {
		applyHeaders.push({
			ETag: etag(options.virtualFile.fileName, { weak: true }),
		});
	}
	return applyHeaders;
}

export function apply_404(res: HTTPuppyResponse) {
	if (res.writable) {
		res.writeHead(404, ENV_STATUS_404);
		res.end();
		return;
	}
	return res.end();
}

/**
 *
 * @param s http server to shut down
 * @returns void promise to gracefully shut down
 */
export async function shutdown(s: HTTPServer): Promise<HTTPuppySleep> {
	try {
		if (s.onClose) s.onClose();
		s.removeAllListeners();
		s.close();
		return GracefulShutdown(s);
	} catch (e) {
		throw 'invalid shutdown, nothing submitted/already shut down';
	}
}

/**
 * @private
 * create entity tag with content hash
 */
export function __etag(entity: any) {
	if (entity.length === 0) {
		return '"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk"';
	}
	const hash = createHash('sha1')
		.update(entity, 'utf8')
		.digest('base64')
		.substring(0, 27);

	const len =
		typeof entity === 'string'
			? Buffer.byteLength(entity, 'utf8')
			: entity.length;
	return '"' + len.toString(16) + '-' + hash + '"';
}
/**
 * @private
 */
export function etag(entity: any, options: any) {
	if (!entity) {
		throw new Error('etag entity is null');
	}

	const isFileStats = _vstats(entity);
	const weak =
		options && typeof options.weak === 'boolean'
			? options.weak
			: isFileStats;

	if (
		!isFileStats &&
		typeof entity !== 'string' &&
		!Buffer.isBuffer(entity)
	) {
		throw new Error('etag arg must be a string, buffer or fs.Stats');
	}

	const tag = isFileStats ? file_stats(entity) : __etag(entity);
	return weak ? 'W/' + tag : tag;
}

/**
 * @private
 * create file system stamp for cache
 */
export function file_stats(stats: Stats): string {
	const mTime = stats.mtime.getTime().toString(16);
	const size = stats.size.toString(16);
	return '"' + size + '-' + mTime + '"';
}

/**
 *
 * @private
 * determine if an entry is a valid fs stat
 */
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
