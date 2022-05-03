import { createServer, IncomingMessage } from 'http';
import { UserHTTPConfig, HTTPConfig, SimpleHTTPServer } from './types';
import { emitWarning } from 'process';

function cleanConfig(
    conf: UserHTTPConfig
): HTTPConfig {
    const config = {...conf};
    if(!config.port) {
        config.port = 80;
    }

    if(!config.hostname) {
        config.hostname = '127.0.0.1';
    }

    return <HTTPConfig>config;
}

export function spawnWebServer (
    conf: UserHTTPConfig, 
    reqHandler ?: (IncomingMessage) => void,
    mountCallback ?: () => void | Function
): SimpleHTTPServer {
    const config = cleanConfig(conf);
    const diagnostics = [];
    let hasWarnings = false;

    if(!reqHandler) {
        const msg = 'Request Handler no-op, nothing is handling your requests';
        emitWarning(msg, (new Error().stack.split("at ")[1]));
        diagnostics.push(msg);
        hasWarnings = true;
    }

    const server = createServer();

    if(mountCallback) server.once('listening', mountCallback);

    if(!config.coldInit) {
        server.listen(config.port, config.hostname);
    }

    if(hasWarnings && config.throwWarnings) {
        throw new Error(`
Server couldnt initialize without issues, if you'd like to suppress these errors, set the config option "throwWarnings": false
`);
    }
    const ss = <SimpleHTTPServer>server;
    ss.on('request', reqHandler);
    return ss;
}


