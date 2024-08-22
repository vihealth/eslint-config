/**
 * @file
 * https://github.com/gajus/eslint-plugin-canonical
 */

import type { ExtendedRulesRecord } from '../types';

export default {
	// Match the file name against the default exported value in the module. Files that don't have
	// a default export will be ignored.The exports of index.js are matched against their parent
	// directory.
	'canonical/filename-match-exported': 'warn',

	// Enforce a certain file naming convention using a regular expression
	'canonical/filename-match-regex': 'warn',

	// Having a bunch of index.js files can have negative influence on developer experience,
	// e.g.when opening files by name. When enabling this rule.index.js files will always be
	// considered a problem.
	'canonical/filename-no-index': 'warn',

	// Note: This rule is equivalent to id-match, except for addition of ignoreNamedImports.
	// This rule requires identifiers in assignments and function definitions to match a specified
	// regular expression.
	'canonical/id-match': 'off',

	// Disallow specified modules when loaded by import
	'canonical/no-restricted-imports': 'off',

	'canonical/no-restricted-strings': 'warn',

	'canonical/no-use-extend-native': 'error',

	// Restrict imports to path aliases or relative imports limited by depth.
	'canonical/prefer-import-alias': 'off',

	// Prefers `import { type X }` rather than `import type { X }`,
	// ie.possibly conflicting with `import/order`
	'canonical/prefer-inline-type-import': 'off',

	// Sane as normal "sort-keys", but autofixable
	'canonical/sort-keys': [
		'warn',
		'asc',
		{
			caseSensitive: false,
			natural: true,
		},
	],
} as ExtendedRulesRecord;
