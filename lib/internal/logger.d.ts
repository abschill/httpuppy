import { HTTPuppyServer } from '../types';
import { LogConfig } from '../types/server';
export declare function useLogConfig(config?: LogConfig): LogConfig;
export declare function useLogger(config: LogConfig, server: HTTPuppyServer.Runtime): void;
