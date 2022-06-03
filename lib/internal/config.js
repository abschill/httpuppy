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
exports.useConfig = void 0;
var process_1 = require("process");
/**
 * @internal useConfig
 * @description hook for applying default config settings against given user input
 * @param conf the submitted user input
 * @param diagnostics diagnostic log of the top level
 * @returns cleaned user config
 */
function useConfig(conf, diagnostics) {
    var config = __assign({}, conf);
    if (!config.port)
        config.port = 80; //default http port
    if (!config.hostname)
        config.hostname = '127.0.0.1'; // default lh
    if (!config.throwWarnings || (config.throwWarnings === null))
        config.throwWarnings = false;
    if (config.static) {
        config.static = __assign({ href: '/', path: '.' }, config.static // go last to just use href and path as defaults to override, config is the user input
        );
    }
    if (!conf.handler && !conf.static) {
        var msg = 'Request Handler no-op, nothing is handling your requests';
        //@ts-ignore
        (0, process_1.emitWarning)(msg, (new Error().stack.split("at ")[1]));
        diagnostics.push({ msg: msg });
    }
    return config;
}
exports.useConfig = useConfig;
