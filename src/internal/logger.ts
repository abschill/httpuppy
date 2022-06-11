/**
 * @internal
 */
import {
	LogConfig,
	useDefaultLogConfig,
	HTTPuppyServer,
	HTTPuppyRequest,
	ValidLogMsg
} from '../types';
import { useColorTag } from './fmt/_color';
import {
	existsSync,
	appendFileSync,
	writeFileSync
} from 'fs';

const { log } = console;

export function fLog(
	data: ValidLogMsg,
	conf: LogConfig
) {
	if(!conf.logFile) {
		return;
	}
	if(!existsSync(conf.logFile)) {
		writeFileSync(conf.logFile, data.toString());
		return;
	}
	if(typeof data === 'string') {
		appendFileSync(conf.logFile,  `${conf.logPrefix}: ${data}`);
		return;
	}
	return appendFileSync(conf.logFile, `${conf.logPrefix}: ${data.toString()}`);
}

export function pLog(
	data: ValidLogMsg
) {
	if(typeof data === 'string') {
		return log(data);
	}
	return log(data.toString());
}

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
	server	: HTTPuppyServer
) {
	const prefix = config.logPrefix || 'httpuppy';
	if(config.logLevel === 'verbose') {
		server.addListener('static-get', (req: HTTPuppyRequest) => {
			log(useColorTag('yellow', 'static request info'));
			log(useColorTag('status', 'headers:'));
			log(req.headers);
			if(!Object.is({}, req.trailers)) {
				log(useColorTag('status', 'trailers:'));
				log(req.trailers);
			}
		});
		server.addListener('diagnostic-log', (...trace) => {
			log(trace);
		});
	}

	if(config.logLevel !== 'silent') {
		server.addListener('listening', () => log(`${prefix}:`, useColorTag('green', 'server started '), 'on port', server.pConfig.port));

		server.on('clientError', (err, socket) => {
			log(`${prefix}:`, useColorTag('warn', `${err.name}`));
			socket.end('HTTP/1.1 400 Bad Request');
		});

		server.on('error', (err) => {
			log(`${prefix}:`, useColorTag('error',  `${err.message}\n\n${err.stack}`));
		});

		server.on('request', (req) => {
			log(`${prefix}:`, useColorTag('status',  <string>req.method),  req.url);
		});
	}
}
