This is the unified ESLint configuration of Vi. It errs on the side of caution/strictness.

# To install

```sh

npm i -D eslint vihealth/eslint-config
echo "module.exports = require('@vihealth/eslint-config').default.finish();" > eslint.config.js
```

And make sure you have `strict` set to `true` in the `compilerOptions` of your `tsconfig.json`.

And add the followig to your `package.json`;

```json
	"scripts": {
		"lint": "eslint .",
		"lint:fix": "eslint . --fix"
	},
```

```

```
