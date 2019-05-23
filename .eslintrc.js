module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/recommended', '@vue/airbnb'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'vue/html-closing-bracket-spacing': 'error',
    'vue/no-use-v-if-with-v-for': 'error',
    'vue/no-v-html': 'error',
    'vue/prop-name-casing': 'error',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 2,
        multiline: {
          max: 1,
          allowFirstLine: true,
        },
      },
    ],
    'vue/html-indent': ['error', 2, { alignAttributesVertically: false }],
    'vue/script-indent': 'error',
    'import/extensions': ['error', { 'vue': 'never' }],
    semi: ['error', 'never'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
