import { defineBuildConfig } from 'unbuild'
import {copyFile, readFile, rename, writeFile} from 'fs-extra'

export default defineBuildConfig({
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
  },
  entries: [
    { input: 'src/index', name: 'index' },
    { input: 'src/runtime/', outDir: 'dist/runtime', builder: 'mkdist', format: 'cjs', ext: 'cjs' },
    { input: 'src/runtime/', outDir: 'dist/runtime', builder: 'mkdist', format: 'mjs', ext: 'mjs' },
  ],
  externals: [
    'schema-dts'
  ],
  hooks: {
    async 'mkdist:done'(ctx) {
      const simpleDtsFile = `${ctx.options.outDir}/runtime/base.d.ts`
      const simpleDts = await readFile(simpleDtsFile, { encoding: 'utf-8' })
      await writeFile(simpleDtsFile, simpleDts.replace(/<T extends (.*?)>/gm, `<T extends import('zhead').$1>`), { encoding: 'utf-8'})
      await writeFile(`${ctx.options.outDir}/runtime/full.d.ts`, simpleDts.replace(/<T extends (.*?)>/gm, `<T extends import('schema-dts').$1>`), { encoding: 'utf-8'})
      await rename(simpleDtsFile, `${ctx.options.outDir}/runtime/simple.d.ts`)
    }
  }
})
