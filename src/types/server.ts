import { Server } from 'http';

export interface SimpleHTTP extends Server {
	diagnostics: string[];
}

export type MountedFile = {
	reqUrl: string;
	symLink: string;
	contentType: string;
	fileName: string;
	content: string;
	hrefs: string[];
}


export type VirtualFS = {
	mountPath: string;
}


export type HTTPuppySleep = () => Promise<void>;
