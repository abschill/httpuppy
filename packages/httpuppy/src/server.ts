/**
 * @module useServer
 * @description core server module
 */
import {
	_use_server,
	default_http_config,
	ENV_ASYNC_SIGNATURE,
	ENV_REQUEST_SIGNATURE,
	use_config,
	apply_static_callback
} from './internal';
import {
	DiagnosticLog,
	HTTPServer,
	HTTPServerOptions,
	https_options,
	create_server,
	create_secure_server
} from 'httpuppy-types';

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
	if (!conf) conf = default_http_config;
	const def_event_handler = conf?.handler;
	const diagnostics: DiagnosticLog[] = [];
	const config = use_config(conf, diagnostics);
	const _server = conf.secure
		? create_secure_server(<https_options>conf.secure, def_event_handler)
		: create_server(def_event_handler);
	const server = _use_server(config, <HTTPServer>_server, diagnostics);
	server.logger.info(
		`logger online (child pid: ${process.pid}) (parent: ${process.ppid})`
	);
	server.use = (url: string, fn: any | Promise<any>) => {
		server.on(ENV_REQUEST_SIGNATURE, async (req, res) => {
			if (req.url === url) {
				if (fn.constructor && fn.constructor.name === ENV_ASYNC_SIGNATURE) {
					return await fn(req, res);
				}
				return fn(req, res);
			}
		});
	};

	server.static = async (_url: string, static_path: string) =>
		await apply_static_callback(server, _url, static_path);

	process.on('beforeExit', async (code) => {
		server.logger.info(`exiting with code ${code}`);
		await server.stop();
	});
	return server;
}
