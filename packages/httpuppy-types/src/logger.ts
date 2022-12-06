/**
 * @module Logger
 * @description Logger Types
 */
export type LogLevel = 'silent' | 'base' | 'verbose';
export type LogErrorFile = string;
export type LogEventFile = string;
/**
 * @type DiagnosticLog
 * @description Runtime Diagnostic log to store for debug purposes
 */
export type DiagnosticLog = {
	msg: string;
	timestamp: string;
};
