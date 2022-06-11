/**
 * @internal mount-fs
 * @description virtual file system mount hooks
 */
import { useLocalMimeType } from '.';
import { useStaticURLParser } from './url';
import walk from 'walkdir';
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
	useVirtualStreamReader,
	useWriter
} from '../writer';
/**
 * @function useCleanPaths
 * @description list possible hrefs to be used for given vpath
 * @param file the path of the file to check any aliases for
 * @param _static the static config options of the calling process
 * @returns list of strings defining possible hrefs
 */
function useCleanPaths(
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
 * @param server config options for the runtime that wants to mount an FS
 * @returns
 */
export function useMountedFS(
	server : HTTPuppyServer
): VirtualFileSystem {
	if(!server.pConfig?.static?.path) {
		throw 'error: fs attempted to mount with no path set in configuration';
	}
	const mountedPath = server.pConfig.static.path;
	const mountedFiles = walk.sync(mountedPath).map(file => {
		const asHref = file.split(process.cwd()).pop()?.split(mountedPath).pop();
		const fileName = asHref?.split('/').pop();
		return <MountedFile> {
			fileName,
			symLink: file,
			contentType: <HTTPHeader>useLocalMimeType(file),
			hrefs: useCleanPaths(fileName ?? '', <UserStaticConfig>server.pConfig.static)
		};
	});
	// filesMounted is the accessible file tree that can be used against the upcoming handlers
	return {
		mountedPath,
		mountedFiles
	};
}

export function useVirtualRequestHandler(
	req		: HTTPuppyRequest,
	res		: HTTPuppyResponse
): void {
	const virtualFile = useStaticURLParser(req, res);
	if(isBufferType(<string>req.url)) {
		return useVirtualStreamReader(virtualFile, res);
	}
	else {
		return useWriter(res, res._process.pConfig, {
			status: 200,
			statusText: 'ok',
			type: virtualFile.contentType[1],
			virtualFile
		});
	}
}
