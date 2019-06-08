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

const SiteMetadata = ({
  title,
  description,
  keywords = [],
  openGraph,
  twitter
}) => {
  const formattedKeywords = isValid(keywords) ? R.join(',', keywords) : keywords

  const {ogTitle, ogDescription, ogImage} = openGraph
  const {twtTitle, twtDescription, twtImage} = twitter

  return (
    <Helmet>
      {isValid(title) ? <title>{title}</title> : null}
      {isValid(description) ? (
        <meta name="description" content={description} />
      ) : null}
      {isValid(keywords) ? (
        <meta name="keywords" content={formattedKeywords} />
      ) : null}

      {/* OpenGraph tags */}
      {isValid(ogTitle) ? <meta property="og:title" content={ogTitle} /> : null}
      {isValid(ogDescription) ? (
        <meta property="og:description" content={ogDescription} />
      ) : null}
      {isValid(ogImage) ? <meta property="og:image" content={ogImage} /> : null}

      {/* Twitter Card tags */}
      {isValid(twtTitle) ? (
        <meta property="twitter:title" content={ogTitle} />
      ) : null}
      {isValid(twtDescription) ? (
        <meta property="twitter:description" content={twtDescription} />
      ) : null}
      {isValid(twtImage) ? (
        <meta property="twitter:image" content={ogImage} />
      ) : null}
    </Helmet>
  )
}

SiteMetadata.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.array
}

export default SiteMetadata
