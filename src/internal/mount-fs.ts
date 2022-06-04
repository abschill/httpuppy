/**
 * @internal mount-fs
 * @description virtual file system mount hooks
 */
import { join, resolve } from 'path';
import { readdirSync, readFileSync } from 'fs';
import { HTTPuppyServer } from '../types';
import useContentType from './content-type';
import { UserStaticConfig } from '../types/server';
import { useStaticURLParser } from './static/url';
import { applyMiddleware } from './_middleware';
import { emitWarning } from 'process';
import { use404 } from './error';
import {
	isBufferType,
	useVirtualStreamReader,
	useWriter
} from './writer';

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
	const mountedPath = join(config.static?.path ?? './');
	// filesMounted is the accessible file tree that can be used against the upcoming handlers
	const filesMounted = readdirSync(mountedPath).map(file => {
	const symLink = resolve(mountedPath, file);
	return {
		fileName: file,
		symLink,
		contentType: useContentType(symLink),
		content: readFileSync(symLink),
		hrefs: useCleanPaths(file, <UserStaticConfig>config.static)
	};

	});
	return { mountedPath, filesMounted };
}


/**
 *
 * @param config Configuration for runtime that needs static mount
 * @param server Runtime to apply static handler mount point & error diagnostic list
 */
export function useStaticMount(
	config		: HTTPuppyServer.HTTPuppyServerOptions,
	server		: HTTPuppyServer.Runtime
) {
	/**
	 * @todo
	 * add mount for recursive directory walker initially, then handle request based on the original tree rather than generating a tree for every request and handling off it
	 */
	// mount configured FS path to the request handler
	server.on('request', (
		req: HTTPuppyServer.HTTPuppyRequest,
		res: HTTPuppyServer.HTTPuppyResponse
	) => {
		try {
			if(config.middleware && config.middleware.length > 0) applyMiddleware(config, req, res);
			const pathData = useStaticURLParser(req, config);
			server.emit('static-get', pathData);
			if(req.method === 'GET') {
				if(isBufferType(<string>req.url)) {
					return useVirtualStreamReader(pathData, res);
				}
				else {
					return useWriter(res, config, {
						status: 200,
						statusText: 'ok',
						type: pathData.contentType,
						virtualFile: pathData
					});
				}
			}
		}
		catch(e: unknown) {
			emitWarning(JSON.stringify(e));
			return use404(res);
		}
	});

	server.on('error', (e) =>
		server.diagnostics.push({
			msg: e.message
		})
	);
}
