import { ServerOptions, Server } from 'http';
export type UserStaticConfig = {
	href 		?: string; // prefix path to access the directory on router
	path 		?: string; // path on filesystem to reflect
	mimeType 	?: string; // default content type
	indexType 	?: string; // file to use as the index of a directory (default: index.html)
}
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
}

export type GoodboyCacheSettings = Required<CacheSettings>;
export type GoodboyStaticConfig = Required<UserStaticConfig>;
export type GoodboyHTTPConfig = Required<UserHTTPConfig>;

export type UserMiddlewareOption = {
	href		: string;
	handler		: any;
	// todo - debug optins per middleware
}


/**
 * @interface UserHTTPConfig
 * @member port the port number to run the configuration with
 * @member coldInit whether or not to autostart the server on return or to just return the server for later consumption
 * @member hostname localhost or something else if you set this
 * @member static virtual file system options, static directories basically
 * @member throwWarnings false = print warnings true = throw them as errors
 * @member handler default handler if you would like to override the request chain and handle each url externally
 * @member middleware list of middleware instances to run along the server
 * @member onMount a function to run once after the server is mounted (doesn't run on return if `coldInit` is set to true)
 */
export interface UserHTTPConfig extends ServerOptions {
    port 			?: number; // port to run server on (default: 80)
    coldInit 		?: boolean; // whether or not to return the server or autostart it from config (default: false)
    hostname 		?: string; // hostname for the server itself (default: 127.0.0.1)
	static 			?: UserStaticConfig; // static config options for any static content
    throwWarnings 	?: boolean; // whether or not to treat warnings as errors (default: false)
	handler 		?: (IncomingMessage) => void;
	middleware 		?: UserMiddlewareOption[]
	onMount 		?: () => void | Function; // on mount runs once when the server is started
	cache 			?: CacheSettings;
}
