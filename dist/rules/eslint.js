"use strict";
/* eslint-disable	max-lines                    */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This file returns the Vi settings for ESLint's out-of-the-box rules, categories "Possible Problems"
 * and "Suggestions" organised as per ESLint's documentation:
 *
 *   https://eslint.org/docs/latest/rules
 */
exports.default = {
    problems: {
        // Enforce return statements in callbacks of array methods:
        'array-callback-return': 'warn',
        // Require super() calls in constructors:
        'constructor-super': 'warn',
        // Enforce “for” loop update clause moving the counter in the right direction:
        'for-direction': 'warn',
        // Enforce return statements in getters:
        'getter-return': 'warn',
        // Disallow using an async function as a Promise executor:
        'no-async-promise-executor': 'warn',
        // Disallow await inside of loops:
        'no-await-in-loop': 'warn',
        // Disallow reassigning class members:
        'no-class-assign': 'warn',
        // Disallow comparing against -0:
        'no-compare-neg-zero': 'warn',
        // Disallow assignment operators in conditional expressions:
        'no-cond-assign': 'warn',
        // Disallow reassigning const variables:
        'no-const-assign': 'warn',
        // Disallow expressions where the operation doesn’t affect the value:
        'no-constant-binary-expression': 'warn',
        // Disallow constant expressions in conditions:
        'no-constant-condition': 'warn',
        // Disallow returning value from constructor:
        'no-constructor-return': 'warn',
        // Disallow control characters in regular expressions:
        'no-control-regex': 'warn',
        // Disallow the use of debugger:
        'no-debugger': 'warn',
        // Disallow duplicate arguments in function definitions:
        'no-dupe-args': 'warn',
        // Disallow duplicate class members:
        'no-dupe-class-members': 'warn',
        // Disallow duplicate conditions in if-else-if chains:
        'no-dupe-else-if': 'warn',
        // Disallow duplicate keys in object literals:
        'no-dupe-keys': 'warn',
        // Disallow duplicate case labels:
        'no-duplicate-case': 'warn',
        // Disallow duplicate module imports:
        'no-duplicate-imports': 'warn',
        // Disallow empty character classes in regular expressions:
        'no-empty-character-class': 'warn',
        // Disallow empty destructuring patterns:
        'no-empty-pattern': 'warn',
        // Disallow reassigning exceptions in catch clauses:
        'no-ex-assign': 'warn',
        // Disallow fallthrough of case statements:
        'no-fallthrough': 'warn',
        // Disallow reassigning function declarations:
        'no-func-assign': 'warn',
        // Disallow assigning to imported bindings:
        'no-import-assign': 'warn',
        // Disallow variable or function declarations in nested blocks:
        'no-inner-declarations': 'warn',
        // Disallow invalid regular expression strings in RegExp constructors:
        'no-invalid-regexp': 'warn',
        // Disallow irregular whitespace:
        'no-irregular-whitespace': 'warn',
        // Disallow literal numbers that lose precision:
        'no-loss-of-precision': 'warn',
        // Disallow characters which are made with multiple code points in character class syntax:
        'no-misleading-character-class': 'warn',
        // Disallow new operators with global non-constructor functions:
        'no-new-native-nonconstructor': 'warn',
        // Disallow calling global object properties as functions:
        'no-obj-calls': 'warn',
        // Disallow returning values from Promise executor functions:
        'no-promise-executor-return': 'warn',
        // Disallow calling some Object.prototype methods directly on objects:
        'no-prototype-builtins': 'warn',
        // Disallow assignments where both sides are exactly the same:
        'no-self-assign': 'warn',
        // Disallow comparisons where both sides are exactly the same:
        'no-self-compare': 'warn',
        // Disallow returning values from setters:
        'no-setter-return': 'warn',
        // Disallow sparse arrays:
        'no-sparse-arrays': 'warn',
        // Disallow template literal placeholder syntax in regular strings:
        'no-template-curly-in-string': 'warn',
        // Disallow this/super before calling super() in constructors:
        'no-this-before-super': 'warn',
        // Disallow the use of undeclared variables unless mentioned in /*global */ comments:
        'no-undef': 'warn',
        // Disallow confusing multiline expressions:
        'no-unexpected-multiline': 'warn',
        // Disallow unmodified loop conditions:
        'no-unmodified-loop-condition': 'warn',
        // Disallow unreachable code after return, throw, continue, and break statements:
        'no-unreachable': 'warn',
        // Disallow loops with a body that allows only one iteration:
        'no-unreachable-loop': 'warn',
        // Disallow control flow statements in finally blocks:
        'no-unsafe-finally': 'warn',
        // Disallow negating the left operand of relational operators:
        'no-unsafe-negation': 'warn',
        // Disallow use of optional chaining in contexts where the undefined value is not allowed:
        'no-unsafe-optional-chaining': 'warn',
        // Disallow unused private class members:
        'no-unused-private-class-members': 'warn',
        // Disallow unused variables:
        'no-unused-vars': [
            'warn',
            {
                args: 'all',
                argsIgnorePattern: '^_',
                caughtErrors: 'all',
                caughtErrorsIgnorePattern: '^_',
                vars: 'all',
                varsIgnorePattern: '^_',
            },
        ],
        // Disallow the use of variables before they are defined:
        'no-use-before-define': [
            'error',
            {
                functions: false,
                classes: false,
                variables: true,
            },
        ],
        // Disallow variable assignments when the value is not used:
        'no-useless-assignment': 'off',
        // Not available until ESLint 9
        // Disallow useless backreferences in regular expressions:
        'no-useless-backreference': 'warn',
        // Disallow assignments that can lead to race conditions due to usage of await or yield:
        'require-atomic-updates': 'warn',
        // Require calls to isNaN() when checking for NaN:
        'use-isnan': 'warn',
        // Enforce comparing typeof expressions against valid strings:
        'valid-typeof': 'warn',
    },
    suggestions: {
        // Enforce getter and setter pairs in objects and classes:
        'accessor-pairs': 'warn',
        // Require braces around arrow function bodies:
        'arrow-body-style': 'warn',
        // Enforce the use of variables within the scope they are defined:
        'block-scoped-var': 'warn',
        // Enforce camelcase naming convention:
        camelcase: 'off',
        // Enforce or disallow capitalization of the first letter of a comment:
        'capitalized-comments': 'warn',
        // Enforce that class methods utilize this:
        'class-methods-use-this': 'off',
        // Superseded by the Typescript one
        // Enforce a maximum cyclomatic complexity allowed in a program:
        complexity: 'warn',
        // Require return statements to either always or never specify values:
        'consistent-return': 'warn',
        // Enforce consistent naming when capturing the current execution context:
        'consistent-this': 'warn',
        // Enforce consistent brace style for all control statements:
        curly: 'warn',
        // Require default cases in switch statements:
        'default-case': 'warn',
        // Enforce default clauses in switch statements to be last:
        'default-case-last': 'warn',
        // Enforce default parameters to be last:
        'default-param-last': 'warn',
        // Enforce dot notation whenever possible:
        'dot-notation': 'warn',
        // Require the use of === and !==:
        eqeqeq: 'warn',
        // Require function names to match the name of the variable or property to which they are assigned:
        'func-name-matching': 'warn',
        // Require or disallow named function expressions:
        'func-names': 'warn',
        // Enforce the consistent use of either function declarations or expressions assigned to variables:
        'func-style': 'off',
        // Require grouped accessor pairs in object literals and classes:
        'grouped-accessor-pairs': 'warn',
        // Require for-in loops to include an if statement:
        'guard-for-in': 'warn',
        // Disallow specified identifiers:
        'id-denylist': 'warn',
        // Enforce minimum and maximum identifier lengths:
        'id-length': 'warn',
        // Require identifiers to match a specified regular expression:
        'id-match': 'warn',
        // Require or disallow initialization in variable declarations:
        'init-declarations': 'off',
        // Require or disallow logical assignment operator shorthand:
        'logical-assignment-operators': 'warn',
        // Enforce a maximum number of classes per file:
        'max-classes-per-file': 'warn',
        // Enforce a maximum depth that blocks can be nested:
        'max-depth': 'warn',
        // Enforce a maximum number of lines per file:
        'max-lines': 'warn',
        // Enforce a maximum number of lines of code in a function:
        'max-lines-per-function': ['warn', { max: 200, skipComments: true }],
        // Enforce a maximum depth that callbacks can be nested:
        'max-nested-callbacks': 'warn',
        // Enforce a maximum number of parameters in function definitions:
        'max-params': 'warn',
        // Enforce a maximum number of statements allowed in function blocks:
        'max-statements': 'off',
        // Nice idea, but not practical
        // Require constructor names to begin with a capital letter:
        'new-cap': 'warn',
        // Disallow the use of alert, confirm, and prompt:
        'no-alert': 'warn',
        // Disallow Array constructors:
        'no-array-constructor': 'warn',
        // Disallow bitwise operators:
        'no-bitwise': 'warn',
        // Disallow the use of arguments.caller or arguments.callee:
        'no-caller': 'warn',
        // Disallow lexical declarations in case clauses:
        'no-case-declarations': 'warn',
        // Disallow the use of console:
        'no-console': 'warn',
        // Disallow continue statements:
        'no-continue': 'warn',
        // Disallow deleting variables:
        'no-delete-var': 'warn',
        // Disallow equal signs explicitly at the beginning of regular expressions:
        'no-div-regex': 'warn',
        // Disallow else blocks after return statements in if statements:
        'no-else-return': 'warn',
        // Disallow empty block statements:
        'no-empty': 'warn',
        // Disallow empty functions:
        'no-empty-function': 'warn',
        // Disallow empty static blocks:
        'no-empty-static-block': 'warn',
        // Disallow null comparisons without type-checking operators:
        'no-eq-null': 'warn',
        // Disallow the use of eval():
        'no-eval': 'warn',
        // Disallow extending native types:
        'no-extend-native': 'warn',
        // Disallow unnecessary calls to .bind():
        'no-extra-bind': 'warn',
        // Disallow unnecessary boolean casts:
        'no-extra-boolean-cast': 'warn',
        // Disallow unnecessary labels:
        'no-extra-label': 'warn',
        // Disallow assignments to native objects or read-only global variables:
        'no-global-assign': 'warn',
        // Disallow shorthand type conversions:
        'no-implicit-coercion': 'warn',
        // Disallow declarations in the global scope:
        'no-implicit-globals': 'warn',
        // Disallow the use of eval()-like methods:
        'no-implied-eval': 'warn',
        // Disallow inline comments after code:
        'no-inline-comments': 'warn',
        // Disallow use of this in contexts where the value of this is undefined:
        'no-invalid-this': 'warn',
        // Disallow the use of the __iterator__ property:
        'no-iterator': 'warn',
        // Disallow labels that share a name with a variable:
        'no-label-var': 'warn',
        // Disallow labeled statements:
        'no-labels': 'warn',
        // Disallow unnecessary nested blocks:
        'no-lone-blocks': 'warn',
        // Disallow if statements as the only statement in else blocks:
        'no-lonely-if': 'warn',
        // Disallow function declarations that contain unsafe references inside loop statements:
        'no-loop-func': 'warn',
        // Disallow magic numbers:
        'no-magic-numbers': ['warn', { ignore: [-1, 0, 1, 2, 10, 100, 1000] }],
        // Disallow use of chained assignment expressions:
        'no-multi-assign': 'warn',
        // Disallow multiline strings:
        'no-multi-str': 'warn',
        // Disallow negated conditions:
        'no-negated-condition': 'warn',
        // Disallow nested ternary expressions:
        'no-nested-ternary': 'warn',
        // Disallow new operators outside of assignments or comparisons:
        'no-new': 'warn',
        // Disallow new operators with the Function object:
        'no-new-func': 'warn',
        // Disallow new operators with the String, Number, and Boolean objects:
        'no-new-wrappers': 'warn',
        // Disallow &#92;8 and &#92;9 escape sequences in string literals:
        'no-nonoctal-decimal-escape': 'warn',
        // Disallow calls to the Object constructor without an argument:
        'no-object-constructor': 'warn',
        // Disallow octal literals:
        'no-octal': 'warn',
        // Disallow octal escape sequences in string literals:
        'no-octal-escape': 'warn',
        // Disallow reassigning function parameters:
        'no-param-reassign': 'warn',
        // Disallow the unary operators ++ and --:
        'no-plusplus': 'warn',
        // Disallow the use of the __proto__ property:
        'no-proto': 'warn',
        // Disallow variable redeclaration:
        'no-redeclare': 'warn',
        // Disallow multiple spaces in regular expressions:
        'no-regex-spaces': 'warn',
        // Disallow specified names in exports:
        'no-restricted-exports': 'warn',
        // Disallow specified global variables:
        'no-restricted-globals': 'warn',
        // Disallow specified modules when loaded by import:
        'no-restricted-imports': 'warn',
        // Disallow certain properties on certain objects:
        'no-restricted-properties': 'warn',
        // Disallow specified syntax:
        'no-restricted-syntax': 'warn',
        // Disallow assignment operators in return statements:
        'no-return-assign': 'warn',
        // Disallow javascript: urls:
        'no-script-url': 'warn',
        // Disallow comma operators:
        'no-sequences': 'warn',
        // Disallow variable declarations from shadowing variables declared in the outer scope:
        'no-shadow': 'warn',
        // Disallow identifiers from shadowing restricted names:
        'no-shadow-restricted-names': 'warn',
        // Disallow ternary operators:
        'no-ternary': 'off',
        // Disagree with this rule
        // Disallow throwing literals as exceptions:
        'no-throw-literal': 'warn',
        // Disallow initializing variables to undefined:
        'no-undef-init': 'warn',
        // Disallow the use of undefined as an identifier:
        'no-undefined': 'warn',
        // Disallow dangling underscores in identifiers:
        'no-underscore-dangle': 'warn',
        // Disallow ternary operators when simpler alternatives exist:
        'no-unneeded-ternary': 'warn',
        // Disallow unused expressions:
        'no-unused-expressions': 'warn',
        // Disallow unused labels:
        'no-unused-labels': 'warn',
        // Disallow unnecessary calls to .call() and .apply():
        'no-useless-call': 'warn',
        // Disallow unnecessary catch clauses:
        'no-useless-catch': 'warn',
        // Disallow unnecessary computed property keys in objects and classes:
        'no-useless-computed-key': 'warn',
        // Disallow unnecessary concatenation of literals or template literals:
        'no-useless-concat': 'warn',
        // Disallow unnecessary constructors:
        'no-useless-constructor': 'warn',
        // Disallow unnecessary escape characters:
        'no-useless-escape': 'warn',
        // Disallow renaming import, export, and destructured assignments to the same name:
        'no-useless-rename': 'warn',
        // Disallow redundant return statements:
        'no-useless-return': 'warn',
        // Require let or const instead of var:
        'no-var': 'warn',
        // Disallow void operators:
        'no-void': 'warn',
        // Disallow specified warning terms in comments:
        'no-warning-comments': 'warn',
        // Disallow with statements:
        'no-with': 'warn',
        // Require or disallow method and property shorthand syntax for object literals:
        'object-shorthand': 'warn',
        // Enforce variables to be declared either together or separately in functions:
        'one-var': 'off',
        // Require or disallow assignment operator shorthand where possible:
        'operator-assignment': 'warn',
        // Require using arrow functions for callbacks:
        'prefer-arrow-callback': 'warn',
        // Require const declarations for variables that are never reassigned after declared:
        'prefer-const': 'warn',
        // Require destructuring from arrays and/or objects:
        'prefer-destructuring': 'warn',
        // Disallow the use of Math.pow in favor of the ** operator:
        'prefer-exponentiation-operator': 'warn',
        // Enforce using named capture group in regular expression:
        'prefer-named-capture-group': 'warn',
        // Disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals:
        'prefer-numeric-literals': 'warn',
        // Disallow use of Object.prototype.hasOwnProperty.call() and prefer use of Object.hasOwn():
        'prefer-object-has-own': 'warn',
        // Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead:
        'prefer-object-spread': 'warn',
        // Require using Error objects as Promise rejection reasons:
        'prefer-promise-reject-errors': 'warn',
        // Disallow use of the RegExp constructor in favor of regular expression literals:
        'prefer-regex-literals': 'warn',
        // Require rest parameters instead of arguments:
        'prefer-rest-params': 'warn',
        // Require spread operators instead of .apply():
        'prefer-spread': 'warn',
        // Require template literals instead of string concatenation:
        'prefer-template': 'warn',
        // Enforce the consistent use of the radix argument when using parseInt():
        radix: 'warn',
        // Disallow async functions which have no await expression:
        'require-await': 'warn',
        // Enforce the use of u or v flag on RegExp:
        'require-unicode-regexp': 'warn',
        // Require generator functions to contain yield:
        'require-yield': 'warn',
        // Enforce sorted import declarations within modules:
        'sort-imports': 'off',
        // Require object keys to be sorted:
        'sort-keys': 'warn',
        // Require variables within the same declaration block to be sorted:
        'sort-vars': 'warn',
        // Require or disallow strict mode directives:
        strict: 'warn',
        // Require symbol descriptions:
        'symbol-description': 'warn',
        // Require var declarations be placed at the top of their containing scope:
        'vars-on-top': 'warn',
        // Require or disallow "Yoda" conditions:
        yoda: 'warn',
    },
};
