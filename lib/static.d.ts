/**
 * @module static
 * @description Hooks for Static Content Serving
 */
import { HTTPuppyServer } from './types';
/**
 *
 * @param config Configuration for runtime that needs static mount
 * @param server Runtime to apply static handler mount point & error diagnostic list
 */
export declare function useStaticMount(config: HTTPuppyServer.HTTPuppyServerOptions, server: HTTPuppyServer.Runtime): void;
