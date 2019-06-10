import React from 'react'
import PropTypes from 'prop-types'
import * as R from 'ramda'
import Media from 'react-media'
import {css} from '@emotion/core'
import {injectGlobal} from 'emotion'

import Flex from './Flex'
import H2 from './H2'
import BodyText from './BodyText'
import SiteContainer from './SiteContainer'
import ArrowText from './ArrowText'
import PrimaryButton from './PrimaryButton'
import {breakpoints, fontFamilies, colors} from '../constants/theme'
import Box from './Box'
import Link from './Link'
import SmallText from './SmallText'

const mapIndex = R.addIndex(R.map)

class FUfaqSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {openIdx: null}
  }

  render() {
    const {
      faqs,
      header,
      buttonId,
      buttonText,
      buttonUrl,
      body,
      disclosureIndicator
    } = this.props
    const {openIdx} = this.state

    return (
      <Flex justifyContent="center">
        <SiteContainer>
          <Flex flexDirection={['column', 'column', 'row']} pb={[2, 0, 0]}>
            <Flex
              flex={1}
              flexWrap="wrap"
              justifyContent="flex-start"
              flexDirection="column"
              pt={[4, 4, 5]}
              pb={[2, 2, 5]}
              pl={2}
              pr={2}
            >
              <Media query={`(min-width: ${breakpoints[1]})`}>
                {matches => {
                  return matches ? null : (
                    <H2 mb={20} markdown={true}>
                      {header}
                    </H2>
                  )
                }}
              </Media>

              <Box borderTop={'1px solid gray'} width="100%" />
              {mapIndex(
                ({title, body}, idx) => (
                  <div key={idx}>
                    <Flex
                      onClick={() =>
                        this.setState({openIdx: openIdx === idx ? null : idx})
                      }
                      flexDirection="row"
                      alignItems="center"
                      justifyContent="space-between"
                      pt={20}
                      pb={20}
                      css={css({
                        borderWidth: '0px 0px 1px 0px',
                        borderStyle: 'solid',
                        borderColor: openIdx === idx ? 'transparent' : 'gray',
                        cursor: 'pointer'
                      })}
                    >
                      <SmallText fontWeight={openIdx == idx ? 700 : 400}>
                        {title}
                      </SmallText>

                      <img
                        src={disclosureIndicator}
                        css={css({
                          transform: `rotate(${
                            openIdx === idx ? '180' : '0'
                          }deg)`,
                          marginBottom: 0,
                          marginRight: 5
                        })}
                      />
                    </Flex>

                    {openIdx === idx && (
                      <SmallText
                        pb={2}
                        css={css({
                          borderWidth: '0px 0px 1px 0px',
                          borderStyle: 'solid',
                          borderColor: 'gray',
                          '& p:last-of-type': {
                            marginBottom: 15
                          }
                        })}
                      >
                        {body}
                      </SmallText>
                    )}
                  </div>
                ),
                faqs
              )}
            </Flex>

            <Flex
              flex={1}
              flexWrap="wrap"
              alignItems="flex-start"
              justifyContent="flex-start"
              flexDirection="column"
              pt={[2, 3, 5]}
              pb={[2, 3, 5]}
              pl={2}
              pr={2}
            >
              <Flex flexDirection="column" mb={[3, 3, 3]}>
                <Media query={`(min-width: ${breakpoints[1]})`}>
                  {matches => {
                    return matches ? (
                      <H2 mb={20} markdown={true}>
                        {header}
                      </H2>
                    ) : null
                  }}
                </Media>
                <BodyText>{body}</BodyText>
              </Flex>

              <PrimaryButton
                id={buttonId}
                to={buttonUrl}
                title={buttonText}
                color="yellow"
              />
            </Flex>
          </Flex>
        </SiteContainer>
      </Flex>
    )
  }
}

export default FUfaqSection

FUfaqSection.propTypes = {
  testimonials: PropTypes.array
}

const style = {}

injectGlobal`
  h2 {
    ${style.text}
  }
`
