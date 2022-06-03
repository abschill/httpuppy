/**
 * @internal
 */
import mime from 'mime-types';
/**
 * @internal useContentType
 * @description hook for determining content type of a virtual fpath on the system
 * @param fpath the file path of the type to resolve
 * @returns the tuple representing the content type header for the static file
 */
export default function useContentType(fpath) {
	if(fpath === '') {
		return [
			'Content-Type',
			'text/plain'
		];
	}
	return [
		'Content-Type',
		mime.lookup(fpath)
	];
}
