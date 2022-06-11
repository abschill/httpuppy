import cluster from 'cluster';
import { cpus } from 'os';
import { HTTPuppyServer, HTTPuppyServerOptions } from '../../types';

export default function useCluster(
	server: HTTPuppyServer
) {
	if (cluster.isPrimary) {
		useMasterProcess();
	}
	else {
		useChildProcess(server.pConfig, server);
	}
}

function useMasterProcess() {
	const numCPUs = cpus().length;
	for (let i = 0; i < numCPUs; i++) {
		cluster.fork();
	}
}

function useChildProcess(
	config: HTTPuppyServerOptions,
	server: HTTPuppyServer
) {
	return server.listen(config.port);
}
