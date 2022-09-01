export function resolveKeyCasing<T extends Record<string, any>>(input: T) {
  const output: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(input)) {
    const kebabKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
    output[kebabKey] = typeof value === 'object' ? resolveKeyCasing(value) : value
  }
  return output
}
