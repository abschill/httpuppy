/**
 * @internal
 */
export * from './_constants';
export * from './etag';
import GracefulShutdown from 'http-graceful-shutdown';
import { HTTPServer } from '../types';
import { HTTPuppySleep } from '../types';
export {
	createServer as create_secure_server,
	ServerOptions as https_options,
} from 'https';
export {
	createServer as create_server,
	Server as node_http_server,
	IncomingMessage as node_http_request,
	ServerResponse as node_http_response,
} from 'http';
/**
 *
 * @param s http server to shut down
 * @returns void promise to gracefully shut down
 */
export async function shutdown(s: HTTPServer): Promise<HTTPuppySleep> {
	try {
		if (s.onClose) s.onClose();
		s.removeAllListeners();
		s.close();
		return GracefulShutdown(s);
	} catch (e) {
		throw 'invalid shutdown, nothing submitted/already shut down';
	}
}
