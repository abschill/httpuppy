import { HTTPuppyServer } from 'types';
import {
	LogConfig,
	useDefaultLogConfig
} from '../types/server';
const { log, warn, error } = console;

export function useLogConfig(
	config ?: LogConfig
): LogConfig {
	const def = useDefaultLogConfig();
	if(!config) {
		return def;
	}
	return {...def, ...config};
}

export function useLogger(
	config	: LogConfig,
	server	: HTTPuppyServer.Runtime
) {
	const prefix = config.logPrefix || 'httpuppy_log';
	if(config.logLevel === 'base') {
		server.on('request', (req) => {
			log(`${prefix}: ${req.method} ${req.url}`);
		});

		server.on('error', (err) => {
			error(`${prefix}: ${err.message}\n\n${err.stack}`);
		});

		server.on('clientError', (err, socket) => {
			warn(`${prefix}: ${err.name}`);
			socket.end('HTTP/1.1 400 Bad Request');
		});
	}
}
