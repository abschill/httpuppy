/**
 * @internal
 */
import {
	DiagnosticLog,
	HTTPuppyServerOptions,
	HTTPuppyServer
 } from '../..';
import { useLogConfig } from '../logger';
import { useColorTag } from '../include';
import { useMountedFS } from '../static';
import useCluster from './cluster';
import { isAbsolute, join } from 'path';
/**
 * @internal useConfig
 * @description hook for applying default config settings against given user input
 * @param conf the submitted user input
 * @param diagnostics diagnostic log of the top level
 * @returns cleaned user config
 */
export function useConfig(
	conf		: HTTPuppyServerOptions,
	diagnostics : DiagnosticLog[]
): Required<HTTPuppyServerOptions> {
    const config = {...conf};
    if(!config.port) config.port = 80; //default http port
	config.timeout = conf.timeout || 0;
	config.log = useLogConfig(config.log);
    config.hostname = conf.hostname || '127.0.0.1'; // default lh
	if(!config.throwWarnings || (config.throwWarnings === null)) config.throwWarnings = false;
	if(config.static) {
		config.static = {
			href: '/', // base href to access with requests
			...config.static // go last to just use href and path as defaults to override, config is the user input
		};
	}
	if(config.static && (config.static.path === '.' || !config.static.path)) {
		console.error(useColorTag('error', 'error: cannot use base path as a static root'));
		process.exit(1);
	}
	if(config.static && config.static.path && !isAbsolute(<string>config.static.path)) {
		config.static.path = join(process.cwd(), <string>config?.static.path);
	}

	if(!conf.handler && !conf.static) {
        const msg = 'Request Handler no-op';
        diagnostics.push({msg, timestamp: Date.now().toLocaleString()});
    }

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
	// if static properties exist, mount the vfs based on them
	if(config.static) {
		ss._vfs = useMountedFS(ss);
	}
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
			return false;
		}
	};
	return ss;
}
export * from './argv';
export * from './conf-map';
