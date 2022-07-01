import {
	Logger,
	format,
	transports,
	createLogger
} from 'winston';
import { useColorTag } from './include';

export type LogConfig = {
	log_level  ?: 'silent' | 'base' | 'verbose';
	log_prefix ?: 'httpuppy';
	error_file ?: string;
	event_file ?: string;
}

export const defaultLogConfig: LogConfig = {
	log_level: 'base',
	log_prefix: 'httpuppy',
	error_file: 'log/httpuppy-err.log',
	event_file: 'log/httpuppy.log'
};

export function useLogger(
	config: LogConfig
): Logger {
	const conf = { ...defaultLogConfig, ...config };
	const _transports = config.log_level === 'verbose' ? [
		new transports.Console({format: format.combine(format.label({label: config.log_prefix}), format.timestamp(), format.printf(({
			level, message, label, timestamp
		}) => {
			return `[${useColorTag('blue', label)}] ${level}: ${message} @ ${useColorTag('green', timestamp)}`;
		}) ),}),
		new transports.File({ filename: config.error_file, level: 'error', format: format.colorize() }),
		new transports.File({ filename: config.event_file, format: format.colorize() }),
	] : [
		new transports.File({ filename: config.error_file, level: 'error', format: format.colorize() }),
		new transports.File({ filename: config.event_file, format: format.colorize() }),
	];
	const logger = createLogger({
		level: 'info',
		silent: conf.log_level === 'silent',
		transports: _transports,
	});
	return logger;
}
