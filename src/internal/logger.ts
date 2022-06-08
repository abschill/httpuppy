/**
 * @internal
 */
import {
	LogConfig,
	useDefaultLogConfig,
	Runtime,
	HTTPuppyRequest
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
	if(config.logLevel === 'verbose') {
		server.addListener('static-get', (req: HTTPuppyRequest) => {
			log(_useColorTag('yellow', 'static request info'));
			log(_useColorTag('status', 'headers:'));
			log(req.headers);
			if(!Object.is({}, req.trailers)) {
				log(_useColorTag('status', 'trailers:'));
				log(req.trailers);
			}
		});

		server.addListener('diagnostic-log', (...trace) => {
			console.log(trace);
		});
	}

	if(config.logLevel !== 'silent') {
		server.on('clientError', (err, socket) => {
			log(`${prefix}:`, _useColorTag('warn', `${err.name}`));
			socket.end('HTTP/1.1 400 Bad Request');
		});

		server.on('error', (err) => {
			log(`${prefix}:`, _useColorTag('error',  `${err.message}\n\n${err.stack}`));
		});

		server.on('request', (req) => {
			log(`${prefix}:`, _useColorTag('status',  <string>req.method),  req.url);
		});
	}
}
