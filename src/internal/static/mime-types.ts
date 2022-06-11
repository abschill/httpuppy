import { lookup } from 'mime-types';
import { HTTPHeader } from '../../types';
/**
 * @internal useLocalMimeType
 * @description hook for determining content type of a virtual fpath on the system
 * @param fpath the file path of the type to resolve
 * @returns the tuple representing the content type header for the static file
*/
export function useLocalMimeType(
	fpath: string
): HTTPHeader {
	if(fpath === '') return [
		'Content-Type',
		'text/plain'
	];

	const matchType = lookup(fpath);
	return [
		'Content-Type',
		(matchType ? matchType : 'text/plain')
	];
}
