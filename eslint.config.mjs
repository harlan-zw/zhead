import antfu from '@antfu/eslint-config'
import harlanzw from 'eslint-plugin-harlanzw'

export default antfu(
  {
    rules: {
      'no-use-before-define': 'off',
      'node/prefer-global/process': 'off',
      'node/prefer-global/buffer': 'off',
      'ts/no-empty-object-type': ['error', { allowInterfaces: 'with-single-extends', allowObjectTypes: 'always' }],
    },
  },
  {
    ignores: ['docs/**'],
  },
  {
    files: ['**/test/**/*.ts', '**/test/**/*.js'],
    rules: {
      'ts/no-unsafe-function-type': 'off',
      'no-console': 'off',
    },
  },
  ...harlanzw({ link: true, nuxt: true, vue: true }),
)
