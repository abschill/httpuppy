/**
 * @internal mount-fs
 * @description virtual file system mount hooks
 */
import { join, resolve } from 'path';
import { readdirSync, readFileSync } from 'fs';
import { HTTPuppyServer } from '../types';
import useContentType from './content-type';

/**
 * @function useCleanPaths
 * @description list possible hrefs to be used for given vpath
 * @param file the path of the file to check any aliases for
 * @param _static the static config options of the calling process
 * @returns list of strings defining possible hrefs
 */
function useCleanPaths(
	file	: string,
	_static : HTTPuppyServer.UserStaticConfig
): string[] {
	const pathOptions = [
		`${_static.href ?? ''}${file}`
	];
	if(file === 'index.html') {
		pathOptions.push(`${_static.href ?? ''}`);
	}
	return pathOptions;
}

/**
 *
 * @param config config options for the runtime that wants to mount an FS
 * @returns
 */
export function useMountedFS(
	config : HTTPuppyServer.HTTPuppyServerOptions
) {
	// mountedPath is the path to retrieve filesMounted from
	const mountedPath = join(config.static.path);
	// filesMounted is the accessible file tree that can be used against the upcoming handlers
	const filesMounted = readdirSync(mountedPath).map(file => {
	const symLink = resolve(mountedPath, file);
	return {
		fileName: file,
		symLink,
		contentType: useContentType(symLink),
		content: readFileSync(symLink),
		hrefs: useCleanPaths(file, config.static)
	};

	});
	return { mountedPath, filesMounted };
}
