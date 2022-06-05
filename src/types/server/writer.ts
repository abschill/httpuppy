import { VirtualWriteableFile } from './vfs';

export type HTTPuppyWriterOptions = {
	status		: number;
	statusText	: string;
	type		: string;
	virtualFile : VirtualWriteableFile;
}
