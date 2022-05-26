import * as iServer from './types/server';
import { resolve } from 'path';
import mime from 'mime-types';

function interpolateHref(p: string, config: Required<iServer.UserHTTPConfig>): string{
	if(!p) {
		p = '/';
	}
	if(!config.static) {
		// no static options, no html base redirect
		return p;
	}
	return p === '/' ?
	resolve(config.static.path, 'index.html') : resolve(config.static.path, p );
}

function useVirtualHref (
	req,
	config: Required<iServer.UserHTTPConfig>
) {
	if(req.url !== '/') {
		return config.static.path + req.url;
	}
	return interpolateHref(req.url, config);
}

export function iValidURL(
	req,
	config: Required<iServer.UserHTTPConfig>
): iServer.ValidURLPath {
	const symLink = useVirtualHref(req, config);
	const fileName = symLink.split('/').pop();
	return {
		href: req.url,
		symLink,
		fileName,
		contentType: mime.lookup(symLink)
	};
}
