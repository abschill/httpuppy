/**
 * @internal
 */
import {
	LogConfig,
	useDefaultLogConfig,
	Runtime
} from '../types';
const { log } = console;
import { _useColorTag } from './fmt/_color';

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
	server	: Runtime
) {
	const prefix = config.logPrefix || 'httpuppy';
	if(config.logLevel === 'base') {
		server.on('request', (req) => {
			log(`${prefix}:`, _useColorTag('status',  <string>req.method),  req.url);
		});

		server.on('error', (err) => {
			log(`${prefix}:`, _useColorTag('error',  `${err.message}\n\n${err.stack}`));
		});

		server.on('clientError', (err, socket) => {
			log(`${prefix}:`, _useColorTag('warn', `${err.name}`));
			socket.end('HTTP/1.1 400 Bad Request');
		});

		server.addListener('static-get', (data) => {
			console.log('static get');
			console.log(data);
		});

		server.addListener('diagnostic-log', (...trace) => {
			console.log(trace);
		});
	}
}
