/**
 * @internal
 */
import {
	DEFAULT_HTTP_CACHE,
	$applyCluster,
	DiagnosticLog,
	HTTPServer,
	HTTPServerOptions,
	ENV_DEFAULT_ERROR_FILE,
	ENV_DEFAULT_EVENT_FILE,
	ENV_DEFAULT_HOST,
	ENV_TTL_DEFAULT,
	ENV_PORT_DEFAULT
} from '@httpuppy/common';
import { $cleanShutdown, useLogger } from '.';

export const DEFAULT_HTTPUPPY_CONFIG: HTTPServerOptions = {
	port: ENV_PORT_DEFAULT,
	clustered: false,
	cache: DEFAULT_HTTP_CACHE,
	log_level: 'base',
	hostname: ENV_DEFAULT_HOST,
	throw_warnings: false,
	ttl_default: ENV_TTL_DEFAULT
};
/**
 * @internal useConfig
 * @remarks
 * hook for applying default config settings against given user input
 * @param conf - the submitted user input
 * @param diagnostics - diagnostic log of the top level
 * @returns cleaned user config
 */
export function use_config(
	conf?: HTTPServerOptions,
	diagnostics?: DiagnosticLog[]
): Required<HTTPServerOptions> {
	if (!conf) {
		return <Required<HTTPServerOptions>>DEFAULT_HTTPUPPY_CONFIG;
	}
	if (!diagnostics) {
		diagnostics = [];
	}

	const config = { ...DEFAULT_HTTPUPPY_CONFIG, ...conf };
	process.env.log_level = config.log_level;
	return <Required<HTTPServerOptions>>config;
}
/**
 * @internal _useServer
 * @remarks an internal startup process for the `useServer` hook
 * @param config - config from user for runtime
 * @param server - server generated from node standard http library
 * @param diagnostics - diagnostic list from the prestartup process
 * @returns the http server object
 */
export function $useServer(
	config: Required<HTTPServerOptions>,
	server: HTTPServer,
	diagnostics: DiagnosticLog[]
): HTTPServer {
	const ss = <HTTPServer>server;
	ss.timeout = config.ttl_default;
	ss.diagnostics = diagnostics;
	ss.config = config;
	ss.routers = [];
	ss.logger = useLogger(
		config.log_level ?? 'base',
		ENV_DEFAULT_ERROR_FILE,
		ENV_DEFAULT_EVENT_FILE
	);
	// if static properties exist, mount the vfs based on them
	ss.start = () => {
		try {
			if (!config.clustered) {
				ss.listen(config.port);
				return true;
			}
			return $applyCluster(ss);
		} catch (e) {
			diagnostics.push({
				msg: JSON.stringify(e),
				timestamp: Date.now().toLocaleString()
			});
			server.logger.error(`${JSON.stringify(e)}`);
			return false;
		}
	};
	// bind safe shutdown to the server for callability on the end user side
	ss.stop = () => $cleanShutdown(server);
	return ss;
}
