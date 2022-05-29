import mime from 'mime-types';
export default function useContentType(fpath: string): string[] {
	return [
		'Content-Type',
		mime.lookup(fpath)
	];
}
