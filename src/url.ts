import * as iTypes from './types';
import { useMountedFS } from './internal/mount-fs';

export function useVFSResponse (
	req: iTypes.HTTP_INCMSG,
	config: iTypes.HTTPuppyOptions.UserHTTPConfig
): iTypes.iServer.MountedFile {
	const iFS = useMountedFS(config);
	return {
		reqUrl: req.url,
		...iFS.filesMounted.filter(f => f.hrefs.includes(req.url)).shift()
	};
}
