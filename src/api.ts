import type { ESLint, Linter } from 'eslint';

import defaults from './defaults';
import type { ExtendedConfig, ExtendedRuleSeverity, ExtendedRulesRecord } from './types';

function actuateStagingBehavior(
	level: ExtendedRuleSeverity,
	isStaging: boolean,
): Linter.RuleSeverity {
	switch (level) {
		case 'error-when-staging':
			return isStaging ? 'error' : 'warn';
		case 'warn-when-staging':
			return isStaging ? 'warn' : 'off';
		default:
			return level;
	}
}

function modifyRulesForPhase(_config: ExtendedConfig, isStaging: boolean): Linter.Config {
	const config = {
		..._config,
		rules: JSON.parse(JSON.stringify(_config.rules)) as ExtendedRulesRecord,
	} as ExtendedConfig;
	if (!config.rules || !Object.keys(config.rules).length) {
		throw new Error('Somehow you managed to delete all rule configuration');
	}
	for (const ruleName of Object.keys(config.rules)) {
		if (Array.isArray(config.rules[ruleName])) {
			config.rules[ruleName][0] = actuateStagingBehavior(
				config.rules[ruleName][0],
				isStaging,
			);
		} else {
			config.rules[ruleName] = actuateStagingBehavior(config.rules[ruleName], isStaging);
		}
	}
	return config as Linter.Config;
}

/**
 * Helper methods to declaratively build up an ESLint configuration with specifics for a Vi project.
 */
export class ViEslintConfigApi {
	readonly #config: ExtendedConfig = defaults;

	/**
	 * Add a plugin to the configuration.
	 */
	public plugin(namespace: string, plugin: ESLint.Plugin): this {
		if (!this.#config.plugins) {
			this.#config.plugins = {};
		}
		if (this.#config.plugins[namespace]) {
			throw new Error(`Plugin "${namespace}" was already configured`);
		}
		this.#config.plugins[namespace] = plugin;
		return this;
	}

	/**
	 * Add a rule to the configuration.
	 */
	public with(
		rule: string,
		level: ExtendedRuleSeverity,
		options?: Record<string, unknown>,
	): this {
		if (!this.#config.rules) {
			this.#config.rules = {};
		}
		if (this.#config.rules[rule]) {
			throw new Error(`Rule "${rule}" was already configured, use .change() instead`);
		}
		this.#config.rules[rule] = options ? [level, options] : level;
		return this;
	}

	/**
	 * Disable one or more rules.
	 */
	public without(...rules: string[]): this {
		if (!this.#config.rules) {
			this.#config.rules = {};
		}
		for (const rule of rules) {
			this.#config.rules[rule] = 'off';
		}
		return this;
	}

	/**
	 * Change the severity or configuration of a specific rule.
	 */
	public change(
		rule: string,
		level: ExtendedRuleSeverity,
		options?: Record<string, unknown>,
	): this {
		if (!this.#config.rules) {
			this.#config.rules = {};
		}
		if (!this.#config.rules[rule]) {
			throw new Error(`Rule "${rule}" was not previously configured, use .with() instead`);
		}
		this.#config.rules[rule] = [
			level,
			Array.isArray(this.#config.rules[rule])
				? (this.#config.rules[rule][1] ?? options)
				: options,
		];
		return this;
	}

	/**
	 * Add a file to the ignore patterns;
	 */
	public ignore(...patterns: string[]): this {
		if (!this.#config.ignores) {
			this.#config.ignores = [];
		}
		this.#config.ignores.push(...patterns);
		return this;
	}

	/**
	 * Create the ESLint-compatible configuration object and be done with it.
	 */
	public finish(isStaging?: boolean): Linter.Config {
		const config = modifyRulesForPhase(this.#config, !!isStaging);
		return config;
	}
}
