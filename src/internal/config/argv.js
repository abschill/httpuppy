/**
 * @internal
 */
import { resolve } from 'path';
import { prompt } from 'inquirer';
import {
	CONFIG_FILE_OPTIONS,
	useINIToJSON,
	useJSON,
	useYAMLToJSON
} from './conf-map';
import {
	readFileSync,
	readdirSync
} from 'fs';

export function checkNumConfigs(p) {
	const fileList = readdirSync(p);
	const matches = CONFIG_FILE_OPTIONS.filter(fileOpt => fileList.includes(fileOpt.fileName));
	return matches.length;
}

export async function useMultiConfigPrompt(p) {
	const fileList = readdirSync(p);
	const matches = CONFIG_FILE_OPTIONS.filter(fileOpt => fileList.includes(fileOpt.fileName));
	const { fileSelected } = await prompt([
		{
			type: 'list',
			name: 'fileSelected',
			message: 'choose config found in root',
			choices: matches.map(match => match.fileName)
		}
	]);
	return CONFIG_FILE_OPTIONS.filter(opt => opt.fileName === fileSelected).shift();
}

function _switchConfigType(foundMatch) {
	switch(foundMatch.fileType) {
		case 'ini':
			const ini = useINIToJSON(readFileSync(resolve(process.cwd(), foundMatch.fileName))?.toString());
			return {...ini};
		case 'yml':
			const yml = useYAMLToJSON(resolve(process.cwd(), foundMatch.fileName));
			return {...yml};
		case 'json':
			const json = useJSON(resolve(process.cwd(), foundMatch.fileName));
			return {...json};
		default:
			return {};
	}
}

export async function useCLIConfigFinder() {
	const cPath = process.argv[2] || process.cwd();
	const configs = checkNumConfigs(cPath)
	console.log('checking for config in path:');
	console.log(cPath);
	if(configs >= 1) {
		const foundMatch = await useMultiConfigPrompt(cPath);
		return _switchConfigType(foundMatch);
	}
	else {
		return {};
	}

}

export async function useValidConfigOption(p) {
	const fileList = readdirSync(p);
	const matches = CONFIG_FILE_OPTIONS.filter(fileOpt => fileList.includes(fileOpt.fileName));
	return matches?.shift() ?? null;
}
