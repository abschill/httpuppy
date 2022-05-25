import { check } from 'tcp-port-used';
export function usePort (
	port: number
) {
	check(port ?? 80).then(taken => {
		if(taken) {
			console.error('port in use');
			process.exit(1);
		}
		return;
	}).catch(err => console.error('Error on check:', err.message));
}
