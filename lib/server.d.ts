import { HTTPuppyServer } from './types';
/**
 * @function useServer
 * @example
 * ```javascript
* const app = useServer({
* 	static: {
* 		path: './examples/files'
* 	}
* });
* ```
 * @param conf configuration options
 * @returns httpuppy server
 */
export declare function useServer(conf: HTTPuppyServer.HTTPuppyServerOptions): HTTPuppyServer.Runtime;
