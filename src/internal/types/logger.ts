export type LogLevel = 'silent' | 'base' | 'verbose';

export interface LogConfig {
	logLevel	: LogLevel;
	logPrefix 	?: string;
	logFile		?: string | null;
}

export function useDefaultLogConfig():
LogConfig {
	return {
		logLevel	: 'base',
		logPrefix	: 'httpuppy',
		logFile		: null
	};
}

export interface LogMsg {
	code: number;
	msg: string;
	toString: () => string;
}

export type ValidLogMsg = string | LogMsg | object;
