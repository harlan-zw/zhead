import antfu from '@antfu/eslint-config'
import harlanzw from 'eslint-plugin-harlanzw'

export default antfu(
  {
    rules: {
      'ts/no-empty-object-type': ['error', { allowInterfaces: 'with-single-extends', allowObjectTypes: 'always' }],
    },
  },
  ...harlanzw({ base: { ignores: ['docs/**'] }, link: true, nuxt: true, vue: true }),
)
