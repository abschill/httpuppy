import { UserHTTPConfig, HTTPConfig } from '../types';
import { emitWarning } from 'process';
export function cleanConfig (
    conf: UserHTTPConfig,
	diagnostics: any[]
): HTTPConfig {
    const config = {...conf};
    if(!config.port) {
        config.port = 80;
    }

    if(!config.hostname) {
        config.hostname = '127.0.0.1';
    }

	if(config.static) {
		config.static = {
			href: '/', path: '.', ...config.static
		};
	}
	if(!conf.handler && !conf.static) {
        const msg = 'Request Handler no-op, nothing is handling your requests';
        emitWarning(msg, (new Error().stack.split("at ")[1]));
        diagnostics.push(msg);
    }

    return <HTTPConfig>config;
}

