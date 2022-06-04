"use strict";
exports.__esModule = true;
exports._useColorLogger = void 0;
var _constants_1 = require("./_constants");
var util_1 = require("util");
function _useColorLogger(color, val) {
    switch (color) {
        case 'yellow':
        case 'warn':
        case 'txt-yellow':
            return (0, util_1.format)('%s%s\x1b[0m', _constants_1.FgYellow, val);
        case 'blue':
        case 'txt-blue':
        case 'status':
        case 'log':
            return (0, util_1.format)('%s%s\x1b[0m', _constants_1.FgBlue, val);
        case 'red':
        case 'txt-red':
        case 'error':
        case 'err':
            return (0, util_1.format)('%s%s\x1b[0m', _constants_1.FgRed, val);
        case 'green':
        case 'txt-green':
        case 'success':
        case 'ok':
            return (0, util_1.format)('%s%s\x1b[0m', _constants_1.FgGreen, val);
        default:
            return (0, util_1.format)('%s%s\x1b[0m', _constants_1.Reset, val);
    }
}
exports._useColorLogger = _useColorLogger;
