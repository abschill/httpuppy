/**
 * @internal
 * cluster callback handler
 */
import cluster from 'cluster';
import { cpus } from 'os';
import { HTTPServer, HTTPServerOptions } from './types';

export function $applyCluster(server: HTTPServer): boolean {
	if (cluster.isPrimary) {
		return $useMain();
	}
	return $useChild(server.config, server);
}

function $useMain() {
	const numCPUs = cpus().length;
	cluster.setMaxListeners(numCPUs);
	for (let i = 0; i < numCPUs; i += 1) {
		cluster.fork();
	}
	return true;
}

function $useChild(config: HTTPServerOptions, server: HTTPServer): boolean {
	server.listen(config.port);
	return true;
}
