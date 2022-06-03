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

export function isBufferType(file: string) {
	return bufferTypes.filter((el) => file.includes(el)).length > 0;
}

export function useStreamReader(
	pathData	: HTTPuppyServer.MountedFile,
	res			: HTTP_RES
): void {
	if(!res.writable) {
		console.warn('warning: write attempt on an ended stream in useStreamReader');
		return;
	}
	if(pathData && pathData.symLink) {
		const stream = createReadStream(pathData.symLink);
		stream.on('data', (chunk) => {
			// get content type of
			res.writeHead(200, 'ok', useContentType(pathData.symLink));
			res.write(chunk);
		});
		// end response when data is done streaming from file
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
	res		: HTTP_RES,
	config	: HTTPuppyServer.uOptions,
	options	: HTTPuppyServer.HTTPuppyWriterOptions
): void {
	if(!res.writable) {
		console.warn('warning: write attempt on an ended stream in useWriter');
		return;
	}
	res.writeHead(options.status, options.statusText, useHeaders(options, config));
	return useStreamReader(options.virtualFile, res);
}
