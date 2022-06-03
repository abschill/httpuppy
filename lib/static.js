"use strict";
exports.__esModule = true;
exports.useStaticMount = void 0;
var url_1 = require("./url");
var middleware_1 = require("./middleware");
var process_1 = require("process");
var error_1 = require("./internal/error");
var writer_1 = require("./internal/writer");
/**
 *
 * @param config Configuration for runtime that needs static mount
 * @param server Runtime to apply static handler mount point & error diagnostic list
 */
function useStaticMount(config, server) {
    // mount configured FS path to the request handler
    server.on('request', function (req, res) {
        try {
            if (config.middleware && config.middleware.length > 0)
                (0, middleware_1.useMiddleware)(config, req, res);
            var pathData = (0, url_1.useStaticURLParser)(req, config);
            if (req.method === 'GET') {
                if ((0, writer_1.isBufferType)(req.url)) {
                    return (0, writer_1.useVirtualStreamReader)(pathData, res);
                }
                else {
                    return (0, writer_1.useWriter)(res, config, {
                        status: 200,
                        statusText: 'ok',
                        type: pathData.contentType,
                        virtualFile: pathData
                    });
                }
            }
        }
        catch (e) {
            (0, process_1.emitWarning)(JSON.stringify(e));
            return (0, error_1.use404)(res);
        }
    });
    server.on('error', function (e) {
        return server.diagnostics.push({
            msg: e.message
        });
    });
}
exports.useStaticMount = useStaticMount;
