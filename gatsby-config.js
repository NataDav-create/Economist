'use strict';

const siteConfig = require('./config.js');

module.exports = {
  pathPrefix: siteConfig.pathPrefix,
  siteMetadata: {
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    homePage: siteConfig.homePage,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteConfig.name,
        short_name: siteConfig.shortName,
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#F7A046',
        display: 'browser',
        icon: 'static/favicon.ico',
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          runtimeCaching: [
            {
              urlPattern: /(\.js$|\.css$|[^:]static\/)/,
              handler: 'CacheFirst',
            },
            {
              urlPattern: /^https?:.*\/page-data\/.*\.json/,
              handler: 'StaleWhileRevalidate',
            },
            {
              urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
              handler: 'StaleWhileRevalidate',
            },
            {
              urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
              handler: 'StaleWhileRevalidate',
            },
          ],
        },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: `TEST-ID`,
        includeInDevelopment: false,
        defaultDataLayer: { platform: 'gatsby' },
      },
    },
  ],
};
