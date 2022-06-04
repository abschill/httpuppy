/**
 * @internal
 */
import { HTTPuppyServer } from '../types';
import {
	LogConfig,
	useDefaultLogConfig
} from '../types/server';
const { log } = console;
import { _useColorLogger } from './_color';

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
	const prefix = config.logPrefix || 'httpuppy';
	if(config.logLevel === 'base') {
		server.on('request', (req) => {
			log(`${prefix}:`, _useColorLogger('status',  <string>req.method),  req.url);
		});

		server.on('error', (err) => {
			log(`${prefix}:`, _useColorLogger('error',  `${err.message}\n\n${err.stack}`));
		});

		server.on('clientError', (err, socket) => {
			log(`${prefix}:`, _useColorLogger('warn', `${err.name}`));
			socket.end('HTTP/1.1 400 Bad Request');
		});
	}
}
