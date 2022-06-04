/**
 * @internal
 */
import { HTTPuppyServer } from '../types';
/**
 * @internal useConfig
 * @description hook for applying default config settings against given user input
 * @param conf the submitted user input
 * @param diagnostics diagnostic log of the top level
 * @returns cleaned user config
 */
export declare function useConfig(conf: HTTPuppyServer.HTTPuppyServerOptions, diagnostics: HTTPuppyServer.DiagnosticLog[]): HTTPuppyServer.HTTPuppyServerOptions;
