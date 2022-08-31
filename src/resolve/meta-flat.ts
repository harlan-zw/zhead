import type { MetaFlatInput, MetaInput } from 'zhead'

export function resolveMetaFlat<T extends MetaFlatInput>(input: T): MetaInput {
  // const output: MetaInput = []
  // Object.keys(validated).forEach((key) => {
  //   if (!validated[key].success)
  //     return
  //
  //   const type = MetaTags[key].type || DocumentMetaData
  //   output.push({
  //     [type]: MetaTags[key].property,
  //     content: validated[key].data,
  //   })
  // })
  return input as unknown as MetaInput
}
