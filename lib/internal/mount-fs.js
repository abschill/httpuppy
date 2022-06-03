"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.useMountedFS = void 0;
/**
 * @internal mount-fs
 * @description virtual file system mount hooks
 */
var path_1 = require("path");
var fs_1 = require("fs");
var content_type_1 = __importDefault(require("./content-type"));
/**
 * @function useCleanPaths
 * @description list possible hrefs to be used for given vpath
 * @param file the path of the file to check any aliases for
 * @param _static the static config options of the calling process
 * @returns list of strings defining possible hrefs
 */
function useCleanPaths(file, _static) {
    var _a, _b;
    var pathOptions = [
        "".concat((_a = _static.href) !== null && _a !== void 0 ? _a : '').concat(file)
    ];
    if (file === 'index.html') {
        pathOptions.push("".concat((_b = _static.href) !== null && _b !== void 0 ? _b : ''));
    }
    return pathOptions;
}
/**
 *
 * @param config config options for the runtime that wants to mount an FS
 * @returns
 */
function useMountedFS(config) {
    var _a, _b;
    // mountedPath is the path to retrieve filesMounted from
    var mountedPath = (0, path_1.join)((_b = (_a = config.static) === null || _a === void 0 ? void 0 : _a.path) !== null && _b !== void 0 ? _b : './');
    // filesMounted is the accessible file tree that can be used against the upcoming handlers
    var filesMounted = (0, fs_1.readdirSync)(mountedPath).map(function (file) {
        var symLink = (0, path_1.resolve)(mountedPath, file);
        return {
            fileName: file,
            symLink: symLink,
            contentType: (0, content_type_1["default"])(symLink),
            content: (0, fs_1.readFileSync)(symLink),
            hrefs: useCleanPaths(file, config.static)
        };
    });
    return { mountedPath: mountedPath, filesMounted: filesMounted };
}
exports.useMountedFS = useMountedFS;
