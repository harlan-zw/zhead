import fsp from 'node:fs/promises'
import OpenAI from 'openai'

// accept a meta tag name as an argument
const meta = process.argv[2]

const openai = new OpenAI({
  apiKey: process.env.OPENAPI_KEY,
})

const stream = await openai.chat.completions.create({
  model: 'gpt-3.5-turbo',
  messages: [
    { role: 'user',content: `
You are a senior web developer with strong writing skills who is writing documentation for all meta tags. You
have deep knowledge of SEO, device and browser compatibility, and performance.

Your writing is inspired by MDN web docs, MOZ, open graph protocol, Facebook and Twitter docs but you have been asked to
create unique output.
    
Please provide a structured entry for a meta tag, in javascript. 

Include all of the following keys as a javascript object, do not skip any. The export name should be the slugged version of the meta tag.

- "key": Should be the meta tag attribute used for the name, should be one of "name", "property", "http-equiv".
- "name": Name of the meta tag (e.g., 'viewport', 'description', 'robots').
- "parameters": For meta tags that only take in a set of known values, list them within an array with appropriate documentation on usage. For example, robots have many values, while description does not.
- "type": Where does the meta come from, HTML spec tags (like viewport, description) should be standard, otherwise one of: standard, open-graph-protocol, twitter, facebook, google, other
- "color": A color that represents the meta tag. Should be a hex code. Use colours that have more saturation and brightness based on how common it is, avoid white and black.
- "tags": Features related to this tag. Should select from the following categories: 'seo' | 'social-share' | 
'other' | 'unknown' | 'security' | 'privacy' | 'pwa' | 'browser' | 'accessibility'
- "description": A brief, concise description of the meta tag's purpose. Should not include tips.
- "tips": An array of objects with a title and description. Tips on how to use the meta tag effectively, any gotchas, etc. This should only include tips that are not already covered in the description and be technical to SEO and performance.
- "examples": Examples of different values for the meta tag and their descriptions, presented as an array of objects.
- "documentation": links, including authoritative sources, for reference. Do not include any links unless you have high confidence that they exist and are accessible. For SEO tags we should link to MOZ if an appropriate link is known.

Here's an example:

export const charset = {
  name: 'charset',
  key: 'charset',
  color: '#FFB30
  tags: 'browser',
  description: 'Used to define the character encoding for a web page. Character encoding specifies how characters are represented digitally, ensuring proper display of text and content on the page.',
  tips: [
    {
      title: 'Use UTF-8',
      description: 'The most widely supported and recommended character encoding for web pages is UTF-8.',
    },
  ],
  examples: [
    {
      value: 'UTF-8',
      description: 'Specifies the "charset" meta tag with UTF-8 character encoding for a web page, ensuring compatibility with a wide range of characters.',
    },
    {
      value: 'ISO-8859-1',
      description: 'Defines the "charset" meta tag with ISO-8859-1 character encoding for a web page, which is less common but may be necessary for specific cases.',
    },
  ],
  documentation: [
    'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-charset',
    'https://developers.google.com/search/docs/crawling-indexing/special-tags#meta-tags',
  ],
}

export const robots = {
  name: 'robots',
  key: 'name',
  description: \`Used to control the behavior of search engine crawlers on a web page. It allows developers to specify directives that influence indexing, following links, and other interactions.\`,
  examples: [
    {
      value: 'index, follow',
      description: 'Allows search engines to index the page and follow links.',
    },
    {
      value: 'noindex, nofollow',
      description: 'Instructs search engines not to index the page and not to follow any links on the page.',
    },
  ],
  parameters: [
    { value: 'index', description: 'Allows search engines to index the page.' },
    { value: 'noindex', description: 'Instructs search engines not to index the page.' },
    { value: 'follow', description: 'Allows search engines to follow links on the page.' },
    { value: 'nofollow', description: 'Instructs search engines not to follow links on the page.' },
    { value: 'noarchive', description: 'Prevents search engines from displaying cached copies of the page.' },
    // etc
  ],
  tips: [
    {
      title: 'Use Directives Wisely',
      description: 'Carefully choose and use directives, such as "noindex" and "nofollow," to guide search engine behavior according to your site\\'s requirements.',
    },
    {
      title: 'Prevent Duplicate Content',
      description: 'Using "canonical" and "noindex" directives can help prevent duplicate content issues, improving your site\\'s SEO.',
    },
  ],
  documentation: [
    'https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag',
  ],
  tags: 'seo',
}

Please provide an entry for the "${meta}" meta following this format. Do not include output after the object ends.` },
  ],
  stream: true,
})
let output = ''
// write to a file `<name>.ts` in the `src/db/meta/${meta}.ts` directory
for await (const part of stream) {
  output += part.choices[0]?.delta?.content || ''
  process.stdout.write(part.choices[0]?.delta?.content || '')
}

// do write
const path = import.meta.url.replace('file://', '')
  .replace('scripts/seed.ts', `src/db/meta/en/${meta}.ts`)
await fsp.writeFile(path, output)
