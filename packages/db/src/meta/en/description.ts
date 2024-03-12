export const description = {
  key: 'name',
  name: 'description',
  color: '#4AB367',
  tags: 'seo',
  description: 'Provides a brief summary of the webpage content. This summary is often displayed in search engine results pages (SERPs) to describe the page to potential visitors.',
  tips: [
    {
      title: 'Keep It Under 155 Characters',
      description: 'Although there is no exact character limit, keeping your description under 155 characters ensures that the entire description is displayed in SERPs without being cut off.',
    },
    {
      title: 'Use Active Voice and Include a Call-to-Action',
      description: 'Write in an active voice to engage the reader. Including a clear call-to-action can improve click-through rates from search engine results.',
    },
    {
      title: 'Avoid Duplication',
      description: 'Ensure each page has a unique description. Duplicate descriptions across pages can dilute their effectiveness with search engines.',
    },
    {
      title: 'Don’t Stuff Keywords',
      description: 'While important keywords relevant to the page content should be included, avoid stuffing keywords as this can result in a negative ranking signal to search engines.',
    },
  ],
  examples: [
    {
      type: 'good',
      value: 'Discover the best hiking trails in Colorado, from beginner to expert. Start your outdoor adventure today!',
      description: 'An effective description that is concise, incorporates keywords, and includes a call-to-action.',
    },
    {
      type: 'good',
      value: 'Learn how to bake delicious chocolate chip cookies with our easy-to-follow guide. Get started baking now!',
      description: 'An engaging description using active voice, relevant keywords, and a direct call-to-action.',
    },
    {
      type: 'bad',
      value: 'Hiking, trails, Colorado, outdoor, adventure, mountains, experience, beginner, expert, start, discover, best trails, Colorado hiking, Colorado trails, hiking adventure...',
      description: 'A bad example showing keyword stuffing which can negatively impact the page\'s ranking in search results.',
    },
    {
      type: 'bad',
      value: '',
      description: 'An absence of a description can lead to search engines pulling text from the webpage itself, which may not provide a concise or relevant summary.',
    },
  ],
  documentation: [
    'https://moz.com/learn/seo/meta-description',
    'https://support.google.com/webmasters/answer/35624?hl=en#1',
  ],
}
