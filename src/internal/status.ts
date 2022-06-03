/**
 * @internal
 * @description hooks for setting response status from enumerated runtime constants
 */
 import { HTTPuppyResponse } from '../types/server';

 /**
  *
  * @param res internal response to be written to
  * @returns nothing
  */
 export function useStatus(
	res	: HTTPuppyResponse,
	status : number,
	msg	: string
 ): void {
	res.writeHead(status, msg);
 }
