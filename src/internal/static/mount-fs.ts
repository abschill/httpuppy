/**
 * @internal mount-fs
 * @description virtual file system mount hooks
 */
import { VirtualWriteableFile } from '../types';
import { mimeType } from '.';
import { resolve } from 'path';
import {
	MountedFile,
	VirtualFileSystem
} from '../types';
import {
	HTTPuppyServer,
	HTTPHeader,
	HTTPuppyRequest,
	HTTPuppyResponse,
	UserStaticConfig,
} from '../../';
import {
	isBufferType,
	virtualStreamReader,
	useWriter
} from '../writer';
import { readdirSync } from 'fs';

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
export function useMountedFS(
	server : HTTPuppyServer
): VirtualFileSystem {
	if(!server.pConfig?.static?.path) {
		server._logger.log(
			'error',
			`${server.pConfig.log?.log_prefix} error: fs attempted to mount with no path set in configuration`
		);
		throw 'error: fs attempted to mount with no path set in configuration';
	}
	const mountedPath = server.pConfig.static.path;
	const mountedFiles = readdirSync(mountedPath).map(file => {
		const symLink = resolve(mountedPath, file);
		return <MountedFile> {
			fileName: file,
			symLink,
			contentType: <HTTPHeader>mimeType(symLink),
			hrefs: indexPaths(file, <UserStaticConfig>server.pConfig.static)
		};
	});
	// filesMounted is the accessible file tree that can be used against the upcoming handlers
	return {
		mountedPath,
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
	const virtualFile = getStaticURL(req, res);
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
