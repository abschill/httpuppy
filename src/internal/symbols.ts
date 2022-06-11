export type SymbolRegistry = {
	[key: string]: Symbol;
}

export const HTTPuppySymbolRegistry:
SymbolRegistry = {
	kGET 		: Symbol('GET'),
	kHEAD		: Symbol('HEAD'),
	kPOST		: Symbol('POST'),
	kPUT		: Symbol('PUT'),
	kPATCH		: Symbol('PATCH'),
	kDELETE 	: Symbol('DELETE'),
	kCONNECT 	: Symbol('CONNECT'),
	kOPTIONS	: Symbol('OPTIONS'),
	kTRACE 		: Symbol('TRACE')
};
