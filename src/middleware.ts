import {
	HTTPuppyOptions,
	iPuppy
} from 'types';
import { useEtag } from './internal/etag';
export function useHeaders(
	options: iPuppy.HTTPBodyWriterOptions, config: HTTPuppyOptions.UserHTTPConfig
): iPuppy.HTTPHeaders {
	const applyHeaders: iPuppy.HTTPHeaders = [
		[
			'Content-Type',
			options.type
		]
	];

	if(config.cache) {
		applyHeaders.push(['ETag', useEtag(options.body, { weak: true })]);
	}

	return applyHeaders;
}
