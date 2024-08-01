"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * https://github.com/eslint-community/eslint-plugin-security
 */
exports.default = {
    // Detects trojan source attacks that employ unicode bidi attacks to inject malicious code.
    'security/detect-bidi-characters': 'error',
    // Detects calls to "buffer" with "noAssert" flag set.
    'security/detect-buffer-noassert': 'error',
    // Detects instances of "child_process" & non-literal "exec()" calls.
    'security/detect-child-process': 'error',
    // Detects "object.escapeMarkup = false", which can be used with some template engines to disable escaping of HTML entities.
    'security/detect-disable-mustache-escape': 'error',
    // Detects "eval(variable)" which can allow an attacker to run arbitrary code inside your process.
    'security/detect-eval-with-expression': 'error',
    // Detects instances of new Buffer(argument) where argument is any non-literal value.
    'security/detect-new-buffer': 'error',
    // Detects Express "csrf" middleware setup before "method-override" middleware.
    'security/detect-no-csrf-before-method-override': 'error',
    // Detects variable in filename argument of "fs" calls, which might allow an attacker to access anything on your system.
    'security/detect-non-literal-fs-filename': 'error',
    // Detects "RegExp(variable)", which might allow an attacker to DOS your server with a long-running regular expression.
    'security/detect-non-literal-regexp': 'error',
    // Detects "require(variable)", which might allow an attacker to load and run arbitrary code, or access arbitrary files on disk.
    'security/detect-non-literal-require': 'error',
    // Detects "variable[key]" as a left- or right-hand assignment operand.
    'security/detect-object-injection': 'off',
    // Too common of a case to ban in practice
    // Detects insecure comparisons (==, !=, !== and ===), which check input sequentially.
    'security/detect-possible-timing-attacks': 'error',
    // Detects if "pseudoRandomBytes()" is in use, which might not give you the randomness you need and expect.
    'security/detect-pseudoRandomBytes': 'error',
    // Detects potentially unsafe regular expressions, which may take a very long time to run, blocking the event loop.
    'security/detect-unsafe-regex': 'error-when-staging',
};
