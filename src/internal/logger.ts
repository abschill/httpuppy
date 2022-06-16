/**
 * @internal
 * @private
 */
import { useColorTag } from './include';
import {
	HTTPuppyServer,
	HTTPuppyRequest
} from '../';
import {
	existsSync,
	appendFileSync,
	writeFileSync
} from 'fs';
import cluster from 'cluster';
export type LogLevel = 'silent' | 'base' | 'verbose';

/**
 * @internal
 * @private
 *  */
export interface LogConfig {
	logLevel	: LogLevel;
	logPrefix 	?: string;
	logFile		?: string | null;
}
/**
 * @internal
 * @private
 *  */
export function useDefaultLogConfig():
LogConfig {
	return {
		logLevel	: 'base',
		logPrefix	: 'httpuppy',
		logFile		: null
	};
}
/**
 * @internal
 * @private
 *  */
interface LogMsg {
	code: number;
	msg: string;
	toString: () => string;
}
/**
 * @internal
 * @private
 *  */
type ValidLogMsg = string | LogMsg | object;

const { log } = console;
/**
 * @internal
 * @private
 *  */
export function fLog(
	data: ValidLogMsg,
	conf: LogConfig
) {
	if(!conf.logFile) {
		conf.logFile = 'httpuppy.log';
	}

	if(!existsSync(conf.logFile)) {
		writeFileSync(conf.logFile, `${Date.now().toLocaleString()}\n${data.toString()}\n`);
		return;
	}
	if(typeof data === 'string') {
		appendFileSync(conf.logFile,  `${conf.logPrefix}: ${data}`);
		return;
	}
	return appendFileSync(conf.logFile, `${Date.now().toLocaleString()}|${conf.logPrefix}: ${data.toString()}\n`);
}
/**
 * @internal
 * @private
 *  */
export function pLog(
	data: ValidLogMsg
) {
	if(typeof data === 'string') {
		return log(data);
	}
	return log(data.toString());
}
/**
 * @internal
 * @private
 *  */
export function useLogConfig(
	config ?: LogConfig
): LogConfig {
	const def = useDefaultLogConfig();
	if(!config) {
		return def;
	}
	return {...def, ...config};
}
/**
 * @internal
 * @private
 *  */
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
			fLog({...trace}, config);
		});
	}

	if(config.logLevel !== 'silent') {
		if(cluster.isWorker) server.addListener('listening', () => log(`${prefix}:`, useColorTag('green', `worker pid ${process.pid} listening`), 'on port', server.pConfig.port));
		server.on('clientError', (err, socket) => {
			log(`${prefix}:`, useColorTag('warn', `${err.name}`));
			socket.end('HTTP/1.1 400 Bad Request');
		});
		server.on('error', (err) => log(`${prefix}:`, useColorTag('error',  `${err.message}\n\n${err.stack}`)));
		server.on('request', (req) => log(`${prefix}:`, useColorTag('status',  <string>req.method),  req.url));
	}
}
