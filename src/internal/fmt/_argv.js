/**
 * @internal
 */

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
