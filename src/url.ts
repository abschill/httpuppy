import * as iServer from './types/server';
import { useMountedFS } from './internal/mount-fs';

export function useMountedFSResponse (
	req,
	config: Required<iServer.UserHTTPConfig>
): iServer.MountedFile {
	const iFS = useMountedFS(config);
	return {
		reqUrl: req.url,
		...iFS.filesMounted.filter(f => f.hrefs.includes(req.url)).shift()
	};
}
