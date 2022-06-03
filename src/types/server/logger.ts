export type LogLevel = 'silent' | 'base' | 'verbose';

export interface LogConfig {
	logLevel	: LogLevel;
	logPrefix 	?: string;
}

export function useDefaultLogConfig():
LogConfig {
	return {
		logLevel	: 'base',
		logPrefix	: 'httpuppy_log'
	};
}
