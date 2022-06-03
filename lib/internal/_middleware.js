"use strict";
exports.__esModule = true;
exports._onReadable = exports._useCloseHandler = void 0;
function _useCloseHandler(msg, cb) {
    msg.on('close', function () {
        if (cb && typeof cb === 'function') {
            cb(msg);
        }
    });
}
exports._useCloseHandler = _useCloseHandler;
function _onReadable(req, cb) {
    req.on('readable', function (_) {
        if (cb && typeof cb === 'function') {
            cb();
        }
    });
}
exports._onReadable = _onReadable;
