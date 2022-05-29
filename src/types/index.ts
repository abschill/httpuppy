export * as HTTPuppyServer from './server';
export * as HTTPuppyOptions from './options';
export * as iPuppy from './internal';
export interface ComposableBodyContent {
	toString: string;
}
export { Server, IncomingMessage as HTTP_INCMSG, ServerResponse as HTTP_RES } from 'http';
