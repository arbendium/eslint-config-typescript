import plugin from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';

export default [
	{
		// files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
		languageOptions: {
			parser,
			parserOptions: {
				ecmaVersion: 'latest'
			}
		},
		plugins: { '@typescript-eslint': plugin },
		rules: {
			// config 'eslint-recommended'
			'constructor-super': 'off', // ts(2335) & ts(2377)
			'getter-return': 'off', // ts(2378)
			'no-const-assign': 'off', // ts(2588)
			'no-dupe-args': 'off', // ts(2300)
			'no-dupe-class-members': 'off', // ts(2393) & ts(2300)
			'no-dupe-keys': 'off', // ts(1117)
			'no-func-assign': 'off', // ts(2630)
			'no-import-assign': 'off', // ts(2632) & ts(2540)
			'no-new-symbol': 'off', // ts(7009)
			'no-obj-calls': 'off', // ts(2349)
			'no-redeclare': 'off', // ts(2451)
			'no-setter-return': 'off', // ts(2408)
			'no-this-before-super': 'off', // ts(2376) & ts(17009)
			'no-undef': 'off', // ts(2304) & ts(2552)
			'no-unreachable': 'off', // ts(7027)
			'no-unsafe-negation': 'off', // ts(2365) & ts(2322) & ts(2358)
			'no-var': 'error', // ts transpiles let/const to var, so no need for vars any more
			'prefer-const': 'error', // ts provides better types with const
			'prefer-rest-params': 'error', // ts provides better types with rest args over arguments
			'prefer-spread': 'error', // ts transpiles spread to apply, so no need for manual apply
			// config 'recommended'
			'@typescript-eslint/ban-ts-comment': 'error',
			'@typescript-eslint/ban-types': 'error',
			'no-array-constructor': 'off',
			'@typescript-eslint/no-array-constructor': 'error',
			'@typescript-eslint/no-duplicate-enum-values': 'error',
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/no-extra-non-null-assertion': 'error',
			'no-loss-of-precision': 'off',
			'@typescript-eslint/no-loss-of-precision': 'error',
			'@typescript-eslint/no-misused-new': 'error',
			'@typescript-eslint/no-namespace': 'error',
			'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
			'@typescript-eslint/no-this-alias': 'error',
			'@typescript-eslint/no-unnecessary-type-constraint': 'error',
			'@typescript-eslint/no-unsafe-declaration-merging': 'error',
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'error',
			'@typescript-eslint/no-var-requires': 'error',
			'@typescript-eslint/prefer-as-const': 'error',
			'@typescript-eslint/triple-slash-reference': 'error'
		}
	}
];