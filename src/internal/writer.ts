import {
	HTTP_RES,
	HTTPuppyServer
} from '../types';
import { createReadStream } from 'fs';
import useContentType from './content-type';
import { useHeaders } from '../middleware';

export const bufferTypes = [
	'png',
	'jpg',
	'jpeg',
	'apng',
	'webp',
	'gif',
	'avif',
	'mp4',
	'mp3',
	'wav',
	'webm',
	'bmp',
	'ico',
	'tiff'
];

/**
 *
 * @param file the file read by the VFS that is undergoing buffer check
 * @returns whether or not it needs to be written as a buffer or can be served directly
 */
export function isBufferType(
	file: string
): boolean {
	return bufferTypes.filter((el) => file.includes(el)).length > 0;
}

export function useVirtualStreamReader(
	pathData	: HTTPuppyServer.MountedFile,
	res			: HTTPuppyServer.HTTPuppyResponse
): void {
	if(!res.writable) {
		console.warn('warning: write attempt on an ended stream in useStreamReader');
		return;
	}
	if(pathData && pathData.symLink) {
		// create read stream for virtual file to read
		const stream = createReadStream(pathData.symLink);
		stream.on('data', (chunk) => {
			// type the symlink of the streamable file, write into the response stream
			res.writeHead(200, 'ok', useContentType(pathData.symLink));
			res.write(chunk);
		});
		// end response when data is done streaming from vfile
		stream.on('end', _ => res.end());
	}
	return;
}
/**
 *
 * @param res the response to write to
 * @param config the config to base the write on
 * @param options the writer instance options
 * @returns
 */
export function useWriter(
	res		: HTTPuppyServer.HTTPuppyResponse,
	config	: HTTPuppyServer.uOptions,
	options	: HTTPuppyServer.HTTPuppyWriterOptions
): void {
	if(!res.writable) {
		console.warn('warning: write attempt on an ended stream in useWriter');
		return;
	}
	if(options.virtualFile.symLink) {
		res.writeHead(options.status, options.statusText, useHeaders(options, config));
		return useVirtualStreamReader(options.virtualFile, res);
	}
	else {
		// todo - 404 path config option
		res.writeHead(404, 'page not found', ['Content-Type', 'text/plain']);
		res.end('404: page not found');
	}
}
