import React from 'react'
import PropTypes from 'prop-types'
import * as R from 'ramda'
import Media from 'react-media'
import {css} from '@emotion/core'

import H1 from './H1'
import SiteContainer from './SiteContainer'
import Flex from './Flex'
import BodyText from './BodyText'
import SmallText from './SmallText'
import HeroFeaturesBanner from './HeroFeaturesBanner'
import PrimaryButton from './PrimaryButton'
import {colors, breakpoints} from '../constants/theme'

const Hero = ({
  textColor = colors.dark,
  headerCSS,
  textShadow = true,
  header,
  RightSideComponent,
  description,
  smallPrint,
  buttons = [],
  features = []
}) => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-between"
      width="100%"
      flex="1 1 auto"
      position="relative"
      zIndex="0"
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        css={headerCSS}
        flex="1 1 auto"
        overflow="hidden"
      >
        <SiteContainer css={css({overflow: 'visible'})}>
          <Flex mt={[3, 5]}>
            <Flex
              justifyContent="center"
              flexDirection="column"
              alignItems="flex-start"
              width={['100%', '75%', '64%']}
              mt={[4, 5]}
              mb={[3, 5]}
            >
              <H1
                textShadow={textShadow ? '0 1px 0 rgba(0, 0, 0, 0.3)' : 'none'}
                color={textColor}
                mb={[2, 2, 3]}
              >
                {header}
              </H1>
              <BodyText tag="div" color={textColor} mb={[2, 3]}>
                {description}
              </BodyText>
              <Flex flexDirection={['column', 'column', 'row']}>
                {buttons.map((button, idx) => {
                  return (
                    <PrimaryButton
                      id={`Hero button: ${button.title}`}
                      key={idx}
                      to={button.to}
                      color={button.color}
                      external={button.external}
                      border={button.border}
                      branch={button.branch}
                      track={button.track}
                      mb={15}
                      mr={15}
                      title={button.title}
                    />
                  )
                })}
              </Flex>

              {smallPrint && (
                <SmallText
                  mt={1}
                  color={textColor}
                  linkDecoration="underline"
                  linkColor={textColor}
                  style={{fontSize: 14}}
                >
                  {smallPrint}
                </SmallText>
              )}
            </Flex>
            {R.not(R.isNil(RightSideComponent)) ? (
              <Media query={`(min-width: ${R.nth(0, breakpoints)})`}>
                {matches =>
                  matches ? (
                    <Flex
                      alignItems="flex-end"
                      justifyContent="center"
                      width={['100%', '50%']}
                    >
                      <RightSideComponent />
                    </Flex>
                  ) : null
                }
              </Media>
            ) : null}
          </Flex>
        </SiteContainer>
      </Flex>
      <HeroFeaturesBanner features={features} />
    </Flex>
  )
}

export default Hero

Hero.propTypes = {
  RightSideComponent: PropTypes.func,
  textColor: PropTypes.string,
  textShadow: PropTypes.bool,
  headerCSS: PropTypes.string,
  header: PropTypes.string,
  description: PropTypes.string,
  buttonOne: PropTypes.object,
  buttonTwo: PropTypes.object
}
