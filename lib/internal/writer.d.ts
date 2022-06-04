/**
 * @internal
 */
import { HTTPuppyServer } from '../types';
/**
 * @internal isBufferType
 * @description check whether or not the file needs to be written into a stream as a buffer, or utf-8 content
 * @param file the file read by the VFS that is undergoing buffer check
 * @returns boolean whether or not it needs to be written as a buffer or can be served directly
 */
export declare function isBufferType(file: string): boolean;
/**
 * @internal useVirtualStreamReader
 * @description apply virtual stream reader to the given request, and close stream on exit
 * @param pathData the resulting mount file from useStaticUrlParser call in useStaticMount
 * @param res the current response being handled by the server
 * @returns
 */
export declare function useVirtualStreamReader(pathData: HTTPuppyServer.MountedFile, res: HTTPuppyServer.HTTPuppyResponse): void;
/**
 *
 * @param res the response to write to
 * @param config the config to base the write on
 * @param options the writer instance options
 * @returns
 */
export declare function useWriter(res: HTTPuppyServer.HTTPuppyResponse, config: HTTPuppyServer.HTTPuppyServerOptions, options: HTTPuppyServer.HTTPuppyWriterOptions): void;
