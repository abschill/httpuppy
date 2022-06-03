"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.useWriter = exports.useVirtualStreamReader = exports.isBufferType = void 0;
var fs_1 = require("fs");
var content_type_1 = __importDefault(require("./content-type"));
var middleware_1 = require("../middleware");
var _constants_1 = require("./_constants");
/**
 * @internal isBufferType
 * @description check whether or not the file needs to be written into a stream as a buffer, or utf-8 content
 * @param file the file read by the VFS that is undergoing buffer check
 * @returns boolean whether or not it needs to be written as a buffer or can be served directly
 */
function isBufferType(file) {
    return _constants_1.bufferTypes.filter(function (el) { return file.includes(el); }).length > 0;
}
exports.isBufferType = isBufferType;
/**
 * @internal useVirtualStreamReader
 * @description apply virtual stream reader to the given request, and close stream on exit
 * @param pathData the resulting mount file from useStaticUrlParser call in useStaticMount
 * @param res the current response being handled by the server
 * @returns
 */
function useVirtualStreamReader(pathData, res) {
    if (!res.writable) {
        console.warn('warning: write attempt on an ended stream in useStreamReader');
        return;
    }
    if (pathData && pathData.symLink) {
        // create read stream for virtual file to read
        var stream = (0, fs_1.createReadStream)(pathData.symLink);
        stream.on('data', function (chunk) {
            var _a;
            // type the symlink of the streamable file, write into the response stream
            res.writeHead(200, 'ok', (0, content_type_1["default"])((_a = pathData.symLink) !== null && _a !== void 0 ? _a : ''));
            res.write(chunk);
        });
        // end response when data is done streaming from vfile
        stream.on('end', function (_) { return res.end(); });
    }
    return;
}
exports.useVirtualStreamReader = useVirtualStreamReader;
/**
 *
 * @param res the response to write to
 * @param config the config to base the write on
 * @param options the writer instance options
 * @returns
 */
function useWriter(res, config, options) {
    if (!res.writable) {
        console.warn('warning: write attempt on an ended stream in useWriter');
        return;
    }
    if (options.virtualFile.symLink) {
        res.writeHead(options.status, options.statusText, (0, middleware_1.useHeaders)(options, config));
        return useVirtualStreamReader(options.virtualFile, res);
    }
}
exports.useWriter = useWriter;
