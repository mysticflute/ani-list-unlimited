module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  plugins: ['prettier'],
  globals: {
    GM_xmlhttpRequest: 'readonly',
    GM_setValue: 'readonly',
    GM_getValue: 'readonly',
    GM_listValues: 'readonly',
    GM: 'readonly',
  },
  rules: {
    semi: 'error',
    quotes: ['error', 'single'],
    'no-trailing-spaces': 'warn',
    'prettier/prettier': 'warn',
  },
};
