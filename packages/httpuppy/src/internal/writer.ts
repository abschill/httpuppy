/**
 * @internal
 */
import { createReadStream } from 'fs';
import {
	ENV_STATUS_OK,
	VirtualWriteableFile,
} from '.';
import { HTTPuppyResponse } from 'httpuppy-types';
import { __mime_type } from 'httpuppy-vfs';
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
			res.writeHead(200, ENV_STATUS_OK, [['Content-Type', <string>__mime_type(pathData.symLink ?? '')]]);
			res.write(chunk);
		});
		// end response when data is done streaming from vfile
		stream.on('end', (_: any) => res.end());
	}
	return;
}
