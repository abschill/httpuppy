import { HTTPHeader } from '..';

/**
 * @type MountedFile
 * @description A File Mounted within a virtual filesystem to be served at a given static href
 */
export type VirtualWriteableFile = {
	reqUrl		: string;
	symLink		?: string;
	contentType	: HTTPHeader;
	fileName	: string;
	hrefs		: string[];
}

export type MountedFile = {
	fileName	: string;
	symLink		: string;
	contentType	: HTTPHeader;
	content		: any;
	hrefs		: string[];
}

export type UserStaticConfig = {
	href 		?: string; // prefix path to access the directory on router
	path 		?: string; // path on filesystem to reflect
	mimeType 	?: string; // default content type
	indexType 	?: string; // file to use as the index of a directory (default: index.html)
};

export type VirtualFileSystem = {
	mountedPath	 : string;
	mountedFiles : MountedFile[];
}

export type HTTPuppyWriterOptions = {
	status		: number;
	statusText	: string;
	type		: string;
	virtualFile : VirtualWriteableFile;
}
