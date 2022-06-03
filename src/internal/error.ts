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
export function use404(
	res	: HTTPuppyResponse
): void {
	res.writeHead(404, '404: page not found');
	res.end('404: page not found');
	return;
}
