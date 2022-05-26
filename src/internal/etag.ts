import { Stats } from 'fs';
import {
	createHash
} from 'crypto';

export function useEntityTag(entity) {
	if (entity.length === 0) {
		return '"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk"';
	}
	const hash = createHash('sha1').update(entity, 'utf8').digest('base64').substring(0,27);

	const len = typeof entity === 'string' ? Buffer.byteLength(entity, 'utf8') : entity.length;
	return '"' + len.toString(16) + '-' + hash + '"';
}

export function useEtag(entity, options) {
	if(!entity) {
		throw new Error('etag entity is null');
	}

	const isStats = isValidStats(entity);
	const weak = options && typeof options.weak === 'boolean' ? options.weak : isStats;

	if(!isStats && typeof entity !== 'string' && !Buffer.isBuffer(entity)) {
		throw new Error('etag arg must be a string, buffer or fs.Stats');
	}

	const tag = isStats ? useStats(entity) : useEntityTag(entity);
	return weak ? 'W/' + tag : tag;
}


export function useStats(stats) {
	const mTime = stats.mtime.getTime().toString(16);
	const size = stats.size.toString(16);
	return '"' + size + '-' + mTime + '"';

}

export function isValidStats(o) {
	if(typeof Stats === 'function' && o instanceof Stats) {
		return true;
	}
	return o && typeof o === 'object' &&
    'ctime' in o && toString.call(o.ctime) === '[object Date]' &&
    'mtime' in o && toString.call(o.mtime) === '[object Date]' &&
	'ino' in o && typeof o.ino === 'number' && 'size' in o && typeof o.size === 'number';
}
