module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue']
  },

  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    'prettier'
  ],

  plugins: ['@typescript-eslint'],

  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        avoidEscape: true
      }
    ],
    'comma-dangle': ['error', 'never'],
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    'eol-last': ['error', 'always'],
    indent: ['error', 2],
    'vue/html-indent': ['error', 2],
    'vue/script-setup-no-uses-vars': 'off',
    'vue/multi-word-component-names': 'off',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'always'],
    'max-len': [
      'error',
      {
        code: 120, // Maximum line length
        tabWidth: 2, // Number of spaces per indentation level
        ignoreComments: true, // Ignore comments
        ignoreUrls: true, // Ignore URLs
        ignoreStrings: true, // Ignore string literals
        ignoreTemplateLiterals: true, // Ignore template literals
        ignoreRegExpLiterals: true // Ignore regular expressions
      }
    ],
    'vue/require-default-prop': 'off',
    'vue/require-prop-types': 'off',
    'vue/no-v-html': 'off',
    'vue/no-dupe-keys': 'off', // TODO this rule is needed!
    'vue/no-setup-props-destructure': 'off', // TODO this rule is needed!
    // 'no-console': ['error', { allow: ['warn', 'error'] }],
    // Updated on 07-10-22 in chapter meet:
    'template-curly-spacing': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always'
        },
        svg: 'always',
        math: 'never'
      }
    ],
    'vue/multi-word-component-names': 'off',
    'vue/no-deprecated-data-object-declaration': 'error',
    'vue/require-name-property': 'error',
    'vue/order-in-components': 'off',
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/multiline-html-element-content-newline': [
      'error',
      {
        ignoreWhenEmpty: true,
        ignores: [],
        allowEmptyLines: false
      }
    ]
  }
};
