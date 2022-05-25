import { check } from 'tcp-port-used';
export function usePort (
	port: number
) {
	check(port ?? 80).then(console.log).catch(err => console.error('Error on check:', err.message));
}
