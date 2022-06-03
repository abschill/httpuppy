/// <reference types="node" />
import { HTTPuppyServer } from '../types';
/**
 *
 * @param config config options for the runtime that wants to mount an FS
 * @returns
 */
export declare function useMountedFS(config: HTTPuppyServer.HTTPuppyServerOptions): {
    mountedPath: string;
    filesMounted: {
        fileName: string;
        symLink: string;
        contentType: any[];
        content: Buffer;
        hrefs: string[];
    }[];
};
