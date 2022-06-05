/**
 *
 * @internal config file parsing utils
 */
import YML from 'yaml';
import { readFileSync } from 'fs';
import { Options } from 'typedoc';
/**
 * @function yamlify
 * @description turns yaml filename into valid path map
 * @param {string} fileName File name to transpose into yaml file option
 * @returns list of valid selection options
 */

export const yamlify = (fileName) => {
	return [
		{
			fileName: `${fileName}.yml`,
			fileType: 'yml'
		},
		{
			fileName: `${fileName}.yaml`,
			fileType: 'yml'
		}
	]
}

export const INI_FILE_OPTIONS = [
	{
		fileName: 'http.puppy',
		fileType: 'ini'
	},
	{
		fileName: '.httpuppy',
		fileType: 'ini'
	},
	{
		fileName: '.httpconfig',
		fileType: 'ini'
	},
	{
		fileName: '.puppyconfig',
		fileType: 'ini'
	},
	{
		fileName: 'httpuppy.conf',
		fileType: 'ini'
	},
	{
		fileName: '.pupperfile',
		fileType: 'ini'
	},
	{
		fileName: '.pupper',
		fileType: 'ini'
	},
];

export const CONFIG_FILE_OPTIONS = [
	...INI_FILE_OPTIONS,
	{
		fileName: 'httpuppy.json',
		fileType: 'json'
	},
	{
		fileName: 'httpuppy-conf.json',
		fileType: 'json'
	},
	{
		fileName: 'httpuppy-config.json',
		fileType: 'json'
	},
	{
		fileName: 'puppy-conf.json',
		fileType: 'json'
	},
	{
		fileName: 'puppy-config.json',
		fileType: 'json'
	},
	...yamlify('httpuppy'),
	...yamlify('httpuppy-conf'),
	...yamlify('httpuppy-config'),
	...yamlify('puppy-conf'),
	...yamlify('puppy-config')
];

export function useINIToJSON(str) {
	const INI_REG_GROUP = /^\s*\[(.+?)\]\s*$/;
	const INI_REG_PROP = /^\s*([^#].*?)\s*=\s*(.*?)\s*$/;
	const args = {};
	const lines = str?.split('\n');
	let group;
	let match;

	for(const i = 0, len = lines?.length; i !== len; i++) {
		if(match = lines[i]?.match(INI_REG_GROUP))
			args[match[1]] = group = args[match[1]] || {};
		else if(group && (match = lines[i]?.match(INI_REG_PROP)))
			group[match[1]] = match[2];
	}
	//remap aliases
	return {
		port: parseInt(args.config.port),
		static: {
			path: args.config.path
		}
	}
}

export function useJSON(p) {
	return require(p);
}

export function useYAMLToJSON(p) {
	return YML.parse(readFileSync(p, 'utf-8'));
}
