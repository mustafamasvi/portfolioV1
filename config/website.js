const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Mustafa Masvi', // Navigation and Site Title
  siteTitleAlt: 'Mustafa', // Alternative Site title for SEO
  siteTitleShort: 'Mustafa', // short_name for manifest
  siteHeadline: 'Full Stack Developer', // Headline for schema.org JSONLD
  siteUrl: 'http://mustafamasvi.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Full Stack Developer',
  author: 'Mustafa', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@mustafamasvi', // Twitter Username
  ogSiteName: 'mustafa.masvi', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-136346593-1',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
