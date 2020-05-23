module.exports = {
	prettier: true,
	rules: {
		// If add rules, include a comment explaining why

		// Tons of violations from third party libraries make this error too much
		'@typescript-eslint/prefer-readonly-parameter-types': 'off'
	}
};
