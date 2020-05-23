module.exports = {
	prettier: true,
	rules: {
		// If add rules, include a comment explaining why

		// Tons of violations from third party libraries make this error too much
		'@typescript-eslint/prefer-readonly-parameter-types': 'off',
		// Ordering imports makes reading them easier
		'import/order': [
			'error',
			{
				'newlines-between': 'always',
				alphabetize: {order: 'asc'}, // Same directories clump together
				// In tests, source code clumps together
				pathGroups: [
					{pattern: '@src/**', group: 'external', position: 'after'},
					{pattern: '@src', group: 'external', position: 'after'}
				],
				pathGroupsExcludedImportTypes: ['builtin']
			}
		]
	}
};
