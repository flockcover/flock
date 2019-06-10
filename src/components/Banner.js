import React from 'react'
import PropTypes from 'prop-types'
import * as R from 'ramda'
import {css} from '@emotion/core'

import Flex from './Flex'
import SiteContainer from './SiteContainer'
import PrimaryButton from './PrimaryButton'
import {breakpoints, fontFamilies} from '../constants/theme'
import Text from './Text'

const Banner = ({
  buttonId,
  image,
  header,
  mainText,
  buttonText,
  buttonUrl,
  buttonTrack,
  buttonColor,
  buttonBorder
}) => {
  const download = () => {
    if (buttonTrack) analytics.track(buttonTrack)
    window.open(buttonUrl)
  }
  
  return (
    <Flex
      justifyContent="center"
      position="relative"
      background={`url(${image})`}
      css={styles.background}
    >
      <SiteContainer>
        <Flex
          flexWrap="wrap"
          alignItems="flex-start"
          flexDirection="column"
          pt={[3, 5]}
          pb={[3, 5]}
          pl={2}
          pr={2}
        >
          {header && (
            <Text
              css={css`
                ${styles.header};
              `}
            >
              {header}
            </Text>
          )}
          <Text
            mb={1}
            css={css`
              ${styles.mainText};
            `}
          >
            {mainText}
          </Text>
          {buttonText && buttonUrl && (
            <PrimaryButton
              id={buttonId}
              to={buttonUrl}
              track={buttonTrack}
              title={buttonText}
              color={buttonColor || 'yellow'}
              border={buttonBorder || false}
            />
          )}
        </Flex>
      </SiteContainer>
    </Flex>
  )
}

export default Banner

Banner.propTypes = {
  testimonials: PropTypes.array
}

const styles = {
  background: css({
    position: 'relative',
    backgroundSize: 'cover'
  }),

  mainText: `
    font-family: ${fontFamilies.itc};
    font-weight: 700;
    font-size: 25px;
    line-height: 29px;
    margin-bottom: 40px;
    max-width: 100%;

    @media (min-width: ${R.nth(0, breakpoints)}) {
      text-transform: none;
      font-size: 29px;
      line-height: 34px;
      max-width: 87%;
    }

    @media (min-width: ${R.nth(1, breakpoints)}) {
      font-size: 36px;
      line-height: 44px;
      max-width: 70%;
    }
  `,

  header: `
    font-family: ${fontFamilies.itc};
    font-weight: 700;
    font-size: 16px;

    @media (min-width: ${R.nth(0, breakpoints)}) {
      font-size: 18px;
    }

    @media (min-width: ${R.nth(1, breakpoints)}) {
      font-size: 21px;
    }
  `
}
