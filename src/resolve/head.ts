import { validateMetaTags } from './validate'
import type { HeadInput } from './schema'

export function resolveHead<T extends HeadInput>(input: T): HeadInput {
  const validated = validateMetaTags(input)
  const output: MetaInput = []
  Object.keys(validated).forEach((key) => {
    if (!validated[key].success)
      return

    const type = MetaTags[key].type || DocumentMetaData
    output.push({
      [type]: MetaTags[key].property,
      content: validated[key].data,
    })
  })
  return output
}
