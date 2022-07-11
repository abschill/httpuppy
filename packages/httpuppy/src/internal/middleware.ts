/**
 * @internal
 * @description middleware hooks, such mime type header resolution / header setting
 */
import { etag } from './include/etag';
import {
	ENV_DEFAULT_CONTENT_TYPE,
	ENV_STATUS_404,
	HTTPWriterOptions,
	HTTPHeaders,
	HTTPuppyResponse,
	HTTPServerOptions
} from '.';
/**
 *
 * @param options the writer options to apply the headers against
 * @param config the server config to apply against
 * @returns default list of http headers based on given config cache settings / content type of the request options
 */
export function apply_headers(
	options: HTTPWriterOptions,
	config: HTTPServerOptions
): HTTPHeaders {
	const applyHeaders: HTTPHeaders = [
		{
			'Content-Type': options.type ?? ENV_DEFAULT_CONTENT_TYPE,
		},
	];

	// set weak etag generation if applicable
	if (config.cache) {
		applyHeaders.push({
			ETag: etag(options.virtualFile.fileName, { weak: true }),
		});
	}
	return applyHeaders;
}


export function apply_404(
	res: HTTPuppyResponse
) {
	if(res.writable) {
		res.writeHead(404, ENV_STATUS_404);
		res.end();
		return;
	}
}
