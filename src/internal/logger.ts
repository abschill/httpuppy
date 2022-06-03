import { HTTPuppyServer } from 'types';
import {
	LogConfig,
	useDefaultLogConfig
} from '../types/server';

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
	server.on('request', (req) => {
		console.log(`${req.method} ${req.url}`);
	});
}
