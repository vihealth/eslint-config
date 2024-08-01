import type { Linter } from 'eslint';

export type ExtendedRuleSeverity = Linter.RuleSeverity | 'error-when-staging' | 'warn-when-staging';

export type ExtendedRulesRecord = Record<
	string,
	ExtendedRuleSeverity | [ExtendedRuleSeverity, ...unknown[]]
>;

export type ExtendedConfig = Omit<Linter.Config, 'rules'> & { rules: ExtendedRulesRecord };
