export declare type LogLevel = 'silent' | 'base' | 'verbose';
export interface LogConfig {
    logLevel: LogLevel;
    logPrefix?: string;
}
export declare function useDefaultLogConfig(): LogConfig;
