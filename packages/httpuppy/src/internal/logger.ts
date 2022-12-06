// import { color_tag } from './include';
import { color } from 'terminal-color';
import {
	ENV_DEFAULT_ERROR_FILE,
	ENV_DEFAULT_EVENT_FILE,
	ENV_LOG_PREFIX,
} from '.';
import { LogLevel, LogEventFile, LogErrorFile } from 'httpuppy-types';
import { Logger, format, transports, createLogger } from 'winston';
export function create_logger(
	level: LogLevel,
	error_file?: LogErrorFile,
	event_file?: LogEventFile
): Logger {
	if (!error_file) error_file = ENV_DEFAULT_ERROR_FILE;
	if (!event_file) event_file = ENV_DEFAULT_EVENT_FILE;
	process.env.log_level = level;

	const _transports =
		level === 'verbose'
			? [
					new transports.Console({
						format: format.combine(
							format.label({ label: ENV_LOG_PREFIX }),
							format.timestamp(),
							format.printf(
								({ level, message, label, timestamp }) => {
									return `[${color.fg.blue(
										label
									)}] ${level}: ${message} @ ${color.fg.green(
										timestamp
									)}`;
								}
							)
						),
					}),
					new transports.File({
						filename: error_file,
						level: 'error',
						format: format.colorize(),
					}),
					new transports.File({
						filename: event_file,
						format: format.colorize(),
					}),
			  ]
			: [
					new transports.File({
						filename: error_file,
						level: 'error',
						format: format.colorize(),
					}),
					new transports.File({
						filename: event_file,
						format: format.colorize(),
					}),
			  ];
	const logger = createLogger({
		level: 'info',
		silent: level === 'silent',
		transports: _transports,
	});
	return logger;
}
