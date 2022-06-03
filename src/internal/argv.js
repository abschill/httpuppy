/**
 * @internal
 */
import { resolve } from 'path';

export function useProcessArgs() {
	try {
		const { argv } = process;
		if(argv.length > 2) {
			return Object.fromEntries(argv.slice(2).map(a => {
				if(a.includes('--')) {
					return a.split('--').pop().split('=');
				}
				else if(a.includes('-')) {
					return a.split('-').pop().split('=');
				}
				else {
					return;
				}
			}));
		}
	}
	catch(e) {
		return null;
	}
}


function useForceCheck(
	p
) {
	try {
		return require(resolve(process.cwd(), p));
	}
	catch(e) {
		//todo - handle?
		return null;
	}
}


export function useAnyConfig() {
	let config = {};
	const args = useProcessArgs();
	if(args) {
		config = {...args};
	}
	const defaultOption = useForceCheck('httpuppy.json');
	if(defaultOption) {
		config = {...config, ...defaultOption};
	}

	console.log(config);
}
