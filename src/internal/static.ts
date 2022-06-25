import { lookup } from 'mime-types';
import { resolve } from 'path';
import { readdirSync } from 'fs';
import {
	HTTPuppyRequest,
	HTTPuppyResponse,
	MountedFile,
	VirtualFileSystem,
	VirtualWriteableFile,
	HTTPHeader,
	HTTPuppyServer
} from './types';
import {
	isBufferType,
	virtualStreamReader,
	useWriter
} from './writer';

export type UserStaticConfig = {
	href 		?: string; // prefix path to access the directory on router
	path 		?: string; // path on filesystem to reflect
};

/**
 * @private
 *
 */
 function indexPaths(
	file	: string,
	_static : UserStaticConfig
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
 * @private
 *
 */
export function asVirtualFile(
	file: string,
	symLink: string,
	staticConfig: UserStaticConfig
): MountedFile {
	return <MountedFile> {
		fileName: file,
		symLink,
		contentType: <HTTPHeader>mimeType(symLink),
		hrefs: indexPaths(file, staticConfig)
	};
}

/**
 * @private
 *
 */
export function useMountedFS(
	server : HTTPuppyServer
): VirtualFileSystem {
	if(!server.pConfig?.static?.path) {
		server._logger.error('fs attempted to mount with no path set in configuration');
		throw 'error: fs attempted to mount with no path set in configuration';
	}
	const mountedPath = server.pConfig.static.path;
	const mountedFiles = readdirSync(mountedPath).map(file => {
		const symLink = resolve(mountedPath, file);
		return asVirtualFile(file, symLink, <UserStaticConfig>server.pConfig.static);
	});
	// filesMounted is the accessible file tree that can be used against the upcoming handlers
	return {
		mountedPath,
		mountedHref: server.pConfig.static.href ?? '/',
		mountedFiles
	};
}

/**
 * @private
 *
 */
export function virtualRequestHandler(
	req		: HTTPuppyRequest,
	res		: HTTPuppyResponse
): void {
	const virtualFile = getStaticURL(req);
	if(isBufferType(<string>req.url)) {
		return virtualStreamReader(virtualFile, res);
	}
	else {
		return useWriter(res, res._process.pConfig, {
			status: 200,
			statusText: 'ok',
			type: virtualFile.contentType['Content-Type'],
			virtualFile
		});
	}
}

/**
 * @private
 *
 */
export function getStaticURL(
	req		: HTTPuppyRequest
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


/**
 * @internal useLocalMimeType
 * @description hook for determining content type of a virtual fpath on the system
 * @param fpath the file path of the type to resolve
 * @returns the tuple representing the content type header for the static file
*/
export function mimeType(
	fpath: string
): HTTPHeader {
	if(fpath === '') return {
		'Content-Type': 'text/plain'
	};
	const matchType = lookup(fpath);
	return {
		'Content-Type': (matchType ? matchType : 'text/plain')
	};
}
export function useStaticHandler(
	server	: HTTPuppyServer
) {
	server.on('request', (
		req: HTTPuppyRequest,
		res: HTTPuppyResponse
	) => {
		req._process = server;
		res._process = server;
		if(!server.pConfig.static || req.method !== 'GET' ||
		(server.pConfig.static.href && (!req.url?.includes(server.pConfig.static.href)))) {
			return;
		}
		if(req._process._vfs.mountedFiles.map(file => file.hrefs).flat().includes(<string>req.url)) {
			server.emit('static-get', req);
			return virtualRequestHandler(req, res);
		}
		return;
	});
}

