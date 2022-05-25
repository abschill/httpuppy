export function useProcessArgs() {
	const { argv } = process;
	if(argv.length > 2) {
		return Object.fromEntries(argv.slice(2).map(a => a.split('--').pop().split('=')));
	}
	return null;
}
