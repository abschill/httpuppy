/**
 * @internal
 */
import { HTTPuppyServer } from '../types';
/**
 *
 * @param s http server to shut down
 * @returns void promise to gracefully shut down
 */
export declare function shutdown(s: HTTPuppyServer.Runtime): Promise<HTTPuppyServer.HTTPuppySleep>;
