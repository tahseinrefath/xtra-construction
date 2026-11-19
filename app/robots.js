export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/cart', '/my-account'],
    },
    sitemap: 'https://construction.xtratheme.com/sitemap.xml',
  };
}
