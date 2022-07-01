/**
 * @internal
 */
import useCluster from './cluster';
import { HTTPuppyServerOptions } from '..';
import {
	DiagnosticLog,
	defaultCacheSettings,
	HTTPuppyServer
 } from './types';
import {
	useLogger,
	defaultLogConfig
} from './logger';

export const defaultHTTPConfig:
HTTPuppyServerOptions = {
	port		  : 80,
	clustered	  : false,
	cache		  : defaultCacheSettings,
	log			  : defaultLogConfig,
	hostname	  : '127.0.0.1',
	secure		  : false,
	throwWarnings : false,
	timeout		  : 0
};

export function fromDefaultHTTPConfig(
	config: HTTPuppyServerOptions
): HTTPuppyServerOptions {
	return {
		...defaultHTTPConfig,
		...config
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
	conf		?: HTTPuppyServerOptions,
	diagnostics ?: DiagnosticLog[]
): Required<HTTPuppyServerOptions> {
	if(!conf) {
		return <Required<HTTPuppyServerOptions>>defaultHTTPConfig;
	}
	if(!diagnostics) {
		diagnostics = [];
	}

    const config = {...defaultHTTPConfig, ...conf};
    if(!config.port) config.port = 80; //default http port
	config.timeout = conf.timeout || 0;
	config.log = {...defaultLogConfig, ...config.log};
    config.hostname = conf.hostname || '127.0.0.1'; // default lh
	if(!config.throwWarnings || (config.throwWarnings === null)) config.throwWarnings = false;
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
	config	: HTTPuppyServerOptions,
	server	: HTTPuppyServer,
	diagnostics: DiagnosticLog[]
): HTTPuppyServer {
	if(config.onMount) server.once('listening', config.onMount);
	const ss = <HTTPuppyServer>server;
	ss.diagnostics = diagnostics;
	ss.onClose = config.onClose;
	ss.pConfig = config;
	ss._routers = [];
	ss._logger = useLogger(config.log ?? defaultLogConfig);
	// if static properties exist, mount the vfs based on them
	ss.start = () => {
		try {
			if(!config.clustered) {
				ss.listen(config.port);
				return true;
			}
			useCluster(ss);
			return true;
		}
		catch(e) {
			diagnostics.push({
				msg: JSON.stringify(e),
				timestamp: Date.now().toLocaleString()
			});
			server._logger.error(`${JSON.stringify(e)}`);
			return false;
		}
	};
	return ss;
}
