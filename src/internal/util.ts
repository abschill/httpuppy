import { IncomingMessage, ServerResponse } from 'http';
import { ComposableBodyContent } from '../types/index';
export const hasIndex = (fileList: string[]) => fileList.includes('index.html');
export const contentType = (type: string) => ['Content-Type', type];
export const proxyCallback = (fn: CallableFunction, ...args) => fn(...args);
export const startEventChain = (...fns: CallableFunction[]) => Promise.all(fns);
