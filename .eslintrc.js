module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:i18next/recommended',
    'airbnb',
  ],
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },

  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
  ],
  rules: {
    // react
    'react/jsx-indent': [2, 2],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/button-has-type': 'warn',
    'react/require-default-props': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-props-no-spreading': 'warn',
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'always', children: 'never' },
    ],
    'react/self-closing-comp': 'off',
    'react/no-array-index-key': 'warn',
    // common
    semi: [2, 'never'],
    indent: [2, 2],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    'arrow-body-style': ['error', 'always'],
    'max-len': ['error', { ignoreComments: true, code: 120, tabWidth: 2 }],
    // ts
    // i18next
    'i18next/no-literal-string': ['error', { markupOnly: true, ignoreAttribute: ['data-testid'] }],
  },

  globals: {
    __IS_DEV__: true,
  },
}
