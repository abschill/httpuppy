import { HTTP_RES } from '../types';

/**
 *
 * @param res internal response to be written to
 * @returns nothing
 */
export function use404(
	res	: HTTP_RES
): void {
	res.writeHead(404, '404: page not found');
	res.end('404: page not found');
	return;
}
