import { Server as stlServer } from 'http';
import { ServerOptions } from 'http';

export type DiagnosticLog = {
	msg			: string;
}
export interface Runtime extends stlServer  {
	diagnostics	: DiagnosticLog[];
}

export type MountedFile = {
	reqUrl		: string;
	symLink		: string;
	contentType	: any | any[];
	fileName	: string;
	hrefs		: string[];
}

export type VirtualFS = {
	mountPath	: string;
}

export type HTTPuppySleep = () => Promise<void>;

export type UserStaticConfig = {
	href 		?: string; // prefix path to access the directory on router
	path 		?: string; // path on filesystem to reflect
	mimeType 	?: string; // default content type
	indexType 	?: string; // file to use as the index of a directory (default: index.html)
};

/**
 * @interface Cache Settings
 * @description All supported cache control options in camelcase
 * @member maxAge maximum age to keep a response as "fresh" after its etag is generated
 * @member sMaxAge maxAge for shared caches
 * @member noCache response can be stored in caches, but must be revalidated with origin before reuse
 * @member noStore caches of any kind (private or shared) should not store this response
 * @member noTransform any intermediary (regardless of whether it implements a cache) shouldn't transform the response contents
 * @member mustRevalidate response can be stored in caches and can be reused while fresh. If the response becomes stale, it must be validated with the origin server before reuse
 * @member mustUnderstand should store the response only if it understands the requirements for caching based on status code
 * @member proxyRevalidate response directive is the equivalent of must-revalidate, but specifically for shared caches only
 * @member immutable response directive indicates that the response will not be updated while it's fresh.
 * @member private response can be stored only in a private cache (e.g. local caches in browsers)
 * @member public can be stored in a shared cache
 * @member staleWhileRevalidate the cache could reuse a stale response while it revalidates it to a cache
 * @member staleIfError  cache can reuse a stale response when an origin server responds with an error (500, 502, 503, or 504)
 */
export type CacheSettings = {
	maxAge					?: number;
	sMaxAge					?: number;
	noCache					?: boolean;
	noStore					?: boolean;
	noTransform 			?: boolean;
	mustRevalidate			?: boolean;
	mustUnderstand			?: boolean;
	proxyRevalidate 		?: boolean;
	immutable				?: boolean;
	private 				?: boolean;
	public 					?: boolean;
	staleWhileRevalidate	?: boolean;
	staleIfError			?: boolean;
};

export const defaultCacheSettings:
CacheSettings = {
	maxAge: 3600,
	mustRevalidate: true,
	public: true
};

export function fromDefaultCacheSettings(
	settings: CacheSettings
): CacheSettings {
	return {
		...defaultCacheSettings,
		...settings,
	};
}

export type GoodboyCacheSettings = Required<CacheSettings>;
export type GoodboyStaticConfig = Required<UserStaticConfig>;
export type GoodboyHTTPConfig = Required<uOptions>;

export type UserMiddlewareOption = {
	href		: string;
	handler		: any;
	// todo - debug optins per middleware
};

export type HTTPHandlerFunction<T> = (IncomingMessage) => T;

/**
 * @interface uOptions
 * @member port the port number to run the configuration with (default: 80)
 * @member coldInit whether or not to return the server or autostart it from config (default: false)
 * @member hostname hostname for the server itself (default: 127.0.0.1)
 * @member static virtual file system options, static directories basically
 * @member throwWarnings false = print warnings true = throw them as errors (default: false)
 * @member handler default handler if you would like to override the request chain and handle each url externally
 * @member middleware list of middleware instances to run along the server
 * @member onMount a function to run once after the server is mounted (doesn't run on return if `coldInit` is set to true)
 * @member cache options for caching, standard http but camelcase
 * @member secure boolean for https instead of http, requires follow up options in secureContext
 * @member secureContext options for resolving the SSL cert / key
 */
export interface uOptions extends ServerOptions {
    port 			?: number;
    coldInit 		?: boolean;
    hostname 		?: string;
	static 			?: UserStaticConfig;
    throwWarnings 	?: boolean;
	handler 		?: HTTPHandlerFunction<void>;
	middleware 		?: UserMiddlewareOption[]
	onMount 		?: () => void | Function;
	cache 			?: CacheSettings;
	secure			?: boolean;
	secureContext	?: {
		key: string;
		cert: string;
		dhparam ?: string;
	}
}

export const defaultHTTPConfig:
uOptions = {
	port: 80,
	coldInit: false,
	hostname: '127.0.0.1',
	throwWarnings: false,
	cache: defaultCacheSettings
};

export function fromDefaultHTTPConfig(
	config: uOptions
): uOptions {
	return {
		...defaultHTTPConfig,
		...config
	};
}
