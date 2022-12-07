import { CacheSettings } from '.';

export const DEFAULT_HTTP_CACHE: CacheSettings = {
	maxAge: 3600,
	mustRevalidate: true,
	public: true
};

export function fromDefaultCacheSettings(settings: CacheSettings): CacheSettings {
	return {
		...DEFAULT_HTTP_CACHE,
		...settings
	};
}
