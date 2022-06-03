"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mime_types_1 = __importDefault(require("mime-types"));
/**
 * @internal useContentType
 * @description hook for determining content type of a virtual fpath on the system
 * @param fpath the file path of the type to resolve
 * @returns the tuple representing the content type header for the static file
 */
function useContentType(fpath) {
    if (fpath === '') {
        return [
            'Content-Type',
            'text/plain'
        ];
    }
    return [
        'Content-Type',
        mime_types_1["default"].lookup(fpath)
    ];
}
exports["default"] = useContentType;
