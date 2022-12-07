/**
 * @public
 * useServer
 * @remarks core server module
 *
 * using this hook will create a new server with the passed configuration.
 *
 * The server can be stopped and started at the user's discretion
 */
import {
	$useServer,
	DEFAULT_HTTPUPPY_CONFIG,
	use_config,
	$applyStaticCallback
} from './internal';
import {
	ENV_REQUEST_SIGNATURE,
	DiagnosticLog,
	HTTPServer,
	HTTPServerOptions,
	https_options,
	create_server,
	create_secure_server
} from '@httpuppy/common';

/**
 * useServer
 * @example
 * ```javascript
 * const app0 = useServer({ port: 3000, clustered: false });
 * const app1 = useServer({ port: 3001, clustered: true })
 *
 * ```
 * @param conf - configuration options
 * @returns httpuppy server
 */
export function useServer(
	conf?: HTTPServerOptions // user config for server
): HTTPServer {
	if (!conf) conf = DEFAULT_HTTPUPPY_CONFIG;
	const def_event_handler = conf?.handler;
	const diagnostics: DiagnosticLog[] = [];
	const config = use_config(conf, diagnostics);
	const _server = conf.secure
		? create_secure_server(<https_options>conf.secure, def_event_handler)
		: create_server(def_event_handler);
	const server = $useServer(config, <HTTPServer>_server, diagnostics);
	server.logger.info(
		`logger online (child pid: ${process.pid}) (parent: ${process.ppid})`
	);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	server.use = (url: string, fn: any | Promise<any>) => {
		server.on(ENV_REQUEST_SIGNATURE, async (req, res) => {
			if (req.url === url) {
				// const matchesWithAsync = (fn.constructor && fn.constructor.name === ENV_ASYNC_SIGNATURE);
				await fn(req, res);
			}
		});
	};

	server.static = async (_url: string, static_path: string) => {
		await $applyStaticCallback(server, _url, static_path);
	};

	process.on('beforeExit', async (code) => {
		server.logger.info(`exiting with code ${code}`);
		await server.stop();
	});
	return server;
}
