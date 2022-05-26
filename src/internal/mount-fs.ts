
import { join, resolve } from 'path';
import { readdirSync, readFileSync } from 'fs';
import mime from 'mime-types';
import { HTTPuppyOptions } from '../types';

function pathify(
	file: string,
	_static: HTTPuppyOptions.UserStaticConfig
): string[] {
	const pathOptions = [
		`${_static.href ?? ''}${file}`
	];
	if(file === 'index.html') {
		pathOptions.push(`${_static.href ?? ''}`);
	}
	return pathOptions;
}

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
			contentType: mime.lookup(symLink),
			content: readFileSync(symLink).toString('utf-8'),
			hrefs: pathify(file, config.static)
		};
	});
	return { mountedPath, filesMounted };
}
