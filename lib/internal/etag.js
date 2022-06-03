"use strict";
exports.__esModule = true;
exports.isValidStats = exports.useStats = exports.useEtag = exports.useEntityTag = void 0;
var fs_1 = require("fs");
var crypto_1 = require("crypto");
function useEntityTag(entity) {
    if (entity.length === 0) {
        return '"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk"';
    }
    var hash = (0, crypto_1.createHash)('sha1').update(entity, 'utf8').digest('base64').substring(0, 27);
    var len = typeof entity === 'string' ? Buffer.byteLength(entity, 'utf8') : entity.length;
    return '"' + len.toString(16) + '-' + hash + '"';
}
exports.useEntityTag = useEntityTag;
function useEtag(entity, options) {
    if (!entity) {
        throw new Error('etag entity is null');
    }
    var isStats = isValidStats(entity);
    var weak = options && typeof options.weak === 'boolean' ? options.weak : isStats;
    if (!isStats && typeof entity !== 'string' && !Buffer.isBuffer(entity)) {
        throw new Error('etag arg must be a string, buffer or fs.Stats');
    }
    var tag = isStats ? useStats(entity) : useEntityTag(entity);
    return weak ? 'W/' + tag : tag;
}
exports.useEtag = useEtag;
function useStats(stats) {
    var mTime = stats.mtime.getTime().toString(16);
    var size = stats.size.toString(16);
    return '"' + size + '-' + mTime + '"';
}
exports.useStats = useStats;
function isValidStats(o) {
    if (typeof fs_1.Stats === 'function' && o instanceof fs_1.Stats) {
        return true;
    }
    return o && typeof o === 'object' &&
        'ctime' in o && toString.call(o.ctime) === '[object Date]' &&
        'mtime' in o && toString.call(o.mtime) === '[object Date]' &&
        'ino' in o && typeof o.ino === 'number' && 'size' in o && typeof o.size === 'number';
}
exports.isValidStats = isValidStats;
