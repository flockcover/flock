import React from 'react'
import Helmet from 'react-helmet'
import * as R from 'ramda'

const Head = ({frontmatter, favicon}) => (
  <Helmet>
    {/* General tags */}
    <title>{frontmatter.siteMetadata.title}</title>
    <link rel="shortcut icon" type="image/ico" href={favicon} />
    <meta name="description" content={frontmatter.siteMetadata.description} />
    <meta
      name="keywords"
      content={R.join(',', frontmatter.siteMetadata.keywords)}
    />

     {/* OpenGraph tags */}
    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content="Flock Cover | Pay-as-you-fly drone insurance"
    />
    <meta property="og:url" content="https://flockcover.com" />
    <meta
      property="og:description"
      content="At Flock, we’re creating smarter drone insurance. Get fully customised cover for your drone, precisely when you need it. Download the app and get a real-time quote in seconds."
    />
    <meta
      property="og:image"
      content="https://flockcover.com/images/Social-Banner.png"
    />
    <meta property="og:locale" content="en_GB" />

    {/* Twitter Card tags */}
    <meta property="twitter:url" content="https://flockcover.com" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:site" content="@flockcover" />
    <meta
      property="twitter:title"
      content="Flock Cover | Pay-as-you-fly drone insurance"
    />
    <meta
      property="twitter:description"
      content="At Flock, we’re creating smarter drone insurance. Get fully customised cover for your drone, precisely when you need it. Download the app and get a real-time quote in seconds."
    />
    <meta
      property="twitter:image"
      content="https://flockcover.com/images/Social-Banner.png"
    />
    <meta property="twitter:widgets:csp" content="on" />

    <script type="application/ld+json">
      {JSON.stringify({
        '@context': 'http://schema.org',
        '@type': 'Organization',
        url: 'http://www.flockcover.com',
        logo: 'http://www.flockcover.com/images/uploads/flock-logo-yellow.png',
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+44 (0) 1234 480260',
            contactType: 'customer service'
          }
        ],
        sameAs: [
          'http://www.facebook.com/flockcover',
          'https://www.instagram.com/flockcover',
          'http://www.linkedin.com/company/flockcover',
          'http://www.twitter.com/flockcover'
        ]
      })}
    </script>
  </Helmet>
)

export default Head
