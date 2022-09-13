import type { Stringable } from './types'

export interface BodyAttributes {
  /**
   * Any arbitrary keys such as `data-*`.
   */
  [key: string]: Stringable
}
