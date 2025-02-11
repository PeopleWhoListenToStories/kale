import type { Config } from 'stylelint'
import { defu } from 'defu'

function createDefaultConfig(): Config {
  return {
    extends: [
      // extends: ['stylelint-config-standard', 'stylelint-config-recommended-scss']
      'stylelint-config-standard-scss',
      // https://github.com/ota-meshi/stylelint-config-recommended-vue/blob/main/lib/index.js
      // https://github.com/ota-meshi/stylelint-config-recommended-vue/blob/main/scss/index.js
      'stylelint-config-recommended-vue/scss',
      'stylelint-config-recess-order',
    ], // .map(module => require.resolve(module)),
    overrides: [
      // {
      //   files: ['*.vue', '**/*.vue'],
      //   rules: {
      //     'unit-allowed-list': ['em', 'rem', 's'],
      //   },
      // },
    ],
    rules: {
      // https://stylelint.io/user-guide/rules/unit-no-unknown/#ignoreunits-regex-regex-string
      'unit-no-unknown': [
        true,
        {
          ignoreUnits: ['rpx'],
        },
      ],
      // https://stylelint.io/user-guide/rules/selector-type-no-unknown/
      'selector-type-no-unknown': [
        true,
        {
          ignoreTypes: ['page'],
        },
      ],
      'scss/selector-no-redundant-nesting-selector': true,
      'scss/at-rule-no-unknown': [
        true,
        {
          ignoreAtRules: [
            // tailwindcss
            'tailwind',
            'config',
            // unocss
            'unocss',
          ],
        },
      ],
    },
  }
}

// import.meta.resolve
export function defineConfig(config?: Config): Config {
  return defu(config, createDefaultConfig())
}
