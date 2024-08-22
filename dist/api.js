"use strict";
/* global console */
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _ViEslintConfigApi_config;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViEslintConfigApi = void 0;
const defaults_1 = __importDefault(require("./defaults"));
function actuateStagingBehavior(level, isStaging) {
    switch (level) {
        case 'error-when-staging':
            return isStaging ? 'error' : 'warn';
        case 'warn-when-staging':
            return isStaging ? 'warn' : 'off';
        default:
            return level;
    }
}
function modifyRulesForPhase(_config, isStaging) {
    const config = Object.assign(Object.assign({}, _config), { rules: JSON.parse(JSON.stringify(_config.rules)) });
    if (!config.rules || !Object.keys(config.rules).length) {
        throw new Error('Somehow you managed to delete all rule configuration');
    }
    for (const ruleName of Object.keys(config.rules)) {
        if (Array.isArray(config.rules[ruleName])) {
            config.rules[ruleName][0] = actuateStagingBehavior(config.rules[ruleName][0], isStaging);
        }
        else {
            config.rules[ruleName] = actuateStagingBehavior(config.rules[ruleName], isStaging);
        }
    }
    return config;
}
/**
 * Helper methods to declaratively build up an ESLint configuration with specifics for a Vi project.
 */
class ViEslintConfigApi {
    constructor() {
        _ViEslintConfigApi_config.set(this, defaults_1.default);
    }
    /**
     * Add a plugin to the configuration.
     */
    plugin(namespace, plugin) {
        if (!__classPrivateFieldGet(this, _ViEslintConfigApi_config, "f").plugins) {
            __classPrivateFieldGet(this, _ViEslintConfigApi_config, "f").plugins = {};
        }
        if (__classPrivateFieldGet(this, _ViEslintConfigApi_config, "f").plugins[namespace]) {
            throw new Error(`Plugin "${namespace}" was already configured`);
        }
        __classPrivateFieldGet(this, _ViEslintConfigApi_config, "f").plugins[namespace] = plugin;
        return this;
    }
    /**
     * Add a rule to the configuration.
     */
    with(rule, level, options) {
        if (!__classPrivateFieldGet(this, _ViEslintConfigApi_config, "f").rules) {
            __classPrivateFieldGet(this, _ViEslintConfigApi_config, "f").rules = {};
        }
        if (__classPrivateFieldGet(this, _ViEslintConfigApi_config, "f").rules[rule]) {
            throw new Error(`Rule "${rule}" was already configured, use .change() instead`);
        }
        __classPrivateFieldGet(this, _ViEslintConfigApi_config, "f").rules[rule] = options ? [level, options] : level;
        return this;
    }
    /**
     * Disable one or more rules.
     */
    without(...rules) {
        if (!__classPrivateFieldGet(this, _ViEslintConfigApi_config, "f").rules) {
            __classPrivateFieldGet(this, _ViEslintConfigApi_config, "f").rules = {};
        }
        for (const rule of rules) {
            if (!__classPrivateFieldGet(this, _ViEslintConfigApi_config, "f").rules[rule] || __classPrivateFieldGet(this, _ViEslintConfigApi_config, "f").rules[rule] === 'off') {
                // eslint-disable-next-line no-console
                console.error(`Rule "${rule}" was already disabled.`);
            }
            __classPrivateFieldGet(this, _ViEslintConfigApi_config, "f").rules[rule] = 'off';
        }
        return this;
    }
    /**
     * Change the severity or configuration of a specific rule.
     */
    change(rule, level, options) {
        var _a;
        if (!__classPrivateFieldGet(this, _ViEslintConfigApi_config, "f").rules) {
            __classPrivateFieldGet(this, _ViEslintConfigApi_config, "f").rules = {};
        }
        if (!__classPrivateFieldGet(this, _ViEslintConfigApi_config, "f").rules[rule]) {
            throw new Error(`Rule "${rule}" was not previously configured, use .with() instead`);
        }
        __classPrivateFieldGet(this, _ViEslintConfigApi_config, "f").rules[rule] = [
            level,
            Array.isArray(__classPrivateFieldGet(this, _ViEslintConfigApi_config, "f").rules[rule])
                ? ((_a = __classPrivateFieldGet(this, _ViEslintConfigApi_config, "f").rules[rule][1]) !== null && _a !== void 0 ? _a : options)
                : options,
        ];
        return this;
    }
    /**
     * Add a file to the ignore patterns;
     */
    ignore(...patterns) {
        if (!__classPrivateFieldGet(this, _ViEslintConfigApi_config, "f").ignores) {
            __classPrivateFieldGet(this, _ViEslintConfigApi_config, "f").ignores = [];
        }
        __classPrivateFieldGet(this, _ViEslintConfigApi_config, "f").ignores.push(...patterns);
        return this;
    }
    /**
     * Create the ESLint-compatible configuration object and be done with it.
     */
    finish(isStaging) {
        const config = modifyRulesForPhase(__classPrivateFieldGet(this, _ViEslintConfigApi_config, "f"), !!isStaging);
        return config;
    }
}
exports.ViEslintConfigApi = ViEslintConfigApi;
_ViEslintConfigApi_config = new WeakMap();
