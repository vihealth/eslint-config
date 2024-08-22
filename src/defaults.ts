import typescriptEslint from '@typescript-eslint/eslint-plugin';
import * as eslintParser from '@typescript-eslint/parser';
import type { ESLint } from 'eslint';
import eslintPluginCanonical from 'eslint-plugin-canonical';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginSecurity from 'eslint-plugin-security';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';

import canonicalRules from './rules/canonical';
import eslintRules from './rules/eslint';
import simpleImportSortRules from './rules/importsort';
import prettierRules from './rules/prettier';
import securityRules from './rules/security';
import typescriptEslintRules from './rules/typescript';
import type { ExtendedConfig } from './types';

export default {
	files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
	ignores: ['node_modules', 'dist', 'build'],
	languageOptions: {
		globals: {
			process: 'readonly',
		},
		parser: eslintParser,
		parserOptions: {
			ecmaFeatures: { modules: true },
			ecmaVersion: 'latest',
			project: './tsconfig.json',
		},
	},
	plugins: {
		// eslint-disable-next-line typescript/no-unsafe-assignment
		canonical: eslintPluginCanonical,

		importsort: eslintPluginSimpleImportSort,

		prettier: eslintPluginPrettier,

		security: eslintPluginSecurity,

		typescript: typescriptEslint as unknown as ESLint.Plugin,
	},
	rules: {
		...eslintRules.problems,
		...eslintRules.suggestions,
		...simpleImportSortRules,
		...typescriptEslintRules,
		...securityRules,
		...prettierRules,
		...canonicalRules,
	},
} as ExtendedConfig;
