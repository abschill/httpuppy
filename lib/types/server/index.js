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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
exports.fromDefaultHTTPConfig = exports.defaultHTTPConfig = void 0;
var middleware_1 = require("./middleware");
exports.defaultHTTPConfig = {
    port: 80,
    coldInit: true,
    hostname: '127.0.0.1',
    throwWarnings: false,
    cache: middleware_1.defaultCacheSettings
};
function fromDefaultHTTPConfig(config) {
    return __assign(__assign({}, exports.defaultHTTPConfig), config);
}
exports.fromDefaultHTTPConfig = fromDefaultHTTPConfig;
__exportStar(require("./middleware"), exports);
__exportStar(require("./writer"), exports);
__exportStar(require("./logger"), exports);
