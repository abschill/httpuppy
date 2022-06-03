import { HTTPuppyServer } from '../types';
import GracefulShutdown from 'http-graceful-shutdown';
/**
 *
 * @param s http server to shut down
 * @returns void promise to gracefully shut down
 */
export async function shutdown(
	s	: HTTPuppyServer.Runtime
): Promise<HTTPuppyServer.HTTPuppySleep>  {
	try {
		s.onClose();
		s.removeAllListeners();
		s.close();

		return GracefulShutdown(s);
	}
	catch(e) {
		process.exit(1);
	}

}
