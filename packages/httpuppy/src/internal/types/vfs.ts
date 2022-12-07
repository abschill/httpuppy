/**
 * @internal
 */
import { HTTPHeader } from '.';

/**
 * MountedFile
 * @remarks A File Mounted within a virtual filesystem to be served at a given static href
 */
/**
 * @internal
 */
export type VirtualWriteableFile = {
	reqUrl: string;
	symLink?: string;
	contentType: HTTPHeader;
	fileName: string;
	hrefs: string[];
};

/**
 * @internal
 */
export type MountedFile = {
	fileName: string;
	symLink: string;
	contentType: HTTPHeader;
	content: any;
	hrefs: string[];
};

/**
 * @internal
 */
export type VirtualFileSystem = {
	mountedPath: string;
	mountedHref: string;
	mountedFiles: MountedFile[];
};

/**
 * @internal
 */
export type HTTPWriterOptions = {
	status: number;
	statusText: string;
	type: string;
	virtualFile: VirtualWriteableFile;
};


export type MountedVFSFile = {
	_basepath: string;
	_abspath: string;
	_filename: string;
	hrefs: string[];
	mime_type: string | false;
	text_content?: string;
};

export type MountedVFS = {
	mounted_files: MountedVFSFile[];
	mounted_path: string;
	mounted_href: string;
};
