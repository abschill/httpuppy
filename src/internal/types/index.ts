export * from './middleware';
export * from './vfs';

export type CallableSideEffect<T> = (args: T) => (Promise<any> | any);
