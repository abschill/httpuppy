
import { join, resolve } from 'path';
import { readdirSync, readFileSync } from 'fs';
import { HTTPuppyOptions } from '../types';
import useContentType from './content-type';

/**
 *
 * @param file the path of the file to check any aliases for
 * @param _static the static config options of the calling process
 * @returns list of possible hrefs to be used for the given virtual path
 */
function useCleanPaths(
	file	: string,
	_static : HTTPuppyOptions.UserStaticConfig
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
	config: HTTPuppyOptions.UserHTTPConfig
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
