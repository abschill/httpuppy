/**
 * @internal
 * @description hooks for setting response status from enumerated runtime constants
 */
import { HTTPuppyResponse } from '../types/server';
/**
 *
 * @param res internal response to be written to
 * @returns nothing
 */
export declare function useStatus(res: HTTPuppyResponse, status: number, msg: string): void;
