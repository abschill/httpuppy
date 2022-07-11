import { Logger, format, transports, createLogger } from 'winston';
import { useColorTag } from './include';

export type LogLevel = 'silent' | 'base' | 'verbose';
export type LogErrorFile = string;
export type LogEventFile = string;

export function useLogger(
	level: LogLevel,
	error_file?: LogErrorFile,
	event_file?: LogEventFile
): Logger {
	if (!error_file) error_file = 'log/http-error.log';
	if (!event_file) event_file = 'log/http-event.log';

	const _transports =
		level === 'verbose'
			? [
					new transports.Console({
						format: format.combine(
							format.label({ label: 'httpuppy' }),
							format.timestamp(),
							format.printf(
								({ level, message, label, timestamp }) => {
									return `[${useColorTag(
										'blue',
										label
									)}] ${level}: ${message} @ ${useColorTag(
										'green',
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
