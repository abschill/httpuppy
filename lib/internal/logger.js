"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.useLogger = exports.useLogConfig = void 0;
var server_1 = require("../types/server");
var log = console.log;
var _color_1 = require("./_color");
function useLogConfig(config) {
    var def = (0, server_1.useDefaultLogConfig)();
    if (!config) {
        return def;
    }
    return __assign(__assign({}, def), config);
}
exports.useLogConfig = useLogConfig;
function useLogger(config, server) {
    var prefix = config.logPrefix || 'httpuppy_log';
    if (config.logLevel === 'base') {
        server.on('request', function (req) {
            log("".concat(prefix, ":"), (0, _color_1._useColorLogger)('status', req.method), req.url);
        });
        server.on('error', function (err) {
            log("".concat(prefix, ":"), (0, _color_1._useColorLogger)('error', "".concat(err.message, "\n\n").concat(err.stack)));
        });
        server.on('clientError', function (err, socket) {
            log("".concat(prefix, ":"), (0, _color_1._useColorLogger)('warn', "".concat(err.name)));
            socket.end('HTTP/1.1 400 Bad Request');
        });
    }
}
exports.useLogger = useLogger;
