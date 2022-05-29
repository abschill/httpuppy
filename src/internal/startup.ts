import {
	HTTPuppyOptions,
	HTTPuppyServer,
	Server
} from '../types';

export function useStartup(
	config: HTTPuppyOptions.UserHTTPConfig,
	server: Server,
	diagnostics
) {
	if(config.onMount) server.once('listening', config.onMount);
    if(config.throwWarnings && diagnostics.length > 0) {
        throw new Error(`
		Server couldnt initialize without issues, if you'd like to suppress these errors, set the config option "throwWarnings": false
		Diagnostic List:\n
		${JSON.stringify(diagnostics)}
		`);
    }
	const ss = <HTTPuppyServer.Runtime>server;
	ss.diagnostics = diagnostics;
	return ss;
}
