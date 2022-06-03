import { HTTPuppyServer } from '../types';
import { createReadStream } from 'fs';
import useContentType from './content-type';
import { useHeaders } from '../middleware';
import { bufferTypes } from './_constants';

/**
 * @internal isBufferType
 * @description check whether or not the file needs to be written into a stream as a buffer, or utf-8 content
 * @param file the file read by the VFS that is undergoing buffer check
 * @returns boolean whether or not it needs to be written as a buffer or can be served directly
 */
export function isBufferType(
	file: string
): boolean {
	return bufferTypes.filter((el) => file.includes(el)).length > 0;
}

/**
 * @internal useVirtualStreamReader
 * @description apply virtual stream reader to the given request, and close stream on exit
 * @param pathData the resulting mount file from useStaticUrlParser call in useStaticMount
 * @param res the current response being handled by the server
 * @returns
 */
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
}
