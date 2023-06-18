module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:i18next/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
  ],
  overrides: [
    {
      files: ['**/src/**/*.{test, stories}.{ts,tsx}'],
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
    'react-hooks',
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
    'react/function-component-definition': [2, {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    }],
    'react/jsx-props-no-spreading': 'warn',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
    'react/jsx-curly-brace-presence': ['error', {
      props: 'always',
      children: 'never',
    }],
    'react/self-closing-comp': 'off',
    'react/no-array-index-key': 'warn',
    // jsx-a11y
    'jsx-a11y/no-static-element-interactions': 'off',
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
    'linebreak-style': ['error', 'unix'],
    'max-len': ['error', {
      ignoreComments: true,
      code: 120,
      tabWidth: 2,
    }],
    'consistent-return': 0,
    'no-shadow': 0,
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state',
      ],
    }],
    // ts
    // i18next
    'i18next/no-literal-string': ['warn', {
      markupOnly: true,
      ignoreAttribute: ['data-testid', 'background', 'variant', 'size'],
    }],
  },
  globals: {
    __IS_DEV__: true,
  },
}
