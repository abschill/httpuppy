import { UserHTTPConfig, HTTPConfig } from '../types';

export function cleanConfig (
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