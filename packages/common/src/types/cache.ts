/**
 * Cache Types
 */
/**
 * HTTP Cache Settings
 * @remarks All supported cache control options in camelcase
 */
export type CacheSettings = {
	/**
	 * maximum age to keep a response as "fresh" after its etag is generated
	 */
	maxAge?: number;
	/**
	 * maxAge for shared caches
	 */
	sMaxAge?: number;
	/**
	 * response can be stored in caches, but must be revalidated with origin before reuse
	 */
	noCache?: boolean;
	/**
	 * caches of any kind (private or shared) should not store this response
	 */
	noStore?: boolean;
	/**
	 * response can be stored in caches and can be reused while fresh. If the response becomes stale, it must be validated with the origin server before reuse
	 */
	noTransform?: boolean;
	/**
	 * response can be stored in caches and can be reused while fresh. If the response becomes stale, it must be validated with the origin server before reuse
	 */
	mustRevalidate?: boolean;
	/**
	 * should store the response only if it understands the requirements for caching based on status code
	 */
	mustUnderstand?: boolean;
	/**
	 * response directive is the equivalent of must-revalidate, but specifically for shared caches only
	 */
	proxyRevalidate?: boolean;
	/**
	 *
	 */
	immutable?: boolean; // response directive indicates that the response will not be updated while it's fresh.
	/**
	 * response can be stored only in a private cache (e.g. local caches in browsers)
	 */
	private?: boolean;
	/**
	 * can be stored in a shared cache
	 */
	public?: boolean;
	/**
	 * the cache could reuse a stale response while it revalidates it to a cache
	 */
	staleWhileRevalidate?: boolean;
	/**
	 * cache can reuse a stale response when an origin server responds with an error (500, 502, 503, or 504)
	 */
	staleIfError?: boolean;
};
