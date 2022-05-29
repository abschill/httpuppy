import { Server as stlServer } from 'http';

export type DiagnosticLog = {
	msg			: string;
}
export interface Runtime extends stlServer  {
	diagnostics	: DiagnosticLog[];
}

export type MountedFile = {
	reqUrl		: string;
	symLink		: string;
	contentType	: any | any[];
	fileName	: string;
	hrefs		: string[];
}

export type VirtualFS = {
	mountPath	: string;
}

export type HTTPuppySleep = () => Promise<void>;
