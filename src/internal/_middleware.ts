import {
	HTTPuppyRequest, HTTPuppyResponse
} from '../types/server';

export function _useCloseHandler<T extends HTTPuppyRequest | HTTPuppyResponse>(
	msg	: T,
	cb	: (ctx: T) => void
) {
	msg.on('close', () => {
		if(cb && typeof cb === 'function') {
			cb(msg);
		}
	});
}
export function _onReadable(
	req	: HTTPuppyRequest,
	cb	: () => void
): void {
	req.on('readable', (_: any) => {
		if(cb && typeof cb === 'function') {
			cb();
		}
	});
}
