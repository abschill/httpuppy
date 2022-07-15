/**
 * @module useServer
 * @description core server module
 */
import {
	_use_server,
	create_server,
	create_secure_server,
	DiagnosticLog,
	https_options,
	HTTPServer,
	default_http_config,
	HTTPServerOptions,
	ENV_ASYNC_SIGNATURE,
	ENV_REQUEST_SIGNATURE,
	use_config,
	apply_static_callback
} from './internal';

/**
 * @function useServer
 * @example
 * ```javascript
 * const app0 = useServer({ port: 3000, clustered: false });
 * const app1 = useServer({ port: 3001, clustered: true })
 *
 * ```
 * @param conf configuration options
 * @returns httpuppy server
 */
export function useServer(
	conf?: HTTPServerOptions // user config for server
): HTTPServer {
	if(!conf) conf = default_http_config;
	const def_event_handler = conf?.handler;
	const diagnostics: DiagnosticLog[] = [];
	const config = use_config(conf, diagnostics);
	console.log(config);
	const _server = conf.secure
		? create_secure_server(
				<https_options>conf.secure,
				def_event_handler
		)
		: create_server(def_event_handler);
	const server = _use_server(config, <HTTPServer>_server, diagnostics);
	server._logger.info(
		`logger online (child pid: ${process.pid}) (parent: ${process.ppid})`
	);
	server.use = (url: string, fn: any|Promise<any>) => {
		server.on(ENV_REQUEST_SIGNATURE, async (req, res) => {
			if(req.url === url) {
				if(fn.constructor && fn.constructor.name === ENV_ASYNC_SIGNATURE) {
					return await fn(req, res);
				}
				return fn(req, res);
			}
		});
	};

	server.static = (_url: string, static_path: string) =>
		apply_static_callback(server, _url, static_path);
	return server;
}
