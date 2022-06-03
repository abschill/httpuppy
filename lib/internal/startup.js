"use strict";
exports.__esModule = true;
exports._useServer = void 0;
/**
 * @internal _useServer
 * @description an internal startup process for the `useServer` hook
 * @param config config from user for runtime
 * @param server server generated from node standard http library
 * @param diagnostics diagnostic list from the prestartup process
 * @returns the http server object
 */
function _useServer(config, server, diagnostics) {
    if (config.onMount)
        server.once('listening', config.onMount);
    if (config.throwWarnings && diagnostics.length > 0) {
        throw new Error("\n\t\tServer couldnt initialize without issues, if you'd like to suppress these errors, set the config option \"throwWarnings\": false\n\t\tDiagnostic List:\n\n\t\t".concat(JSON.stringify(diagnostics), "\n\t\t"));
    }
    var ss = server;
    ss.diagnostics = diagnostics;
    ss.onClose = config.onClose;
    return ss;
}
exports._useServer = _useServer;
