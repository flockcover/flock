import React from 'react'
import {css} from '@emotion/core'
import PropTypes from 'prop-types'
import * as R from 'ramda'

import Text from './Text'
import {breakpoints} from '../constants/theme'

const H3 = ({children, tag = 'h3', css: CSS, yellowUnderline, ...props}) => {
  return (
    <Text
      tag={tag}
      mb={1}
      css={[style.text, yellowUnderline ? style.underline : '', CSS]}
      {...props}
    >
      {children}
    </Text>
  )
}

const style = {
  text: css({
    position: 'relative',
    fontFamily: '"ITC", sans-serif',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: '24px',

    [`@media (min-width: ${R.nth(0, breakpoints)})`]: {
      fontSize: 18,
      lineHeight: '26px'
    },

    [`@media (min-width: ${R.nth(1, breakpoints)})`]: {
      fontSize: 17,
      textTransform: 'uppercase',
      lineHeight: '28px'
    }
  }),

  underline: css({
    paddingBottom: 25,
    '&::after': {
      content: '\'\'',
      position: 'absolute',
      bottom: 10,
      left: 0,
      width: '25%',
      height: 5,
      backgroundColor: '#FFE001'
    }
  })
}

H3.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string
}

export default H3
