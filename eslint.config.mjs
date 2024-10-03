import antfu from '@antfu/eslint-config';

export default antfu({
  node: true,
}, {
  rules: {
    'no-console': 'off',
    'antfu/if-newline': 'off',
    'antfu/top-level-function': 'off',
    'no-loop-func': 'error',
    'strict': [
      'error',
      'safe',
    ],
    'max-nested-callbacks': [
      'error',
      {
        max: 7,
      },
    ],
    'no-lonely-if': 'error',
    'prefer-numeric-literals': 'error',
    'no-useless-concat': 'error',
    'operator-assignment': [
      'error',
      'always',
    ],
    'arrow-body-style': [
      'error',
      'as-needed',
    ],
    'camelcase': 'error',
    'style/semi': [
      'error',
      'always',
    ],
    'style/linebreak-style': [
      'error',
      'unix',
    ],
    'style/no-confusing-arrow': [
      'error',
      {
        allowParens: true,
      },
    ],
    'style/function-call-spacing': [
      'error',
      'never',
    ],
    'style/brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    'style/key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
        mode: 'minimum',
      },
    ],
    'style/keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          function: {
            after: false,
          },
        },
      },
    ],
    'style/space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'style/space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
        overrides: {
          typeof: false,
        },
      },
    ],
    'node/hashbang': 'error',
    'node/no-missing-import': 'error',
    'node/no-missing-require': 'error',
    'node/no-process-exit': 'error',
    'node/no-unsupported-features/es-builtins': 'error',
    'node/no-unsupported-features/es-syntax': 'error',
    'node/no-unsupported-features/node-builtins': 'error',
    'node/prefer-global/buffer': [
      'error',
      'always',
    ],
    'node/prefer-global/process': [
      'error',
      'always',
    ],
  },
});
