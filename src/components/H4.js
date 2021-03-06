import React from 'react'
import {css} from '@emotion/core'
import PropTypes from 'prop-types'
import * as R from 'ramda'

import Text from './Text'
import {breakpoints} from '../constants/theme'

const H4 = ({children, tag = 'h4', css: CSS, mb = 1, ...props}) => {
  return (
    <Text tag={tag} mb={mb} css={[style.text, CSS]} {...props}>
      {children}
    </Text>
  )
}

const style = {
  text: css({
    fontFamily: '"ITC", sans-serif',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: '20px',

    [`@media (min-width: ${R.nth(0, breakpoints)})`]: {
      fontSize: 15,
      lineHeight: '22px'
    },

    [`@media (min-width: ${R.nth(1, breakpoints)})`]: {
      fontSize: 16,
      lineHeight: '24px'
    }
  })
}

H4.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  mb: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ])
}

export default H4
