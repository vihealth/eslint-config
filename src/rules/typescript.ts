/* eslint-disable	max-lines                    */

import type { ExtendedRulesRecord } from '../types';

/**
 * This file returns the Vi settings for @typescript-eslint's rules. See also:
 *
 *   https://typescript-eslint.io/rules/
 */
export default {
	// Require that function overload signatures be consecutive:
	'typescript/adjacent-overload-signatures': 'warn',

	// Require consistently using either T[] or Array<T> for arrays:
	'typescript/array-type': 'warn',

	// Disallow awaiting a value that is not a Thenable:
	'typescript/await-thenable': 'warn',

	// Disallow @ts-<directive> comments or require descriptions after directives:
	'typescript/ban-ts-comment': 'warn',

	// Disallow // tslint:<rule-flag> comments:
	'typescript/ban-tslint-comment': 'warn',

	// Disallow or enforce spaces inside of blocks after opening block and before closing block:
	'typescript/block-spacing': 'off',

	// Enforce consistent brace style for blocks:
	'typescript/brace-style': 'off',

	// Enforce that literals on classes are exposed in a consistent style:
	'typescript/class-literal-property-style': 'warn',

	// Enforce that class methods utilize this:
	'typescript/class-methods-use-this': 'warn',

	// Require or disallow trailing commas:
	'typescript/comma-dangle': 'off',

	// Enforce consistent spacing before and after commas:
	'typescript/comma-spacing': 'off',

	// Enforce specifying generic type arguments on type annotation or constructor name of a constructor call:
	'typescript/consistent-generic-constructors': 'warn',

	// Require or disallow the Record type:
	'typescript/consistent-indexed-object-style': 'warn',

	// Require return statements to either always or never specify values:
	'typescript/consistent-return': 'warn',

	// Enforce consistent usage of type assertions:
	'typescript/consistent-type-assertions': 'warn',

	// Enforce type definitions to consistently use either interface or type:
	'typescript/consistent-type-definitions': ['warn', 'type'],

	// Enforce consistent usage of type exports:
	'typescript/consistent-type-exports': 'warn',

	// Enforce consistent usage of type imports:
	'typescript/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],

	// Enforce default parameters to be last:
	'typescript/default-param-last': 'warn',

	// Enforce dot notation whenever possible:
	'typescript/dot-notation': 'warn',

	// Require explicit return types on functions and class methods:
	'typescript/explicit-function-return-type': 'error-when-staging',

	// Require explicit accessibility modifiers on class properties and methods:
	'typescript/explicit-member-accessibility': 'error-when-staging',

	// Require explicit return and argument types on exported functions' and classes' public class methods:
	'typescript/explicit-module-boundary-types': 'error',

	// Require or disallow spacing between function identifiers and their invocations:
	'typescript/func-call-spacing': 'off',

	// Enforce consistent indentation:
	'typescript/indent': 'off',

	// Require or disallow initialization in variable declarations:
	'typescript/init-declarations': 'off',

	// Enforce consistent spacing between property names and type annotations in types and interfaces:
	'typescript/key-spacing': 'off',

	// Enforce consistent spacing before and after keywords:
	'typescript/keyword-spacing': 'off',

	// Require empty lines around comments:
	'typescript/lines-around-comment': 'off',

	// Require or disallow an empty line between class members:
	'typescript/lines-between-class-members': 'off',

	// Enforce a maximum number of parameters in function definitions:
	'typescript/max-params': 'warn',

	// Require a specific member delimiter style for interfaces and type literals:
	'typescript/member-delimiter-style': 'off',

	// Require a consistent member declaration order:
	'typescript/member-ordering': 'warn',

	// Enforce using a particular method signature syntax:
	'typescript/method-signature-style': 'warn',

	// Enforce naming conventions for everything across a codebase:
	'typescript/naming-convention': 'off',
	// Useful, but cumbersome to implement.

	// Disallow generic Array constructors:
	'typescript/no-array-constructor': 'warn',

	// Disallow using the delete operator on array values:
	'typescript/no-array-delete': 'warn',

	// Require .toString() to only be called on objects which provide useful information when stringified:
	'typescript/no-base-to-string': 'warn',

	// Disallow non-null assertion in locations that may be confusing:
	'typescript/no-confusing-non-null-assertion': 'warn',

	// Require expressions of type void to appear in statement position:
	'typescript/no-confusing-void-expression': 'warn',

	// Disallow duplicate class members:
	'typescript/no-dupe-class-members': 'warn',

	// Disallow duplicate enum member values:
	'typescript/no-duplicate-enum-values': 'warn',

	// Disallow duplicate constituents of union or intersection types:
	'typescript/no-duplicate-type-constituents': 'warn',

	// Disallow using the delete operator on computed key expressions:
	'typescript/no-dynamic-delete': 'warn',

	// Disallow empty functions:
	'typescript/no-empty-function': 'warn',

	// Disallow the declaration of empty interfaces:
	'typescript/no-empty-interface': 'warn',

	// Disallow accidentally using the "empty object" type:
	'typescript/no-empty-object-type': 'warn',

	// Disallow the any type:
	'typescript/no-explicit-any': 'error',

	// Disallow extra non-null assertions:
	'typescript/no-extra-non-null-assertion': 'warn',

	// Disallow unnecessary parentheses:
	'typescript/no-extra-parens': 'off',

	// Disallow unnecessary semicolons:
	'typescript/no-extra-semi': 'off',

	// Disallow classes used as namespaces:
	'typescript/no-extraneous-class': 'warn',

	// Require Promise-like statements to be handled appropriately:
	'typescript/no-floating-promises': 'error-when-staging',

	// Disallow iterating over an array with a for-in loop:
	'typescript/no-for-in-array': 'warn',

	// Disallow the use of eval()-like methods:
	'typescript/no-implied-eval': 'warn',

	// Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers:
	'typescript/no-import-type-side-effects': 'warn',

	// Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean:
	'typescript/no-inferrable-types': 'warn',

	// Disallow this keywords outside of classes or class-like objects:
	'typescript/no-invalid-this': 'warn',

	// Disallow void type outside of generic or return types:
	'typescript/no-invalid-void-type': 'warn',

	// Disallow function declarations that contain unsafe references inside loop statements:
	'typescript/no-loop-func': 'warn',

	// Disallow literal numbers that lose precision:
	'typescript/no-loss-of-precision': 'warn',

	// Disallow magic numbers:
	'typescript/no-magic-numbers': ['error-when-staging', { ignore: [-1, 0, 1, 2, 10, 100, 1000] }],

	// Disallow the void operator except when used to discard a value:
	'typescript/no-meaningless-void-operator': 'warn',

	// Enforce valid definition of new and constructor:
	'typescript/no-misused-new': 'warn',

	// Disallow Promises in places not designed to handle them:
	'typescript/no-misused-promises': 'warn',

	// Disallow enums from having both number and string members:
	'typescript/no-mixed-enums': 'warn',

	// Disallow TypeScript namespaces:
	'typescript/no-namespace': 'warn',

	// Disallow non-null assertions in the left operand of a nullish coalescing operator:
	'typescript/no-non-null-asserted-nullish-coalescing': 'warn',

	// Disallow non-null assertions after an optional chain expression:
	'typescript/no-non-null-asserted-optional-chain': 'warn',

	// Disallow non-null assertions using the ! postfix operator:
	'typescript/no-non-null-assertion': 'warn',

	// Disallow variable redeclaration:
	'typescript/no-redeclare': 'off',

	// Disallow members of unions and intersections that do nothing or override type information:
	'typescript/no-redundant-type-constituents': 'off',
	// Disabled because redundant type constituents can make code more self-documenting

	// Disallow invocation of require():
	'typescript/no-require-imports': 'warn',

	// Disallow specified modules when loaded by import:
	'typescript/no-restricted-imports': 'warn',

	// Disallow variable declarations from shadowing variables declared in the outer scope:
	'typescript/no-shadow': 'warn',

	// Disallow aliasing this:
	'typescript/no-this-alias': 'warn',

	// Disallow throwing literals as exceptions:
	'typescript/no-throw-literal': 'error',

	// Disallow type aliases:
	'typescript/no-type-alias': 'off',

	// Disallow unnecessary equality comparisons against boolean literals:
	'typescript/no-unnecessary-boolean-literal-compare': 'warn',

	// Disallow conditionals where the type is always truthy or always falsy:
	'typescript/no-unnecessary-condition': 'off',
	// Sometimes useful to do this for validation purposes.

	// Disallow unnecessary assignment of constructor property parameter:
	'typescript/no-unnecessary-parameter-property-assignment': 'warn',

	// Disallow unnecessary namespace qualifiers:
	'typescript/no-unnecessary-qualifier': 'warn',

	// Disallow unnecessary template expressions:
	'typescript/no-unnecessary-template-expression': 'warn',

	// Disallow type arguments that are equal to the default:
	'typescript/no-unnecessary-type-arguments': 'warn',

	// Disallow type assertions that do not change the type of an expression:
	'typescript/no-unnecessary-type-assertion': 'warn',

	// Disallow unnecessary constraints on generic types:
	'typescript/no-unnecessary-type-constraint': 'warn',

	// Disallow type parameters that only appear once:
	'typescript/no-unnecessary-type-parameters': 'warn',

	// Disallow calling a function with a value with type any:
	'typescript/no-unsafe-argument': 'warn',

	// Disallow assigning a value with type any to variables and properties:
	'typescript/no-unsafe-assignment': 'warn',

	// Disallow calling a value with type any:
	'typescript/no-unsafe-call': 'warn',

	// Disallow unsafe declaration merging:
	'typescript/no-unsafe-declaration-merging': 'warn',

	// Disallow comparing an enum value with a non-enum value:
	'typescript/no-unsafe-enum-comparison': 'warn',

	// Disallow using the unsafe built-in Function type:
	'typescript/no-unsafe-function-type': 'warn',

	// Disallow member access on a value with type any:
	'typescript/no-unsafe-member-access': 'warn',

	// Disallow returning a value with type any from a function:
	'typescript/no-unsafe-return': 'warn',

	// Require unary negation to take a number:
	'typescript/no-unsafe-unary-minus': 'warn',

	// Disallow unused expressions:
	'typescript/no-unused-expressions': 'warn',

	// Disallow unused variables:
	'typescript/no-unused-vars': [
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
	'typescript/no-use-before-define': [
		'error-when-staging',
		{
			classes: false,
			functions: false,
			variables: true,
		},
	],

	// Disallow unnecessary constructors:
	'typescript/no-useless-constructor': 'error',

	// Disallow empty exports that don't change anything in a module file:
	'typescript/no-useless-empty-export': 'warn',

	// Disallow unnecessary template expressions:
	'typescript/no-useless-template-literals': 'off',

	// Disallow require statements except in import statements:
	'typescript/no-var-requires': 'off',
	// Rule deprecated

	// Disallow using confusing built-in primitive class wrappers:
	'typescript/no-wrapper-object-types': 'warn',

	// Enforce non-null assertions over explicit type casts:
	'typescript/non-nullable-type-assertion-style': 'warn',

	// Enforce consistent spacing inside braces:
	'typescript/object-curly-spacing': 'off',

	// Disallow throwing non-Error values as exceptions:
	'typescript/only-throw-error': 'warn',

	// Require or disallow padding lines between statements:
	'typescript/padding-line-between-statements': 'off',

	// Require or disallow parameter properties in class constructors:
	'typescript/parameter-properties': 'warn',

	// Enforce the use of as const over literal type:
	'typescript/prefer-as-const': 'warn',

	// Require destructuring from arrays and/or objects:
	'typescript/prefer-destructuring': 'warn',

	// Require each enum member value to be explicitly initialized:
	'typescript/prefer-enum-initializers': 'warn',

	// Enforce the use of Array.prototype.find() over Array.prototype.filter() followed by [0] when looking for a single result:
	'typescript/prefer-find': 'warn',

	// Enforce the use of for-of loop over the standard for loop where possible:
	'typescript/prefer-for-of': 'warn',

	// Enforce using function types instead of interfaces with call signatures:
	'typescript/prefer-function-type': 'warn',

	// Enforce includes method over indexOf method:
	'typescript/prefer-includes': 'warn',

	// Require all enum members to be literal values:
	'typescript/prefer-literal-enum-member': 'warn',

	// Require using namespace keyword over module keyword to declare custom TypeScript modules:
	'typescript/prefer-namespace-keyword': 'warn',

	// Enforce using the nullish coalescing operator instead of logical assignments or chaining:
	'typescript/prefer-nullish-coalescing': 'warn',

	// Enforce using concise optional chain expressions instead of chained logical ands, negated logical ors, or empty objects:
	'typescript/prefer-optional-chain': 'warn',

	// Require using Error objects as Promise rejection reasons:
	'typescript/prefer-promise-reject-errors': 'error',

	// Require private members to be marked as readonly if they're never modified outside of the constructor:
	'typescript/prefer-readonly': 'warn',

	// Require function parameters to be typed as readonly to prevent accidental mutation of inputs:
	'typescript/prefer-readonly-parameter-types': 'off',
	// Clever, but cumbersome to implement.

	// Enforce using type parameter when calling Array#reduce instead of casting:
	'typescript/prefer-reduce-type-parameter': 'warn',

	// Enforce RegExp#exec over String#match if no global flag is provided:
	'typescript/prefer-regexp-exec': 'warn',

	// Enforce that this is used when only this type is returned:
	'typescript/prefer-return-this-type': 'warn',

	// Enforce using String#startsWith and String#endsWith over other equivalent methods of checking substrings:
	'typescript/prefer-string-starts-ends-with': 'warn',

	// Enforce using @ts-expect-error over @ts-ignore:
	'typescript/prefer-ts-expect-error': 'off',

	// Require any function or method that returns a Promise to be marked async:
	'typescript/promise-function-async': 'off',
	// Disabling because same functin should have a return type annotation -- and might not use `await`

	// Enforce the consistent use of either backticks, double, or single quotes:
	'typescript/quotes': 'off',

	// Require Array#sort and Array#toSorted calls to always provide a compareFunction:
	'typescript/require-array-sort-compare': 'warn',

	// Disallow async functions which do not return promises and have no await expression:
	'typescript/require-await': 'error-when-staging',

	// Require both operands of addition to be the same type and be bigint, number, or string:
	'typescript/restrict-plus-operands': 'warn',

	// Enforce template literal expressions to be of string type:
	'typescript/restrict-template-expressions': 'warn',

	// Enforce consistent awaiting of returned promises:
	'typescript/return-await': 'warn',

	// Require or disallow semicolons instead of ASI:
	'typescript/semi': 'off',

	// Enforce constituents of a type union/intersection to be sorted alphabetically:
	'typescript/sort-type-constituents': 'off',

	// Enforce consistent spacing before blocks:
	'typescript/space-before-blocks': 'off',

	// Enforce consistent spacing before function parenthesis:
	'typescript/space-before-function-paren': 'off',

	// Require spacing around infix operators:
	'typescript/space-infix-ops': 'off',

	// Disallow certain types in boolean expressions:
	'typescript/strict-boolean-expressions': 'off',
	// Nah

	// Require switch-case statements to be exhaustive:
	'typescript/switch-exhaustiveness-check': 'warn',

	// Disallow certain triple slash directives in favor of ES6-style import declarations:
	'typescript/triple-slash-reference': 'warn',

	// Require consistent spacing around type annotations:
	'typescript/type-annotation-spacing': 'off',

	// Require type annotations in certain places:
	'typescript/typedef': 'warn',

	// Enforce unbound methods are called with their expected scope:
	'typescript/unbound-method': 'warn',

	// Disallow two overloads that could be unified into one with a union or an optional/rest parameter:
	'typescript/unified-signatures': 'warn',

	// Enforce typing arguments in .catch() callbacks as unknown:
	'typescript/use-unknown-in-catch-callback-variable': 'warn',
} as ExtendedRulesRecord;
