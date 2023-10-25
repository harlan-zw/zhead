import type { MetaSchema } from '../../metaFlat'

export const description: MetaSchema = {
  name: 'description',
  key: 'name',
  type: 'standard',
  color: '#FF9900',
  tags: ['seo', 'social-share'],
  description: 'Provides a concise and accurate summary of the web page content. This meta tag is commonly used by search engines to display a preview snippet in search results and plays a crucial role in improving a page\'s visibility and click-through rate (CTR).',
  tips: [
    {
      title: 'Keep it Short and Unique',
      description: 'Limit the description to 150-160 characters to ensure it displays in its entirety on search engine result pages (SERPs). Avoid duplicate descriptions across pages to provide users with distinct and relevant information for each page.',
    },
    {
      title: 'Include Relevant Keywords',
      description: 'Incorporate targeted keywords naturally within the description to enhance its relevance and increase the likelihood of appearing in search results. However, avoid keyword stuffing as it can negatively impact SEO.',
    },
    {
      title: 'Write Compelling and Engaging Descriptions',
      description: 'Craft a concise and compelling description that entices users to click on the link. Consider highlighting unique selling points, benefits, or a call-to-action to capture user interest and improve CTR.',
    },
    {
      title: 'Avoid HTML Tags and Special Characters',
      description: 'Do not include HTML tags, such as <strong> or <em>, in the description as they are unnecessary and may appear as plain text on the SERPs. Similarly, special characters should be avoided or properly encoded.',
    },
  ],
  examples: [
    {
      value: 'Discover the latest fashion trends and shop for stylish clothing and accessories at our online store. Enjoy free shipping for orders over $50!',
      description: 'A description for an online fashion store, highlighting its offerings and incentives to entice users to click through to the website.',
    },
    {
      value: 'Learn advanced JavaScript techniques and best practices from our comprehensive online tutorials. Boost your coding skills with in-depth examples and exercises.',
      description: 'A description for a website offering JavaScript tutorials, emphasizing its comprehensive content and the opportunity to enhance coding skills.',
    },
  ],
  documentation: [
    'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#attr-name-description',
    'https://developers.google.com/search/docs/advanced/appearance/snippet#meta-tags',
    'https://moz.com/learn/seo/meta-description',
  ],
}
