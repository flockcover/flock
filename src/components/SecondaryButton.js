import React from 'react'
import {css} from '@emotion/core'
import Button from './Button'
import BodyText from './BodyText'
import {colors} from '../constants/theme'

const SecondaryButton = ({children, Text = BodyText, ...props}) => {
  return (
    <Button
      css={css({
        cursor: 'pointer'
      })}
      background={colors.dark}
      color="white"
      {...props}
    >
      <Text fontWeight={700}>{children}</Text>
    </Button>
  )
}

export default SecondaryButton
