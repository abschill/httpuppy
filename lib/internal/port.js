"use strict";
exports.__esModule = true;
exports.usePort = void 0;
/**
 * @internal
 */
var tcp_port_used_1 = require("tcp-port-used");
/**
 *
 * @param port the port to run on
 */
function usePort(port) {
    (0, tcp_port_used_1.check)(port !== null && port !== void 0 ? port : 80).then(function (taken) {
        if (taken) {
            console.error('port in use');
            process.exit(1);
        }
        return;
    })["catch"](function (err) { return console.error('Error on check:', err.message); });
}
exports.usePort = usePort;
