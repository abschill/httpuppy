/**
 * @module url
 * @description Hooks for handling url parsing strategies
 */
import * as iTypes from './types';
import { useMountedFS } from './internal/mount-fs';

/**
 * @function useStaticURLParser
 * @description hook for handling a response with a virtually mounted static filesystem browser
 * @param req the request to be replied to with the virtual FS response
 * @param config the configuration for the parent server
 * @returns the mounted file to serve based on the given request information
 */
export function useStaticURLParser (
	req		: iTypes.HTTPuppyServer.HTTPuppyRequest,
	config	: iTypes.HTTPuppyServer.HTTPuppyServerOptions
): iTypes.HTTPuppyServer.MountedFile {
	// mount the local fs (possibly move this into the initializer, but for now we want to just refresh the fs per request)
	const iFS = useMountedFS(config);
	// filter the mounted filesystem based on the request url
	const match = iFS.filesMounted.filter(f => f.hrefs.includes(req.url ?? '')).shift();
	if(match) {
		return {
			reqUrl: req.url ?? '',
			...match
		};
	}
	else {
		return <iTypes.HTTPuppyServer.MountedFile>{};
	}
}
