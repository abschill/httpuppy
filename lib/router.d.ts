import { Runtime, HTTPuppyRouter } from './types/server';
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
export declare function useRouter(server: Runtime, // server to attach the router to as a handler
routerOptions?: any): HTTPuppyRouter;
