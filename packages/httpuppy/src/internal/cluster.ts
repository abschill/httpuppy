/**
 * @internal
 * cluster callback handler
 */
import cluster from 'cluster';
import { cpus } from 'os';
import {
	HTTPServer,
	HTTPServerOptions
} from 'httpuppy-types';

export default function apply_clustered(
	server: HTTPServer
): boolean {
	if (cluster.isPrimary) {
		return use_main();
	}
	return use_child(server.config, server);
}

function use_main() {
	const numCPUs = cpus().length;
	cluster.setMaxListeners(numCPUs);
	for (let i = 0; i < numCPUs; i++) {
		cluster.fork();
	}
	return true;
}

function use_child(
	config: HTTPServerOptions,
	server: HTTPServer
): boolean {
	server.listen(config.port);
	return true;
}
