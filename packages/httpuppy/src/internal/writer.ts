/**
 * @internal
 */
import { createReadStream } from 'fs';
import { ENV_STATUS_OK, VirtualWriteableFile, HTTPuppyResponse } from '@httpuppy/common';
import { $vMimeType } from '@httpuppy/vfs';
/**
 * @internal useVirtualStreamReader
 * @remarks apply virtual stream reader to the given request, and close stream on exit
 * @param pathData - the resulting mount file from useStaticUrlParser call in useStaticMount
 * @param res - the current response being handled by the server
 * @returns
 */
export function $vStreamReader(
	pathData: VirtualWriteableFile,
	res: HTTPuppyResponse
): void {
	if (!res.writable) {
		res._process.logger.warn(
			'warning: write attempt on an ended stream in vfs_stream_reader'
		);
		return;
	}
	if (pathData && pathData.symLink) {
		// create read stream for virtual file to read
		const stream = createReadStream(pathData.symLink);
		stream.on('data', (chunk) => {
			// type the symlink of the streamable file, write into the response stream
			res.writeHead(200, ENV_STATUS_OK, [
				['Content-Type', <string>$vMimeType(pathData.symLink ?? '')]
			]);
			res.write(chunk);
		});
		// end response when data is done streaming from vfile
		stream.on('end', () => res.end());
	}
	return;
}
