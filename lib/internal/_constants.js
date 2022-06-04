"use strict";
exports.__esModule = true;
exports.BgWhite = exports.BgCyan = exports.BgMagenta = exports.BgBlue = exports.BgYellow = exports.BgGreen = exports.BgRed = exports.BgBlack = exports.FgWhite = exports.FgCyan = exports.FgMagenta = exports.FgBlue = exports.FgYellow = exports.FgGreen = exports.FgRed = exports.FgBlack = exports.Hidden = exports.Reverse = exports.Blink = exports.Underscore = exports.Dim = exports.Bright = exports.Reset = exports.bufferTypes = void 0;
/**
 * @internal
 */
exports.bufferTypes = [
    'png',
    'jpg',
    'jpeg',
    'apng',
    'webp',
    'gif',
    'avif',
    'mp4',
    'mp3',
    'wav',
    'webm',
    'bmp',
    'ico',
    'tiff'
];
exports.Reset = '\x1b[0m';
exports.Bright = '\x1b[1m';
exports.Dim = '\x1b[2m';
exports.Underscore = '\x1b[4m';
exports.Blink = '\x1b[5m';
exports.Reverse = '\x1b[7m';
exports.Hidden = '\x1b[8m';
exports.FgBlack = '\x1b[30m';
exports.FgRed = '\u001b[31m';
exports.FgGreen = '\x1b[32m';
exports.FgYellow = '\x1b[33m';
exports.FgBlue = '\x1b[34m';
exports.FgMagenta = '\x1b[35m';
exports.FgCyan = '\x1b[36m';
exports.FgWhite = '\x1b[37m';
exports.BgBlack = '\x1b[40m';
exports.BgRed = '\x1b[41m';
exports.BgGreen = '\x1b[42m';
exports.BgYellow = '\x1b[43m';
exports.BgBlue = '\x1b[44m';
exports.BgMagenta = '\x1b[45m';
exports.BgCyan = '\x1b[46m';
exports.BgWhite = '\x1b[47m';
