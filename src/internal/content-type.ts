import mime from 'mime-types';
import { iPuppy } from 'types';
export default function useContentType(fpath: string): iPuppy.HTTPHeader {
	return [
		'Content-Type',
		mime.lookup(fpath)
	];
}
