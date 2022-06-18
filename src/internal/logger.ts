import winston, { level } from 'winston';

export type LogConfig = {
	log_level  : 'silent' | 'base' | 'verbose';
	log_prefix : 'httpuppy';
	error_file : string;
	event_file : string;
}

export const defaultLogConfig: LogConfig = {
	log_level: 'base',
	log_prefix: 'httpuppy',
	error_file: 'error.log',
	event_file: 'combined.log'
};

export function useLogConfig(
	config ?: Partial<LogConfig>
): LogConfig {
	return {...defaultLogConfig, ...config};
}

export function useLogger(
	config: LogConfig
): winston.Logger {
	const conf = useLogConfig(config);
	const transports = config.log_level === 'verbose' ? [
		new winston.transports.Console,
		new winston.transports.File({ filename: 'httpuppy-err.log', level: 'error' }),
		new winston.transports.File({ filename: 'httpuppy.log' }),
	] : [
		new winston.transports.File({ filename: 'httpuppy-err.log', level: 'error' }),
		new winston.transports.File({ filename: 'httpuppy.log' }),
	];
	const logger = winston.createLogger({
		level: 'info',
		silent: conf.log_level === 'silent',
		transports,
	});
	return logger;
}
