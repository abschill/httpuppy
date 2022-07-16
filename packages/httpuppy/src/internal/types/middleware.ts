import {
	HTTPuppyRequest,
	HTTPuppyResponse,
	CacheSettings
} from 'httpuppy-types';

export const defaultCacheSettings: CacheSettings = {
	maxAge: 3600,
	mustRevalidate: true,
	public: true,
};

export function fromDefaultCacheSettings(
	settings: CacheSettings
): CacheSettings {
	return {
		...defaultCacheSettings,
		...settings,
	};
}

export type iExitHandler = undefined | (() => Promise<void>) | (() => void);
export type iHandlerType = (
	req: HTTPuppyRequest,
	res: HTTPuppyResponse
) => Promise<void> | ((req: HTTPuppyRequest, res: HTTPuppyResponse) => void);
export type UserMiddlewareOption = {
	href: string;
	handler: iHandlerType;
};
