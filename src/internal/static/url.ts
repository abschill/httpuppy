import {
	HTTPuppyRequest,
	HTTPuppyResponse,
	VirtualWriteableFile
} from '../../types';
/**
 * @function useStaticURLParser
 * @description hook for handling a response with a virtually mounted static filesystem browser
 * @param req the request to be replied to with the virtual FS response
 * @param config the configuration for the parent server
 * @returns the mounted file to serve based on the given request information
 */
export function useStaticURLParser (
	req		: HTTPuppyRequest,
	res		: HTTPuppyResponse
): VirtualWriteableFile {
	const iFS = req._process._vfs;
	// filter the mounted filesystem based on the request url
	const match = iFS.mountedFiles.filter(f => f.hrefs.includes(req.url ?? '')).shift();
	if(match) {
		return {
			reqUrl: req.url ?? '',
			...match
		};
	}
	else {
		return <VirtualWriteableFile>{};
	}
}
