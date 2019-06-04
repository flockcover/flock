import React from 'react'
import * as R from 'ramda'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const notEmpty = R.compose(
  R.not,
  R.isEmpty
)

const notNil = R.compose(
  R.not,
  R.isNil
)

const noneNil = R.any(notNil)

const isValid = R.allPass([notNil, notEmpty, noneNil])

const SiteMetadata = ({title, description, keywords = []}) => {
  const formattedKeywords = isValid(keywords) ? R.join(',', keywords) : keywords

  return (
    <Helmet>
      {isValid(title) ? <title>{title}</title> : null}
      {isValid(description) ? (
        <meta name="description" content={description} />
      ) : null}
      {isValid(keywords) ? (
        <meta name="keywords" content={formattedKeywords} />
      ) : null}

      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Flock Cover | Pay-as-you-fly drone insurance"
      />
      <meta property="og:url" content="https://flockcover.com/" />
      <meta
        property="og:description"
        content="At Flock, we’re creating smarter drone insurance. Get fully customised cover for your drone, precisely when you need it. Download the app and get a real-time quote in seconds."
      />
      <meta
        property="og:image"
        content="https://flockcover.com/images/Social-Banner.png"
      />
      <meta property="og:locale" content="en_GB" />

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
    </Helmet>
  )
}

SiteMetadata.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.array
}

export default SiteMetadata
