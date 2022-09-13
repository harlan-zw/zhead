export interface Noscript {}

export type NoscriptEntries<T extends Record<string, any>> = Partial<Noscript & T>[]
