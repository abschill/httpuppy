import { HTTPuppyServer } from '../types';
import { emitWarning } from 'process';

/**
 * @internal useConfig
 * @description hook for applying default config settings against given user input
 * @param conf the submitted user input
 * @param diagnostics diagnostic log of the top level
 * @returns cleaned user config
 */
export function useConfig(
	conf		: HTTPuppyServer.uOptions,
	diagnostics : HTTPuppyServer.DiagnosticLog[]
): HTTPuppyServer.uOptions {
    const config = {...conf};
    if(!config.port) config.port = 80; //default http port

    if(!config.hostname) config.hostname = '127.0.0.1'; // default lh
	if(!config.throwWarnings || (config.throwWarnings === null)) config.throwWarnings = false;
	if(config.static) {
		config.static = {
			href: '/', // base href to access with requests
			path: '.', // path to map to the href
			...config.static // go last to just use href and path as defaults to override, config is the user input
		};
	}

	if(!conf.handler && !conf.static) {
        const msg = 'Request Handler no-op, nothing is handling your requests';
        emitWarning(msg, (new Error().stack.split("at ")[1]));
        diagnostics.push({msg});
    }

    return <HTTPuppyServer.uOptions>config;
}

