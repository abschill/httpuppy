import winston from 'winston';
import { useColorTag } from './include';
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
		new winston.transports.Console({format: winston.format.combine(winston.format.label({label: config.log_prefix}), winston.format.timestamp(), winston.format.printf(({
			level, message, label, timestamp
		}) => {
			return `[${useColorTag('blue', label)}] ${level}: ${message} @ ${useColorTag('green', timestamp)}`;
		}) ),}),
		new winston.transports.File({ filename: 'httpuppy-err.log', level: 'error', format: winston.format.colorize() }),
		new winston.transports.File({ filename: 'httpuppy.log', format: winston.format.colorize() }),
	] : [
		new winston.transports.File({ filename: 'httpuppy-err.log', level: 'error', format: winston.format.colorize() }),
		new winston.transports.File({ filename: 'httpuppy.log', format: winston.format.colorize() }),
	];
	const logger = winston.createLogger({
		level: 'info',
		silent: conf.log_level === 'silent',
		transports,
	});
	return logger;
}
