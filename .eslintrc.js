module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    requireConfigFile: false,
    ecmaFeatures: {
      jsx: true,
      flow: true,
      typescript: true
    }
  },
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'off',
  },
  extends: 'eslint-config-airbnb',
};
