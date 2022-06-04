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
exports.useAnyConfig = exports.useProcessArgs = void 0;
/**
 * @internal
 */
var path_1 = require("path");
function useProcessArgs() {
    try {
        var argv = process.argv;
        if (argv.length > 2) {
            return Object.fromEntries(argv.slice(2).map(function (a) {
                if (a.includes('--')) {
                    return a.split('--').pop().split('=');
                }
                else if (a.includes('-')) {
                    return a.split('-').pop().split('=');
                }
                else {
                    return;
                }
            }));
        }
    }
    catch (e) {
        return null;
    }
}
exports.useProcessArgs = useProcessArgs;
function useForceCheck(p) {
    try {
        return require((0, path_1.resolve)(process.cwd(), p));
    }
    catch (e) {
        //todo - handle?
        return null;
    }
}
function useAnyConfig() {
    var config = {};
    var args = useProcessArgs();
    if (args) {
        config = __assign({}, args);
    }
    var defaultOption = useForceCheck('httpuppy.json');
    if (defaultOption) {
        config = __assign(__assign({}, config), defaultOption);
    }
    console.log(config);
}
exports.useAnyConfig = useAnyConfig;
