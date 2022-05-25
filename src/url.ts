import { ValidURLPath } from './types/server';

function useBaseHref (
	req,
	config
) {
	console.log(req.url);
	if(req.url !== '/') {
		return config.static.path + req.url;
	}
	let bUrl = req.url;
	if(!bUrl || bUrl === '') bUrl = '/';
	const outPath = (config?.indexBase ? (bUrl + config.indexBase) : bUrl + 'index.html');
	return outPath.substring(1, outPath.length);
}

export function iValidURL(
	req,
	config,
	vFS
): ValidURLPath {
	const buf = useBaseHref(req, config);
	return {
		requestUrl: req.url,
		transformedUrl: buf
	};
}
