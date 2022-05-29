import {
	HTTPuppyOptions,
	iPuppy
} from 'types';
import { useEtag } from './internal/etag';

/**
 *
 * @param options the writer options to apply the headers against
 * @param config the server config to apply against
 * @returns default list of http headers based on given config cache settings / content type of the request options
 */
export function useHeaders(
	options : iPuppy.HTTPuppyWriterOptions, config: HTTPuppyOptions.UserHTTPConfig
): iPuppy.HTTPHeaders {
	const applyHeaders: iPuppy.HTTPHeaders = [
		[
			'Content-Type',
			options.type ?? 'text/plain'
		]
	];

	// set weak etag generation if applicable
	if(config.cache) {
		applyHeaders.push(['ETag', useEtag(options.virtualFile.fileName, { weak: true })]);
	}

	return applyHeaders;
}
