import { ServerOptions, Server } from 'http';
export type UserStaticConfig = {
	href ?: string; //prefix path to access the directory on router
	path ?: string; //path on filesystem to reflect
	mimeType ?: string; //default content type
	headers ?: [string, string][] //default headers to append
}
export type StaticConfig = Required<UserStaticConfig>

export type HTTPConfig = Required<UserHTTPConfig>

export interface UserHTTPConfig extends ServerOptions {
    port ?: number;
    coldInit ?: boolean;
    hostname ?: string;
	static ?: UserStaticConfig;
    throwWarnings ?: boolean;
	handler ?: (IncomingMessage) => void;
	middleware ?: () => void;
	onMount ?: () => void | Function;
}

export interface SimpleHTTP extends Server {
	diagnostics: string[];
}
