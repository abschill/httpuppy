/**
 * @internal
 */
export * from './_constants';
export * from './etag';
import GracefulShutdown from 'http-graceful-shutdown';
import { HTTPuppyServer } from '../..';
import { HTTPuppySleep } from '../types';
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
