/**
 * @internal
 */
import { HTTPHeader } from '../..';

/**
 * @type MountedFile
 * @description A File Mounted within a virtual filesystem to be served at a given static href
 */
/**
 * @private
 */
export type VirtualWriteableFile = {
	reqUrl		: string;
	symLink		?: string;
	contentType	: HTTPHeader;
	fileName	: string;
	hrefs		: string[];
}
/**
 * @private
 */
export type MountedFile = {
	fileName	: string;
	symLink		: string;
	contentType	: HTTPHeader;
	content		: any;
	hrefs		: string[];
}
/**
 * @private
 */
export type VirtualFileSystem = {
	mountedPath	 : string;
	mountedFiles : MountedFile[];
}


/**
 * @private
 */
export type HTTPuppyWriterOptions = {
	status		: number;
	statusText	: string;
	type		: string;
	virtualFile : VirtualWriteableFile;
}
