import { MountedFile } from "./server";

export type HTTPuppyWriterOptions = {
	status		: number;
	statusText	: string;
	type		: string;
	virtualFile : MountedFile;
}
export type HTTPHeader = string[];
export type HTTPHeaders = HTTPHeader[];
