import mime from 'mime-types';
import { iHTTP } from 'types';

/**
 *
 * @param fpath the file path of the type to resolve
 * @returns the tuple representing the content type header for the static file
 */
export default function useContentType(
	fpath: string
): iHTTP.HTTPHeader {
	return [
		'Content-Type',
		mime.lookup(fpath)
	];
}
