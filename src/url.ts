import * as iTypes from './types';
import { useMountedFS } from './internal/mount-fs';

/**
 *
 * @param req the request to be replied to with the virtual FS response
 * @param config the configuration for the parent server
 * @returns the mounted file to serve for the given request information
 */
export function useVFSResponse (
	req: iTypes.HTTP_INCMSG,
	config: iTypes.HTTPuppyOptions.UserHTTPConfig
): iTypes.HTTPuppyServer.MountedFile {
	const iFS = useMountedFS(config);
	return {
		reqUrl: req.url,
		...iFS.filesMounted.filter(f => f.hrefs.includes(req.url)).shift()
	};
}
