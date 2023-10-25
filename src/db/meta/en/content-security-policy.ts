import type { MetaSchema } from '../../metaFlat'

export const contentSecurityPolicy: MetaSchema = {
  name: 'Content-Security-Policy',
  key: 'http-equiv',
  color: '#FF1493',
  tags: 'security',
  description: 'Specifies the content security policy (CSP) for a web page. CSP is used to mitigate the risk of cross-site scripting (XSS) attacks by specifying which sources or types of content are allowed to be loaded or executed on a web page.',
  tips: [
    {
      title: 'Implement a Strict CSP',
      description: 'Consider implementing a strict CSP that only allows trusted sources to load content. This can help prevent XSS attacks and protect your website users.',
    },
    {
      title: 'Regularly Review and Update CSP',
      description: 'Regularly review and update the content security policy to ensure it covers all necessary sources and provides adequate protection against potential vulnerabilities.',
    },
  ],
  examples: [
    {
      value: 'default-src \'self\'',
      description: 'Specifies that content should only be loaded from the same origin as the web page. This restricts content from external sources and provides a basic level of protection.',
    },
    {
      value: 'script-src \'self\' \'unsafe-inline\'',
      description: 'Allows inline JavaScript to be executed on the web page. Use with caution, as it may introduce security risks.',
    },
  ],
  documentation: [
    'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy',
    'https://content-security-policy.com/',
  ],
}
