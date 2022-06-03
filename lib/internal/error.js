"use strict";
exports.__esModule = true;
exports.use404 = void 0;
/**
 *
 * @param res internal response to be written to
 * @returns nothing
 */
function use404(res) {
    res.writeHead(404, '404: page not found');
    res.end('404: page not found');
    return;
}
exports.use404 = use404;
