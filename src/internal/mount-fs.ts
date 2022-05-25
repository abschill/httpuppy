import { iServer } from '../types';
import { join } from 'path';
import { readdirSync } from 'fs';
export function useMountedFS (config: iServer.HTTPConfig) {
	// mountedPath is the path to retrieve filesMounted from
	const mountedPath = join(config.static.path);
	// filesMounted is the accessible file tree that can be used against the upcoming handlers
	const filesMounted = readdirSync(mountedPath);
	return { mountedPath, filesMounted };
}
