// add as a dev-proxy
const fileSystemAPI = require('./src/cms/file-system-api-plugin/fs-express-api')

module.exports = {
  siteMetadata: {
    title: 'Flock',
    description: 'Cover',
    keywords: 'insurance, drones, pay-as-you-go'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: '@flockcover/gatsby-plugin-branch-web-sdk',
      options: {
        prodBranchKey: 'key_live_jdrWlL9UY3OQcMssCT3ClbhkwvgXIaHJ',
        devBranchKey: 'key_test_olq2fIWPX0NUeGxsyG1xFhohFFj2OhL0'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'images' // Must match the source name ^
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200
            }
          },
          {
            resolve: 'remark-external-links',
            options: {
              protocols: ['http', 'https', 'tel', 'mailto']
            }
          }
        ]
      }
    },
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-segment-js',
      options: {
        prodKey: 'J5p8puLW0RzI5J7x74TQioRNwBkoRei3',
        devKey: 'hjQsqleIuNWqPzITXoC5ptb00148l3nN',
        trackPage: true
      }
    },
    {
      resolve: 'gatsby-plugin-intercom-spa',
      options: {
        app_id: 'db51wrth'
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`, // default: undefined
        stylesPath: `${__dirname}/src/cms/cms.css`, // default: undefined
        enableIdentityWidget: false, // default: true
        publicPath: 'admin',
        htmlTitle: 'Content Manager',
        manualInit: true
      }
    }
  ],
  // add the file-system api as an api proxy:
  // https://next.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: fileSystemAPI
}
