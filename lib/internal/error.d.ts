/**
 * @internal
 * @description hooks for handling errors that aren't defined by the user
 */
import { HTTPuppyResponse } from '../types/server';
/**
 *
 * @param res internal response to be written to
 * @returns nothing
 */
export declare function use404(res: HTTPuppyResponse): void;
