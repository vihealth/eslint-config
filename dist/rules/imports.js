"use strict";
/* eslint-disable	max-lines                    */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    helpfulWarnings: {
        // Forbid any invalid exports, i.e. re-export of the same name.
        'imports/export': 'warn',
        // Forbid imported names marked with @deprecated documentation tag.
        'imports/no-deprecated': 'warn',
        // Forbid empty named import blocks.
        'imports/no-empty-named-blocks': 'warn',
        // Forbid the use of extraneous packages.
        'imports/no-extraneous-dependencies': 'warn',
        // Forbid the use of mutable exports with var or let.
        'imports/no-mutable-exports': 'warn',
        // Forbid use of exported name as identifier of default export.
        'imports/no-named-as-default': 'warn',
        // Forbid use of exported name as property of default export.
        'imports/no-named-as-default-member': 'warn',
        // Forbid modules without exports, or exports without matching import in another module.
        'imports/no-unused-modules': 'warn',
    },
    moduleSystems: {
        // Forbid AMD require and define calls.
        'imports/no-amd': 'warn',
        // Forbid CommonJS require calls and module.exports or exports.
        'imports/no-commonjs': 'warn',
        // Forbid import statements with CommonJS module.exports.
        'imports/no-import-module-exports': 'warn',
        // Forbid Node.js builtin modules.
        'imports/no-nodejs-modules': 'warn',
        // Forbid potentially ambiguous parse goal (script vs. module).
        'imports/unambiguous': 'warn',
    },
    staticAnalysis: {
        // Ensure a default export is present, given a default import.
        'imports/default': 'warn',
        // Ensure named imports correspond to a named export in the remote file.
        'imports/named': 'warn',
        // Ensure imported namespaces contain dereferenced properties as they are dereferenced.
        'imports/namespace': 'warn',
        // Forbid import of modules using absolute paths.
        'imports/no-absolute-path': 'warn',
        // Forbid a module from importing a module with a dependency path back to itself.
        'imports/no-cycle': 'warn',
        // Forbid require() calls with expressions.
        'imports/no-dynamic-require': 'warn',
        // Forbid importing the submodules of other modules.
        'imports/no-internal-modules': 'warn',
        // Forbid importing packages through relative paths.
        'imports/no-relative-packages': 'warn',
        // Forbid importing modules from parent directories.
        'imports/no-relative-parent-imports': 'warn',
        // Enforce which files can be imported in a given folder.
        'imports/no-restricted-paths': 'warn',
        // Forbid a module from importing itself.
        'imports/no-self-import': 'warn',
        // Ensure imports point to a file/module that can be resolved.
        'imports/no-unresolved': 'off',
        // Forbid unnecessary path segments in import and require statements.
        'imports/no-useless-path-segments': 'warn',
        // Forbid webpack loader syntax in imports.
        'imports/no-webpack-loader-syntax': 'warn',
    },
    styleGuide: {
        // Enforce or ban the use of inline type-only markers for named imports.
        'imports/consistent-type-specifier-style': 'warn',
        // Enforce a leading comment with the webpackChunkName for dynamic imports.
        'imports/dynamic-import-chunkname': 'warn',
        // Ensure all exports appear after other statements.
        'imports/exports-last': 'warn',
        // Ensure consistent use of file extension within the import path.
        'imports/extensions': 'warn',
        // Ensure all imports appear before other statements.
        'imports/first': 'warn',
        // Prefer named exports to be grouped together in a single export declaration
        'imports/group-exports': 'warn',
        // Replaced by import/first.
        'imports/imports-first': 'warn',
        // Enforce the maximum number of dependencies a module can have.
        'imports/max-dependencies': 'off',
        // Enforce a newline after import statements.
        'imports/newline-after-import': 'warn',
        // Forbid anonymous values as default exports.
        'imports/no-anonymous-default-export': 'warn',
        // Forbid default exports.
        'imports/no-default-export': 'warn',
        // Forbid repeated import of the same module in multiple places.
        'imports/no-duplicates': 'warn',
        // Forbid named default exports.
        'imports/no-named-default': 'warn',
        // Forbid named exports.
        'imports/no-named-export': 'warn',
        // Forbid namespace (a.k.a. "wildcard" *) imports.
        'imports/no-namespace': 'off',
        // Forbid unassigned imports
        'imports/no-unassigned-import': 'warn',
        // Enforce a convention in module import order.
        'imports/order': 'warn',
        // Prefer a default export if module exports a single name or multiple names.
        'imports/prefer-default-export': 'warn',
    },
};
