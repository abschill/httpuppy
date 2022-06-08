/**
 * @internal
 */
import { check } from 'tcp-port-used';

/**
 *
 * @param port the port to run on
 */
export function usePort (
	port
) {
	check(port ?? 80).then(taken => {
		if(taken) {
			console.error('port in use');
			process.exit(1);
		}
		return;
	}).catch(err => console.error('Error on port check:', err.message));
}
