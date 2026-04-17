// next-seo.config.js
module.exports = {
  defaultTitle: 'Портфолио разработчика | Тео Перепилицын',
  titleTemplate: '%s | Портфолио разработчика',
  defaultDescription: 'Персональное портфолио разработчика с современным дизайном и интерактивными элементами',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://ваш-ник.github.io/portfolio/',
    siteName: 'Портфолио разработчика',
    images: [
      {
        url: 'https://ваш-ник.github.io/portfolio/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Портфолио разработчика',
      },
    ],
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'keywords',
      content: 'портфолио, разработчик, react, nextjs, typescript, threejs',
    },
    {
      name: 'author',
      content: 'Тео Перепилицын',
    },
  ],
}