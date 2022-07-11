/**
 * @internal
 */
import useCluster from './cluster';
import { HTTPuppyServerOptions } from '..';
import {
	DiagnosticLog,
	defaultCacheSettings,
	HTTPuppyServer,
	shutdown,
	useLogger,
	ENV_DEFAULT_ERROR_FILE,
	ENV_DEFAULT_EVENT_FILE,
	ENV_DEFAULT_HOST,
	ENV_TTL_DEFAULT,
	ENV_PORT_DEFAULT
} from '.';

export const defaultHTTPConfig: HTTPuppyServerOptions = {
	port: ENV_PORT_DEFAULT,
	clustered: false,
	cache: defaultCacheSettings,
	log_level: 'base',
	hostname: ENV_DEFAULT_HOST,
	throw_warnings: false,
	ttl_default: ENV_TTL_DEFAULT,
};

export function fromDefaultHTTPConfig(
	config: HTTPuppyServerOptions
): HTTPuppyServerOptions {
	return {
		...defaultHTTPConfig,
		...config,
	};
}
/**
 * @internal useConfig
 * @description hook for applying default config settings against given user input
 * @param conf the submitted user input
 * @param diagnostics diagnostic log of the top level
 * @returns cleaned user config
 */
export function useConfig(
	conf?: HTTPuppyServerOptions,
	diagnostics?: DiagnosticLog[]
): Required<HTTPuppyServerOptions> {
	if (!conf) {
		return <Required<HTTPuppyServerOptions>>defaultHTTPConfig;
	}
	if (!diagnostics) {
		diagnostics = [];
	}

	const config = { ...defaultHTTPConfig, ...conf };
	return <Required<HTTPuppyServerOptions>>config;
}
/**
 * @internal _useServer
 * @description an internal startup process for the `useServer` hook
 * @param config config from user for runtime
 * @param server server generated from node standard http library
 * @param diagnostics diagnostic list from the prestartup process
 * @returns the http server object
 */
export function _useServer(
	config: HTTPuppyServerOptions,
	server: HTTPuppyServer,
	diagnostics: DiagnosticLog[]
): HTTPuppyServer {
	const ss = <HTTPuppyServer>server;
	ss.diagnostics = diagnostics;
	ss.pConfig = config;
	ss._routers = [];
	ss._logger = useLogger(
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
			useCluster(ss);
			return true;
		} catch (e) {
			diagnostics.push({
				msg: JSON.stringify(e),
				timestamp: Date.now().toLocaleString(),
			});
			server._logger.error(`${JSON.stringify(e)}`);
			return false;
		}
	};
	// bind safe shutdown to the server for callability on the end user side
	ss.stop = () => shutdown(server);
	return ss;
}
