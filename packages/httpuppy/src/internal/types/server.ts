import { CacheSettings } from '.';
import { LogLevel } from '..';
/**
 * Config for useServer hook
 */
 export interface HTTPServerOptions {
	cache?: CacheSettings; //options for caching, standard http but camelcase
	clustered?: boolean; //automatically cluster the server process to utilize multiple core ipc it doesnt do anything in x.2.z
	handler?: any; //default handler if you would like to override the request chain and handle each url manually thru the standard library
	hostname?: string; //hostname for the server itself (default: 127.0.0.1)
	log_level?: LogLevel;
	log_error_file?: string;
	log_event_file?: string;
	port?: number; //the port number to run the configuration with (default: 80)
	secure?: {
		//options for resolving the SSL cert / key
		key: string;
		cert: string;
		dhparam?: string;
	};
	ttl_default?: number;
	local_storage_path?: string; //the dir to write files uploaded from multipart forms from request
	throw_warnings?: boolean; //false = print warnings true = throw them as errors (default: false)
}
