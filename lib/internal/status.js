"use strict";
exports.__esModule = true;
exports.useStatus = void 0;
/**
 *
 * @param res internal response to be written to
 * @returns nothing
 */
function useStatus(res, status, msg) {
    res.writeHead(status, msg);
}
exports.useStatus = useStatus;
