import {
	FgBlue,
	FgRed,
	FgGreen,
	FgYellow,
	Reset
} from './_constants';
import { format } from 'util';

export function _useColorLogger(
	color: string,
	val: string
): string {
	switch(color) {
		case 'yellow':
		case 'warn':
		case 'txt-yellow':
			return format('%s%s\x1b[0m', FgYellow, val);
		case 'blue':
		case 'txt-blue':
		case 'status':
		case 'log':
			return format('%s%s\x1b[0m', FgBlue, val);
		case 'red':
		case 'txt-red':
		case 'error':
		case 'err':
			return format('%s%s\x1b[0m', FgRed, val);
		case 'green':
		case 'txt-green':
		case 'success':
		case 'ok':
			return format('%s%s\x1b[0m', FgGreen, val);
		default:
			return format('%s%s\x1b[0m', Reset, val);
	}
}
