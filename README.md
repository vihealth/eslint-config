# Vi!

It's time for a change: How would you like to be part of a different approach to women's health?
We're Vi, and our vision is to help women manage the health and wellness transitions that come with
menopause.

We believe that medical research has moved far beyond hormone therapy as the only solution for
menopausal symptoms, and we are committed to delivering targeted recommendations that are informed
by history and current research.

Unlike traditional products or services our recommendations and tools can evolve in real-time based
on each woman's unique experience and lifestyle.

## About this repository

This is the unified ESLint configuration for going-on every repository in Vi.

It's rule contents aims for clear, predictable, readable code, and takes a reasonably strict
approach.

Unlike most ESLint configuration packages, `@vihealth/eslint-config` provides a fluent API with
which rules can be tweaked in a declarative manner.

Because we're targeting a specific stack and code style, this configuration is very opinionated. For
example, there is an assumption of TypeScript and several other development tools.

### To install

Please read and understand the instructions before applying them. You may need to make adjustments
for file patterns and so on.

1. Make sure you have `"strict"` set to `true` in the `"compilerOptions"` of your `tsconfig.json`.

2. Install this repository straight from GitHub, and create `eslint.config.js`:

    ```sh
    npm i -D eslint vihealth/eslint-config
    echo "\
    module.exports = require('@vihealth/eslint-config')\
    .default.finish(process.env.STAGING === 'true');\
    " > eslint.config.js
    ```

3. Add `lint` and `lint:fix` scripts as well as `lint-staged` configuration to your `package.json`:

    ```json
    "scripts": {
    	"lint": "eslint .",
    	"lint:fix": "eslint . --fix"
    },
    "lint-staged": {
    	"*.{ts,tsx}": [
    		"cross-env STAGING=true eslint"
    	]
    },
    ```

4. Modify your `eslint.config.js` if you want, try it out maybe, and commit without running any commit hooks just this once;

    ```ssh
    npm run lint
	git add .
	git commit --no-verify
    ```

5. In a separate commit, apply all formatting and autofixesto your codebase:

    ```sh
    npm run lint:fix
	git add .
	git commi
    ```

## To customise

The object returned from `require('@vihealth/eslint-config').default` has a fluent API, meaning it
returns itself continuously. Use the following methods to tweak the config somewhat;

- `plugin(plugin)`, loads a plugin. Does not activate any of its rules yet.
- `.with(rule, severity[, options])`, add a rule that wasn't added before.
- `.without(...rules)`, disable/remove one or more rules.
- `.change(rule, severity[, options])`, change the severity or options for a rule.
- `.ignore(...files)`, do not lint these files
- `.finish(isStaging)`, create the ESLint configuration and return it.

## Linting staged files
Aside from rule severities `"error"`, `"warn"` and `"off"`, Vi's configuration object accepts `"error-when-staging"` and `"warn-when-staging"`.

These statuses would behave as an error (or warning resp.) when this lint is being performed on staged files only. When not linting on staged files alone, `"error-when-staging"` acts as a `"warn"` and `"warn-on-staging"` acts as `"off"`; this is useful for rules that you want to apply to all touched code going forward, but not able to fix throughout the existing database in one big bang.

