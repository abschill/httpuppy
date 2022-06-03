import mime from 'mime-types';
import { iHTTP } from '../types';

/**
 * @internal useContentType
 * @description hook for determining content type of a virtual fpath on the system
 * @param fpath the file path of the type to resolve
 * @returns the tuple representing the content type header for the static file
 */
export default function useContentType(
	fpath	: string
): iHTTP.HTTPHeader {
	return [
		'Content-Type',
		mime.lookup(fpath)
	];
}
