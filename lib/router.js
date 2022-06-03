"use strict";
exports.__esModule = true;
exports.useRouter = void 0;
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
function useRouter(attachTo, // server to attach the router to as a handler
routerOptions // placeholder: planned feature
) {
    // router callback choices
    // todo: setup glob handler functionality if config option is set
    function get(url, cb) {
        attachTo.on('request', function (req, res) {
            if (req.method === 'GET' && req.url === url) {
                return cb(req, res);
            }
            return;
        });
    }
    function post(url, cb) {
        attachTo.on('request', function (req, res) {
            if (req.method === 'POST' && req.url === url) {
                return cb(req, res);
            }
            return;
        });
    }
    function head(url, cb) {
        attachTo.on('request', function (req, res) {
            if (req.method === 'HEAD' && req.url === url) {
                return cb(req, res);
            }
            return;
        });
    }
    function put(url, cb) {
        attachTo.on('request', function (req, res) {
            if (req.method === 'PUT' && req.url === url) {
                return cb(req, res);
            }
            return;
        });
    }
    function patch(url, cb) {
        attachTo.on('request', function (req, res) {
            if (req.method === 'PATCH' && req.url === url) {
                return cb(req, res);
            }
            return;
        });
    }
    function _delete(url, cb) {
        attachTo.on('request', function (req, res) {
            if (req.method === 'DELETE' && req.url === url) {
                return cb(req, res);
            }
            return;
        });
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
