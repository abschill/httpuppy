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
var log = console.log, warn = console.warn, error = console.error;
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
            log("".concat(prefix, ": ").concat(req.method, " ").concat(req.url));
        });
        server.on('error', function (err) {
            error("".concat(prefix, ": ").concat(err.message, "\n\n").concat(err.stack));
        });
        server.on('clientError', function (err, socket) {
            warn("".concat(prefix, ": ").concat(err.name));
            socket.end('HTTP/1.1 400 Bad Request');
        });
    }
}
exports.useLogger = useLogger;
