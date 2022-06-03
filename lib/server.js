"use strict";
exports.__esModule = true;
exports.useServer = void 0;
/**
 * @module server
 * @description core server module
 */
var http_1 = require("http");
var https_1 = require("https");
var config_1 = require("./internal/config");
var startup_1 = require("./internal/startup");
var port_1 = require("./internal/port");
var _shutdown_1 = require("./internal/_shutdown");
var static_1 = require("./static");
var logger_1 = require("./internal/logger");
/**
 * @function useServer
 * @example
 * ```javascript
* const app = useServer({
* 	static: {
* 		path: './examples/files'
* 	}
* });
* ```
 * @param conf configuration options
 * @returns httpuppy server
 */
function useServer(conf // user config for server
) {
    var _a;
    (0, port_1.usePort)((_a = conf.port) !== null && _a !== void 0 ? _a : 80);
    var diagnostics = [];
    // useAnyConfig();
    var config = (0, config_1.useConfig)(conf, diagnostics);
    var _server;
    if (!conf.secure) {
        _server = (0, http_1.createServer)(config.handler);
    }
    else {
        _server = (0, https_1.createServer)(conf.secureContext, config.handler);
    }
    var server = (0, startup_1._useServer)(config, _server, diagnostics);
    if (conf.log && conf.log.logLevel !== 'silent')
        (0, logger_1.useLogger)(conf.log, server);
    if (config.static)
        (0, static_1.useStaticMount)(config, server);
    if (!config.coldInit) {
        server.listen(config.port, config.hostname);
    }
    server._shutdown = function () { return (0, _shutdown_1.shutdown)(server); };
    return server;
}
exports.useServer = useServer;
