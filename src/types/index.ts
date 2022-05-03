import { ServerOptions, Server } from 'http';
export interface UserHTTPConfig extends ServerOptions {
    port ?: number;
    coldInit ?: boolean;
    hostname: string;
    throwWarnings ?: boolean;

}
export type HTTPConfig = Required<UserHTTPConfig>
export interface SimpleHTTPServer extends Server {}
