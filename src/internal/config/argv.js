/**
 * @internal
 */
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { useProcessArgs } from '../fmt/_argv';

function useForceCheck(p) {
	try {
		return useINI(readFileSync(resolve(process.cwd(), p))?.toString());
	}
	catch(e) {
		console.warn('httpuppy config file missing: \n', `${process.cwd()}/${p}`);
		console.warn('create an http.puppy file in the process directory or pass the --noConfigFile option in the cli to ignore this warning');
		return {};
	}
}


export function useAnyConfig(inline) {
	const args = useProcessArgs();
	try {
		const defaultOption = useForceCheck('http.puppy');
		const { config = args } = defaultOption;

		const out = {...args, ...config, ...inline};
		return out;
	}
	catch(_) {
		return args;
	}
}



export function useINI(str) {
	const INI_REG_GROUP = /^\s*\[(.+?)\]\s*$/;
	const INI_REG_PROP = /^\s*([^#].*?)\s*=\s*(.*?)\s*$/;
	const object = {};
	const lines = str?.split('\n');
	let group;
	let match;

	for(const i = 0, len = lines?.length; i !== len; i++) {
		if(match = lines[i]?.match(INI_REG_GROUP))
			object[match[1]] = group = object[match[1]] || {};
		else if(group && (match = lines[i]?.match(INI_REG_PROP)))
			group[match[1]] = match[2];
	}

	return object;
}
