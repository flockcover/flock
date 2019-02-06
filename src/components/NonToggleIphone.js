import React, {Component} from 'react'
import {withPrefix} from 'gatsby-link'
import PropTypes from 'prop-types'
import {addIndex, map, nth} from 'ramda'
import {css} from 'emotion'

import Flex from './Flex'
import Box from './Box'
import H2 from './H2'
import Text from './Text'
import H3 from './H3'
import SiteContainer from './SiteContainer'
import BodyText from './BodyText'
import SmallText from './SmallText'
import iPhone from '../images/phones/iphone-background.png'
import {colors, space, breakpoints} from '../constants/theme'

const mapIndex = addIndex(map)

class NonToggleiPhone extends Component {
  render() {
    const {title, description, list, image, policyPauseSmallPrint} = this.props
    return (
      <Flex
        background="transparent"
        justifyContent="center"
        pt={[3, 5]}
        overflow="hidden"
      >
        <SiteContainer>
          <Flex flexWrap={true}>
            <Box width={['100%']} order={[0, 1]}>
              <Box width={['100%', '50%']} pb={[2, 4]}>
                <H2 color="yellow">{title}</H2>
                <BodyText color="white">{description}</BodyText>
              </Box>
            </Box>

            <Box width={['100%', '50%']} order={2}>
              <Box width={['100%', '100%', '66.66%']}>
                <ol
                  className={css({
                    marginLeft: 0,
                    listStyleType: 'none'
                  })}
                >
                  {mapIndex(({title, text}, index) => {
                    return (
                      <li
                        className={css({
                          marginBottom: nth(3, space),
                          borderBottom: `1px solid ${colors.white}`,
                          paddingBottom: nth(3, space),
                          '&:last-of-type': {
                            borderBottom: 0,
                            paddingBottom: 0,
                            marginBottom: 0
                          }
                        })}
                        key={index}
                      >
                        <Flex
                          flexDirection="column"
                          className={css({
                            paddingLeft: nth(1, space),
                            marginLeft: `-${nth(1, space)}`
                          })}
                        >
                          <H3 color={colors.white} className="title">
                            {title}
                          </H3>
                          <SmallText color="white">{text}</SmallText>
                        </Flex>
                      </li>
                    )
                  }, list)}
                </ol>
              </Box>

              <Text
                textAlign="left"
                className={css({
                  marginTop: 75,
                  marginBottom: 20,
                  fontSize: 12,
                  color: 'white'
                })}
              >
                * {policyPauseSmallPrint}
              </Text>
            </Box>

            {image && (
              <Box
                order={[1, 3]}
                zIndex="0"
                width={['100%', '50%']}
                height={[450, 450, 'auto']}
              >
                <Flex justifyContent="center" position="relative">
                  <div className={style.container}>
                    <div className={style.screenContainer}>
                      <img className={style.screen} src={withPrefix(image)} />
                    </div>
                    <img src={iPhone} className={style.phone} />
                  </div>
                </Flex>
              </Box>
            )}
          </Flex>
        </SiteContainer>
      </Flex>
    )
  }
}

const style = {
  container: css({
    position: 'relative',
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  }),
  screenContainer: css({
    zIndex: 1,
    transform: 'rotate(7deg)',
    height: 375,
    width: 172,
    position: 'absolute',
    top: 12,
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    overflow: 'hidden',
    [`@media (min-width: ${nth(1, breakpoints)})`]: {
      top: -106,
      left: 4,
      height: 600,
      width: 275
    }
  }),
  screen: css({
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 0
  }),
  phone: css({
    transform: 'rotate(7deg)',
    position: 'absolute',
    top: 0,
    width: 200,
    borderRadius: '34px',
    boxShadow:
      '-80px 40px 100px rgba(0,0,0,0.15), -50px 20px 60px rgba(0,0,0,0.15), -20px 10px 20px rgba(0,0,0,0.15), inset 20px 0px 12px 16px rgba(0, 0, 0, 0.37)',
    [`@media (min-width: ${nth(1, breakpoints)})`]: {
      top: '-126px',
      borderRadius: '53px',
      width: '18rem'
    }
  })
}

NonToggleiPhone.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired
}

export default NonToggleiPhone
