import { ServerOptions, Server } from 'http';
export type UserStaticConfig = {
	href ?: string; // prefix path to access the directory on router
	path ?: string; // path on filesystem to reflect
	mimeType ?: string; // default content type
	indexType ?: string; // file to use as the index of a directory (default: index.html)
}
export type StaticConfig = Required<UserStaticConfig>
export type HTTPConfig = Required<UserHTTPConfig>
export interface UserHTTPConfig extends ServerOptions {
    port ?: number; // port to run server on (default: 80)
    coldInit ?: boolean; // whether or not to return the server or autostart it from config (default: false)
    hostname ?: string; // hostname for the server itself (default: 127.0.0.1)
	static ?: UserStaticConfig; // static config options for any static content
    throwWarnings ?: boolean; // whether or not to treat warnings as errors (default: false)
	handler ?: (IncomingMessage) => void;
	middleware ?: () => void;
	onMount ?: () => void | Function; // on mount runs once when the server is started
}
export interface SimpleHTTP extends Server {
	diagnostics: string[];
}

export type ValidURLPath = {
	requestUrl: string;
	transformedUrl: string;
}
