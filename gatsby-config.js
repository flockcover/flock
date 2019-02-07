module.exports = {
  siteMetadata: {
    title: 'Flock',
    description: 'Cover',
    keywords: 'insurance, drones, pay-as-you-go'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-segment-js',
      options: {
        prodKey: 'J5p8puLW0RzI5J7x74TQioRNwBkoRei3',
        devKey: 'hjQsqleIuNWqPzITXoC5ptb00148l3nN',
        trackPage: true
      }
    },
    {
      resolve: '@flockcover/gatsby-plugin-branch-web-sdk',
      options: {
        prodBranchKey: 'key_live_jdrWlL9UY3OQcMssCT3ClbhkwvgXIaHJ',
        devBranchKey: 'key_test_olq2fIWPX0NUeGxsyG1xFhohFFj2OhL0'
      }
    },
    {
      resolve: '@flockcover/gatsby-plugin-branch-segment-identify'
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
          }
        ]
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-plugin-netlify-cms'
    },
    {
      resolve: 'gatsby-plugin-intercom-spa',
      options: {
        app_id: 'db51wrth'
      }
    }
  ]
}
