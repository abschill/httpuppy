import { MountedFile } from '.';

export type HTTPuppyWriterOptions = {
	status		: number;
	statusText	: string;
	type		: string;
	virtualFile : MountedFile;
}
