/**
 * @internal
 */
import { resolve } from 'path';
import { useProcessArgs } from './fmt';

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
