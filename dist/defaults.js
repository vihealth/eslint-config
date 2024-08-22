"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eslint_plugin_1 = __importDefault(require("@typescript-eslint/eslint-plugin"));
const eslintParser = __importStar(require("@typescript-eslint/parser"));
const eslint_plugin_canonical_1 = __importDefault(require("eslint-plugin-canonical"));
const eslint_plugin_prettier_1 = __importDefault(require("eslint-plugin-prettier"));
const eslint_plugin_security_1 = __importDefault(require("eslint-plugin-security"));
const eslint_plugin_simple_import_sort_1 = __importDefault(require("eslint-plugin-simple-import-sort"));
const canonical_1 = __importDefault(require("./rules/canonical"));
const eslint_1 = __importDefault(require("./rules/eslint"));
const importsort_1 = __importDefault(require("./rules/importsort"));
const prettier_1 = __importDefault(require("./rules/prettier"));
const security_1 = __importDefault(require("./rules/security"));
const typescript_1 = __importDefault(require("./rules/typescript"));
exports.default = {
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
        canonical: eslint_plugin_canonical_1.default,
        importsort: eslint_plugin_simple_import_sort_1.default,
        prettier: eslint_plugin_prettier_1.default,
        security: eslint_plugin_security_1.default,
        typescript: eslint_plugin_1.default,
    },
    rules: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, eslint_1.default.problems), eslint_1.default.suggestions), importsort_1.default), typescript_1.default), security_1.default), prettier_1.default), canonical_1.default),
};
