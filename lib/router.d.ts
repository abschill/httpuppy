/**
 * @module router
 * @description for adding custom routing to your server
 */
import { HTTPuppyServer } from './types';
/**
 * @function useRouter
 * @example
 * ```javascript
* const app = useServer({...});
* const router = useRouter(app);
* router.get('/test', (req, res) => res.end('hello'));
* ```
 * @param attachTo
 * @returns
 */
export declare function useRouter(attachTo: HTTPuppyServer.Runtime, // server to attach the router to as a handler
routerOptions?: any): HTTPuppyServer.HTTPuppyRouter;
