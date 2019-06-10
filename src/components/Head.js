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
    <meta property="og:url" content="https://flockcover.com/" />
    <meta
      property="og:title"
      content="Flock Cover | Simpler, smarter drone insurance"
    />
    <meta
      property="og:description"
      content="Fully flexible drone insurance for commercial, training, and recreational pilots. Get covered by the hour, day, or month - whatever suits you."
    />
    <meta
      property="og:image"
      content="https://flockcover.com/images/Social-Banner.png"
    />

    {/* Twitter Card tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://flockcover.com/" />
    <meta
      name="twitter:title"
      content="Flock Cover | Simpler, smarter drone insurance"
    />
    <meta
      name="twitter:description"
      content="Fully flexible drone insurance for commercial, training, and recreational pilots. Get covered by the hour, day, or month - whatever suits you."
    />
    <meta
      name="twitter:image"
      content="https://flockcover.com/images/Social-Banner.png"
    />

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
