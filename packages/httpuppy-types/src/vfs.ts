/**
 * @type MountedFile
 * @description A File Mounted within a virtual filesystem to be served at a given static href
 */
import { HTTPHeader } from '.';
/**
 * @private
 */
export type MountedFile = {
	fileName: string;
	symLink: string;
	contentType: HTTPHeader;
	content: any;
	hrefs: string[];
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
