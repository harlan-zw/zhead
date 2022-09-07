import { resolve } from 'path'
import { defineBuildConfig } from 'unbuild'
import { generate } from 'ts-to-zod'
import { readFile, writeFile } from 'fs-extra'

export default defineBuildConfig({
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
  },
  entries: [
    { input: 'src/index', name: 'index' },
  ],
  hooks: {
    'build:before': async function () {
      const files = [
        'meta-flat',
        'meta',
        'link',
        'script',
        'style',
        'base',
      ]

      for (const f of files) {
        try {
          const sourceText = await readFile(resolve(__dirname, `../schema/src/${f}.ts`), 'utf-8')

          const output = generate({
            sourceText,
          })

          await writeFile(resolve(__dirname, `./src/${f}.ts`), output.getZodSchemasFile(''), 'utf-8')
        }
        catch {
          // ignore
        }
      }
    },
  },
})
