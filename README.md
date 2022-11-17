# Fueled TypeScript Style Guide

*TypeScript style guide used internally on [Fueled](https://fueled.com/en-gb) projects.*


## About
This guide focuses specifically on code quality based rules for TypeScript, rather than formatting rules. We utilize [Prettier](https://prettier.io) for code formatting. It uses and extends upon [@typescript-eslint/recommended](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended.ts) rule set, as well as [Prettier ESLint config](https://github.com/prettier/eslint-config-prettier) to turn off rules that may conflict with Prettier.

> Note: this is intended to be used with [TypeScript strict mode](https://www.typescriptlang.org/tsconfig#strict) enabled.


## Rules

#### [@typescript-eslint/array-type](https://typescript-eslint.io/rules/array-type)
Enforce T[] syntax for arrays over Array<T>.

#### [@typescript-eslint/explicit-function-return-type](https://typescript-eslint.io/rules/explicit-function-return-type)
Enforce explicit function return types.

#### [@typescript-eslint/explicit-module-boundary-types](https://typescript-eslint.io/rules/explicit-module-boundary-types)
Enforce explicit return & argument types on exported functions & public class methods.


#### [@typescript-eslint/no-explicit-any](https://typescript-eslint.io/rules/no-explicit-any)
Disallow explicit `any` types. Use `unknown` instead.

#### [@typescript-eslint/no-floating-promises](https://typescript-eslint.io/rules/no-floating-promises)
Require Promise-like statements to be handled appropriately.

#### [@typescript-eslint/no-non-null-assertion](https://typescript-eslint.io/rules/no-non-null-assertion)
Disable using non-null assertions as they cancel the benefits of strict null-checking mode.
Prefer explicit null checks for safety.

#### [no-restricted-syntax](https://eslint.org/docs/rules/no-restricted-syntax)
Restrict use of labels and [with](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with) statements.  

#### [@typescript-eslint/no-unnecessary-condition](https://typescript-eslint.io/rules/no-unnecessary-condition)
Avoid unnecessary conditionals.

#### [@typescript-eslint/no-unnecessary-type-assertion](https://typescript-eslint.io/rules/no-unnecessary-type-assertion)
Warn against unnecessary type assertions.

#### [@typescript-eslint/no-unused-vars](https://typescript-eslint.io/rules/no-unused-vars)
Enforce no unused variables.

#### [@typescript-eslint/no-useless-constructor](https://typescript-eslint.io/rules/no-useless-constructor)
Warn against useless class constructors.

#### [@typescript-eslint/prefer-nullish-coalescing](https://typescript-eslint.io/rules/prefer-nullish-coalescing)
Prefer nullish coalescing operator.

#### [@typescript-eslint/prefer-optional-chain](https://typescript-eslint.io/rules/prefer-optional-chain)
Prefer optional chaining operator.

#### [@typescript-eslint/promise-function-async](https://typescript-eslint.io/rules/promise-function-async)
Ensure all functions that return a promise are marked as async.

#### [@typescript-eslint/restrict-template-expressions](https://typescript-eslint.io/rules/restrict-template-expressions)
Restrict template expressions to allow for string & number types only.  
Other types must be checked explicitly.

#### [@typescript-eslint/require-await](https://typescript-eslint.io/rules/require-await)
Disallow async functions which have no await expression and do not return a promise.

#### [@typescript-eslint/switch-exhaustiveness-check](https://typescript-eslint.io/rules/switch-exhaustiveness-check)
Enforce covering all cases in a switch statement.
