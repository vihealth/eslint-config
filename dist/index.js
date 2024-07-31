"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fluent = void 0;
const defaults_1 = __importDefault(require("./defaults"));
const fluent = () => {
    var _EslintConfigHelper_config, _a;
    return new (_a = class EslintConfigHelper {
            constructor() {
                _EslintConfigHelper_config.set(this, defaults_1.default);
            }
            forProjectDir(projectDir) {
                var _b, _c, _d;
                __classPrivateFieldGet(this, _EslintConfigHelper_config, "f").languageOptions = Object.assign(Object.assign({}, ((_b = __classPrivateFieldGet(this, _EslintConfigHelper_config, "f").languageOptions) !== null && _b !== void 0 ? _b : {})), { parserOptions: Object.assign(Object.assign({}, ((_d = (_c = __classPrivateFieldGet(this, _EslintConfigHelper_config, "f").languageOptions) === null || _c === void 0 ? void 0 : _c.parserOptions) !== null && _d !== void 0 ? _d : {})), { tsconfigRootDir: projectDir }) });
                return this;
            }
            disableRules(...rules) {
                if (!__classPrivateFieldGet(this, _EslintConfigHelper_config, "f").rules) {
                    __classPrivateFieldGet(this, _EslintConfigHelper_config, "f").rules = {};
                }
                for (const rule of rules) {
                    // eslint-disable-next-line security/detect-object-injection
                    __classPrivateFieldGet(this, _EslintConfigHelper_config, "f").rules[rule] = 'off';
                }
                return this;
            }
            changeRule(rule, level, options) {
                var _b;
                if (!__classPrivateFieldGet(this, _EslintConfigHelper_config, "f").rules) {
                    __classPrivateFieldGet(this, _EslintConfigHelper_config, "f").rules = {};
                }
                // eslint-disable-next-line security/detect-object-injection
                __classPrivateFieldGet(this, _EslintConfigHelper_config, "f").rules[rule] = [
                    level,
                    Array.isArray(__classPrivateFieldGet(this, _EslintConfigHelper_config, "f").rules[rule])
                        ? ((_b = __classPrivateFieldGet(this, _EslintConfigHelper_config, "f").rules[rule][1]) !== null && _b !== void 0 ? _b : options)
                        : options,
                ];
                return this;
            }
            toJSON() {
                return __classPrivateFieldGet(this, _EslintConfigHelper_config, "f");
            }
        },
        _EslintConfigHelper_config = new WeakMap(),
        _a)();
};
exports.fluent = fluent;
exports.default = defaults_1.default;
