export interface LogConfig {
	logLevel: 'silent' | 'base' | 'verbose';
	logPrefix ?: string;
}

export function useDefaultLogConfig():
LogConfig {
	return {
		logLevel: 'base',
		logPrefix: 'httpuppy_log'
	};
}
