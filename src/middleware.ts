import {
	HTTPuppyOptions,
	iPuppy
} from 'types';
import { useEtag } from './internal/etag';

/**
 *
 * @param options the writer options to apply the headers against
 * @param config the server config to apply against
 * @returns
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
		applyHeaders.push(['ETag', useEtag(options.asString, { weak: true })]);
	}

	return applyHeaders;
}
