export * from './_constants';
export * from './etag';
export * from './_color';

/**
 * @internal
 */
import GracefulShutdown from 'http-graceful-shutdown';
import {
	HTTPuppyServer,
	HTTPuppySleep
} from '../..';
/**
 *
 * @param s http server to shut down
 * @returns void promise to gracefully shut down
 */
export async function shutdown(
	s			: HTTPuppyServer
): Promise<HTTPuppySleep>  {
	try {
		if(s.onClose) s.onClose();
		s.removeAllListeners();
		s.close();
		return GracefulShutdown(s);
	}
	catch(e) {
		throw 'invalid shutdown, nothing submitted/already shut down';
	}
}
