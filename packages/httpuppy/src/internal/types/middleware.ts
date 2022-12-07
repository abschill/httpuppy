import { CacheSettings } from '.';

export const defaultCacheSettings: CacheSettings = {
	maxAge: 3600,
	mustRevalidate: true,
	public: true
};

export function fromDefaultCacheSettings(settings: CacheSettings): CacheSettings {
	return {
		...defaultCacheSettings,
		...settings
	};
}
