/**
 * @internal
 */
import { createReadStream } from 'fs';
import { bufferTypes } from './include';
import { useLocalMimeType } from './static';
import { useHeaders } from './middleware';
import { VirtualWriteableFile } from './types';
import {
	HTTPuppyResponse,
	HTTPuppyServerOptions,
} from '..';
/**
 * @private
 */
 export type HTTPuppyWriterOptions = {
	status		: number;
	statusText	: string;
	type		: string;
	virtualFile : VirtualWriteableFile;
}
/**
 * @private
 */
export const isBufferType = (file: string) => (bufferTypes.filter((el) => file.includes(el)).length > 0);

/**
 * @internal useVirtualStreamReader
 * @description apply virtual stream reader to the given request, and close stream on exit
 * @param pathData the resulting mount file from useStaticUrlParser call in useStaticMount
 * @param res the current response being handled by the server
 * @returns
 */
export function useVirtualStreamReader(
	pathData	: VirtualWriteableFile,
	res			: HTTPuppyResponse
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
			res.writeHead(200, 'ok', useLocalMimeType(pathData.symLink ?? ''));
			res.write(chunk);
		});
		// end response when data is done streaming from vfile
		stream.on('end', (_: any) => res.end());
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
	res		: HTTPuppyResponse,
	config	: HTTPuppyServerOptions,
	options	: HTTPuppyWriterOptions
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
