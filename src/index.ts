import defaults from './defaults';

class EslintConfigHelper {
	readonly #config = defaults;

	public forProjectDir(projectDir: string): this {
		this.#config.languageOptions = {
			...(this.#config.languageOptions ?? {}),
			parserOptions: {
				...(this.#config.languageOptions?.parserOptions ?? {}),
				tsconfigRootDir: projectDir,
			},
		};
		return this;
	}

	public disableRules(...rules: string[]): this {
		if (!this.#config.rules) {
			this.#config.rules = {};
		}
		for (const rule of rules) {
			// eslint-disable-next-line security/detect-object-injection
			this.#config.rules[rule] = 'off';
		}
		return this;
	}

	public changeRule(
		rule: string,
		level: 'off' | 'warn' | 'error',
		options?: Record<string, unknown>,
	): this {
		if (!this.#config.rules) {
			this.#config.rules = {};
		}

		// eslint-disable-next-line security/detect-object-injection
		this.#config.rules[rule] = [
			level,
			// eslint-disable-next-line security/detect-object-injection
			Array.isArray(this.#config.rules[rule])
				? // eslint-disable-next-line security/detect-object-injection
					(this.#config.rules[rule][1] ?? options)
				: options,
		];

		return this;
	}

	public toJSON(): typeof defaults {
		return this.#config;
	}
}

export const fluent = (): EslintConfigHelper => new EslintConfigHelper();

export default defaults;
