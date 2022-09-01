import { z } from 'zod'

export const StyleEntrySchema = z.object({
  /**
   * This attribute defines which media the style should be applied to.
   * Its value is a media query, which defaults to all if the attribute is missing.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style#attr-media
   */
  media: z.string(),
  /**
   * A cryptographic nonce (number used once) used to allow inline styles in a style-src Content-Security-Policy.
   * The server must generate a unique nonce value each time it transmits a policy.
   * It is critical to provide a nonce that cannot be guessed as bypassing a resource's policy is otherwise trivial.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style#attr-nonce
   */
  nonce: z.string(),
  /**
   * This attribute specifies alternative style sheet sets.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style#attr-title
   */
  title: z.string(),
})
  .merge(z.object({
    /**
     * Deduping property
     */
    key: z.string(),
    /**
     * Internal property to render the child output of a style.
     */
    children: z.string(),
  }).partial())

export const StyleEntriesSchema = z.array(StyleEntrySchema)
