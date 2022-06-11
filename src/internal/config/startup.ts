/**
 * @internal
 */
import { useMountedFS } from '../static';
import {
	HTTPuppyServerOptions,
	DiagnosticLog,
	HTTPuppyServer
} from '../../types';
import useCluster from './cluster';

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
				msg: JSON.stringify(e)
			});
			return false;
		}
	};
	return ss;
}
