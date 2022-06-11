/**
 * @internal
 */
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
import {
	resolve,
	join
} from 'path';

export function checkNumConfigs(p) {
	const fileList = readdirSync(p);
	const matches = CONFIG_FILE_OPTIONS.filter(fileOpt => fileList.includes(fileOpt.fileName));
	return matches.length;
}

export function useConfigFrom(p) {
	const fileList = readdirSync(p);
	const matches = CONFIG_FILE_OPTIONS.filter(fileOpt => fileList.includes(fileOpt.fileName));
	if(matches.length > 0) {
		return _switchConfigType(p, matches[0]);
	}
	return {};
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

function _switchConfigType(pathPrefix, match) {
	switch(match.fileType) {
		case 'ini':
			const ini = useINIToJSON(readFileSync(resolve(pathPrefix, match.fileName))?.toString());
			return {...ini};
		case 'yml':
			const yml = useYAMLToJSON(resolve(pathPrefix, match.fileName));
			return {...yml};
		case 'json':
			const json = useJSON(resolve(pathPrefix, match.fileName));
			return {...json};
		default:
			return {};
	}
}

export async function useCLIConfigFinder() {
	const cPath = process.argv[2] || process.cwd();
	const configs = checkNumConfigs(cPath);
	if(configs > 1) {
		const lookPath = cPath[0] != '/' ? join(process.cwd(), cPath) : cPath;
		const foundMatch = await useMultiConfigPrompt(lookPath);
		return _switchConfigType(lookPath, foundMatch);
	}
	if(configs === 1) {
		const conf = useConfigFrom(cPath);
		return conf;
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
