import { ValidURLPath } from './types/server';
import { join } from 'path';
import mime from 'mime-types';

function useBaseHref (
	req,
	config
) {
	if(req.url !== '/') {
		return config.static.path + req.url;
	}
	let bUrl = req.url;
	if(!bUrl || bUrl === '') bUrl = '/';
	const outPath = (config?.indexBase ? (bUrl + config.indexBase) : bUrl + 'index.html');
	return join(outPath);
}

export function iValidURL(
	req,
	config,
	vFS
): ValidURLPath {
	const buf = useBaseHref(req, config);
	return {
		href: req.url,
		symLink: buf,
		fileName: buf.split('/').pop(),
		contentType: mime.lookup(buf)
	};
}
