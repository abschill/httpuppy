
export function useHTTPSCert(

): {
	key  		: any,
	cert 		: any,
	passphrase ?: any;
} {
	let https;

	try {
		https = require('node:https');
	}
	catch (_) {
		console.log('https support is disabled!');
	}

	return {
		key: null,
		cert: null
	};
}
