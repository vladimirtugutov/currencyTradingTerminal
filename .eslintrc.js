module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-console': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-unused-vars': 'warn',
    'react/jsx-no-constructed-context-values': 'off',
    'default-param-last': 'off',
    'react/jsx-no-bind ': 'off',
    'import/prefer-default-export': 'off',
    'consistent-return': 'off',
  },
};
