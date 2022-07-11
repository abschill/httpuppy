/**
 * @internal
 */
import { createReadStream } from 'fs';
import { HTTPServerOptions } from '..';
import {
	apply_headers,
	bufferTypes,
	ENV_STATUS_OK,
	HTTPuppyResponse,
	HTTPWriterOptions,
	mime_type,
	VirtualWriteableFile
} from '.';
/**
 * @private
 */
export const isBufferType = (file: string) =>
	bufferTypes.filter((el) => file.includes(el)).length > 0;

/**
 * @internal useVirtualStreamReader
 * @description apply virtual stream reader to the given request, and close stream on exit
 * @param pathData the resulting mount file from useStaticUrlParser call in useStaticMount
 * @param res the current response being handled by the server
 * @returns
 */
export function vfs_stream_reader(
	pathData: VirtualWriteableFile,
	res: HTTPuppyResponse
): void {
	if (!res.writable) {
		res._process._logger.warn(
			'warning: write attempt on an ended stream in vfs_stream_reader'
		);
		return;
	}
	if (pathData && pathData.symLink) {
		// create read stream for virtual file to read
		const stream = createReadStream(pathData.symLink);
		stream.on('data', (chunk) => {
			// type the symlink of the streamable file, write into the response stream
			res.writeHead(200, ENV_STATUS_OK, mime_type(pathData.symLink ?? ''));
			res.write(chunk);
		});
		// end response when data is done streaming from vfile
		stream.on('end', (_: any) => res.end());
	}
	return;
}

/**
 * @internal
 * @private
 * @param res the response to write to
 * @param config the config to base the write on
 * @param options the writer instance options
 * @returns
 */
export function use_writer(
	res: HTTPuppyResponse,
	config: HTTPServerOptions,
	options: HTTPWriterOptions
): void {
	if (!res.writable) {
		res._process._logger.warn(
			'warning: write attempt on an ended stream in use_writer'
		);
		return;
	}
	if (options.virtualFile.symLink) {
		res.writeHead(
			options.status,
			options.statusText,
			...apply_headers(options, config)
		);
		return vfs_stream_reader(options.virtualFile, res);
	}
}
