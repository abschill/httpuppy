import { iServer, Server } from '../../types';


export function useStartup(
	config: Required<iServer.UserHTTPConfig>,
	server: Server,
	diagnostics
) {
	if(config.onMount) server.once('listening', config.onMount);

	// cold init would just be for manually setting the listener up on the port
    if(!config.coldInit) {
        server.listen(config.port, config.hostname);
    }

    if(config.throwWarnings && diagnostics.length > 0) {
        throw new Error(`
		Server couldnt initialize without issues, if you'd like to suppress these errors, set the config option "throwWarnings": false
		Diagnostic List:\n
		${JSON.stringify(diagnostics)}
		`);
    }
	const ss = <iServer.SimpleHTTP>server;
	ss.diagnostics = diagnostics;
	return ss;
}
