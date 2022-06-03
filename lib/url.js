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
exports.useStaticURLParser = void 0;
var mount_fs_1 = require("./internal/mount-fs");
/**
 * @function useStaticURLParser
 * @description hook for handling a response with a virtually mounted static filesystem browser
 * @param req the request to be replied to with the virtual FS response
 * @param config the configuration for the parent server
 * @returns the mounted file to serve based on the given request information
 */
function useStaticURLParser(req, config) {
    var _a;
    // mount the local fs (possibly move this into the initializer, but for now we want to just refresh the fs per request)
    var iFS = (0, mount_fs_1.useMountedFS)(config);
    // filter the mounted filesystem based on the request url
    var match = iFS.filesMounted.filter(function (f) { var _a; return f.hrefs.includes((_a = req.url) !== null && _a !== void 0 ? _a : ''); }).shift();
    if (match) {
        return __assign({ reqUrl: (_a = req.url) !== null && _a !== void 0 ? _a : '' }, match);
    }
    else {
        return {};
    }
}
exports.useStaticURLParser = useStaticURLParser;
