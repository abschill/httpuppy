"use strict";
exports.__esModule = true;
exports.useMiddleware = exports.useHeaders = void 0;
var etag_1 = require("./internal/etag");
/**
 *
 * @param options the writer options to apply the headers against
 * @param config the server config to apply against
 * @returns default list of http headers based on given config cache settings / content type of the request options
 */
function useHeaders(options, config) {
    var _a;
    var applyHeaders = [
        [
            'Content-Type',
            (_a = options.type) !== null && _a !== void 0 ? _a : 'text/plain'
        ]
    ];
    // set weak etag generation if applicable
    if (config.cache) {
        applyHeaders.push([
            'ETag',
            (0, etag_1.useEtag)(options.virtualFile.fileName, { weak: true })
        ]);
    }
    return applyHeaders;
}
exports.useHeaders = useHeaders;
function useMiddleware(config, req, res) {
    var _a;
    var match = (_a = config.middleware) === null || _a === void 0 ? void 0 : _a.filter(function (opt) { return opt.href === req.url; }).shift();
    match === null || match === void 0 ? void 0 : match.handler(req, res);
}
exports.useMiddleware = useMiddleware;
