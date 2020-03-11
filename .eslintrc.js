module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  env: {
    // node: true,
    browser: true,
    // jquery: true,
  },
  parserOptions: {
    ecmaVersion: 6,
  },
}
