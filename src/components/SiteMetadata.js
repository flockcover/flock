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
    </Helmet>
  )
}

SiteMetadata.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.array
}

export default SiteMetadata
