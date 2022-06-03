"use strict";
exports.__esModule = true;
exports.useRouter = void 0;
function _useBetterSignatures(res) {
    res.send = res.end;
    res.json = function (content) {
        if (!res.writable) {
            res.writeHead(500, 'cannot write to json stream');
            res.end();
        }
        // content type is json if they are calling this method so overwrite if preset
        if (res.hasHeader('Content-Type'))
            res.removeHeader('Content-Type');
        res.writeHead(200, ['Content-Type', 'application/json']);
        res.end(Buffer.from(JSON.stringify(content)));
    };
}
function _useHTTPHandle(name, _url, server, cb) {
    server.on('request', function (req, res) {
        if (req.method === name && req.url === _url) {
            _useBetterSignatures(res);
            return cb(req, res);
        }
        return;
    });
}
/**
 * @function useRouter
 * @example
 * ```javascript
* const app = useServer({...});
* const router = useRouter(app);
* router.get('/test', (req, res) => res.end('hello'));
* ```
 * @param attachTo
 * @returns
 */
function useRouter(server, // server to attach the router to as a handler
routerOptions // placeholder: planned feature
) {
    // router callback choices
    // todo: setup glob handler functionality if config option is set
    function get(url, cb) {
        _useHTTPHandle('GET', url, server, cb);
    }
    function post(url, cb) {
        _useHTTPHandle('POST', url, server, cb);
    }
    function head(url, cb) {
        _useHTTPHandle('HEAD', url, server, cb);
    }
    function put(url, cb) {
        _useHTTPHandle('PUT', url, server, cb);
    }
    function patch(url, cb) {
        _useHTTPHandle('PATCH', url, server, cb);
    }
    function _delete(url, cb) {
        _useHTTPHandle('DELETE', url, server, cb);
    }
    return {
        get: get,
        head: head,
        post: post,
        put: put,
        patch: patch,
        "delete": _delete
    };
}
exports.useRouter = useRouter;
