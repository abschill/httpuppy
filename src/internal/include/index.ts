/**
 * @internal
 */
export * from './_constants';
export * from './etag';
import GracefulShutdown from 'http-graceful-shutdown';
import { HTTPuppyServer } from '../types';
import { HTTPuppySleep } from '../types';
export {
	createServer as useCreateSecureServer,
	ServerOptions as HTTPSOptions,
} from 'https';
export {
	createServer as useCreateServer,
	Server as stlServer,
	IncomingMessage as HTTPRequest,
	ServerResponse as HTTPResponse,
} from 'http';
/**
 *
 * @param s http server to shut down
 * @returns void promise to gracefully shut down
 */
export async function shutdown(s: HTTPuppyServer): Promise<HTTPuppySleep> {
	try {
		if (s.onClose) s.onClose();
		s.removeAllListeners();
		s.close();
		return GracefulShutdown(s);
	} catch (e) {
		throw 'invalid shutdown, nothing submitted/already shut down';
	}
}
