export type ValidSeparators = '=' | '' | ' ' | '; ' | ':' | ','

export interface TransformValueOptions {
  separator?: ValidSeparators
  childSeparator?: ValidSeparators
}

export const stringifyAttrs = (attrs: Record<string, any>) => {
  return Object.keys(attrs)
    .filter(key => key !== 'children' && key !== 'key')
    .map((key) => {
      const value = transformValue(`"${attrs[key]}"`)
      return ` ${key}${value}`
    })
    .join('')
}

export function transformValue(value: unknown, options?: TransformValueOptions): string {
  if (typeof value === 'boolean')
    return ''

  const separator = options?.separator || '='
  if (typeof value === 'number')
    value = value.toString()

  return `${separator}${value}`
}

export function transformValues(value: unknown, options?: TransformValueOptions): string {
  if (typeof value !== 'object')
    return value as string
  const separator = options?.separator || ', '
  return Object.entries(value as object)
    .map(([childKey, childValue]) => {
      return `${childKey}${transformValue(childValue, { separator: options?.childSeparator })}`
    })
    .join(separator)
}

