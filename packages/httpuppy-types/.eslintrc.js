module.exports = {
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 13,
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint'],
	rules: {
		quotes: ['off', 'single'],
		semi: ['warn', 'always'],
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/no-explicit-any': 'off'
	}
};
