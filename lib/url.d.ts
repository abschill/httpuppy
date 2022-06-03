/**
 * @module url
 * @description Hooks for handling url parsing strategies
 */
import * as iTypes from './types';
/**
 * @function useStaticURLParser
 * @description hook for handling a response with a virtually mounted static filesystem browser
 * @param req the request to be replied to with the virtual FS response
 * @param config the configuration for the parent server
 * @returns the mounted file to serve based on the given request information
 */
export declare function useStaticURLParser(req: iTypes.HTTPuppyServer.HTTPuppyRequest, config: iTypes.HTTPuppyServer.HTTPuppyServerOptions): iTypes.HTTPuppyServer.MountedFile;
