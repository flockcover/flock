import React from 'react'
import {css} from 'react-emotion'
import {withPrefix} from 'gatsby-link'
import R from 'ramda'

import Flex from './Flex'
import SiteContainer from './SiteContainer'
import Link from './Link'
import H1 from './H1'
import H2 from './H2'
import H3 from './H3'
import Text from './Text'
import SmallText from './SmallText'
import ArrowText from './ArrowText'
import PrimaryButton from './PrimaryButton'
import ShowIf from './ShowIf'

const mapIndex = R.addIndex(R.map)

const whatIsCovered = ({
  mainTitle,
  mainList,
  priceSmallPrint,
  pilotSmallPrint,
  buttonText,
  fromPrice,
  policyFeatureList,
  samplePolicyWordingUrl
}) => {
  return (
    <Flex justifyContent="center" pb={2}>
      <SiteContainer>
        <Flex
          flexWrap
          flexDirection={['column', 'column', 'row']}
          justifyContent="space-between"
          alignItems="flex-start"
          pb={[2, 3]}
          pl={2}
          pr={2}
        >
          <Flex
            flex={3}
            flexDirection="column"
            className={css({
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
              transition: '0.3s',
              alignSelf: 'flex-start'
            })}
          >
            <Flex
              style={{
                backgroundColor: '#F7F7F4',
                padding: 15,
                alignItems: 'center'
              }}
            >
              <H2 markdown={true} mb={0}>
                FLY UNLIMITED
              </H2>
            </Flex>

            <Flex
              flex={2}
              p={2}
              style={{backgroundColor: '#FFE001', flexDirection: 'column'}}
              justifyContent="center"
            >
              <SmallText>from</SmallText>

              <Flex alignItems="flex-end">
                <H1 mb={0} markdown={true}>
                  {fromPrice}
                </H1>
                <SmallText
                  className={css({
                    marginLeft: 10
                  })}
                >
                  a month**
                </SmallText>
              </Flex>
            </Flex>

            <Flex
              flex={4}
              style={{
                backgroundColor: '#F7F7F4',
                flexDirection: 'column',
                paddingLeft: 15,
                paddingRight: 15,
                justifyContent: 'space-between'
              }}
            >
              <Flex flexDirection="column" pt={30} pb={30}>
                {mapIndex(
                  ({text}) => (
                    <SmallText
                      className={css({
                        fontSize: 15,
                        marginBottom: 10
                      })}
                    >
                      {text}
                    </SmallText>
                  ),
                  policyFeatureList
                )}
              </Flex>
              <PrimaryButton
                className={css({
                  alignSelf: 'flex-start',
                  marginBottom: 30
                })}
                onClick={() => window.open('https://my.flockcover.com')}
              >
                <ArrowText moveOnHover={false}>
                  <p
                    className={css({
                      fontSize: 17
                    })}
                  >
                    {buttonText}
                  </p>
                </ArrowText>
              </PrimaryButton>
            </Flex>
          </Flex>

          <Flex
            flexWrap
            mt={[30, 30, 0]}
            pt={25}
            ml={[0, 0, 3]}
            style={{
              flex: '5'
            }}
            flexDirection="column"
          >
            <H2 pl={10} mb={[10, 10, 40]} markdown={true}>
              {mainTitle}
            </H2>
            <Flex
              flexWrap={true}
              className={css({
                flex: 1
              })}
            >
              {mapIndex(
                ({title, text, icon}) => (
                  <Flex
                    flex="1 1 auto"
                    flexDirection="column"
                    alignItems="flex-start"
                    width={['100%', '50%', '50%', '25%']}
                    p={20}
                  >
                    <ShowIf predicate={!!icon}>
                      <img
                        src={withPrefix(icon)}
                        className={css({marginBottom: 10, flex: 1})}
                      />
                    </ShowIf>
                    <H3>{title}</H3>
                    <SmallText>{text}</SmallText>
                  </Flex>
                ),
                mainList
              )}
            </Flex>
            <Link
              to={samplePolicyWordingUrl}
              className={css({
                textDecoration: 'none',
                color: 'inherit'
              })}
            >
              <Flex mt={20} mb={20} ml={[0, 0, 20]}>
                <SmallText>
                  View the <b>Key Facts</b> for details of what's covered.
                </SmallText>
              </Flex>
            </Link>
          </Flex>
        </Flex>

        <Text
          textAlign="left"
          className={css({
            marginLeft: 20,
            fontSize: 12,
            color: 'grey',
            marginBottom: 0
          })}
        >
          ** {priceSmallPrint}
        </Text>
        <Text
          textAlign="left"
          className={css({
            marginBottom: 20,
            marginLeft: 20,
            fontSize: 12,
            color: 'grey'
          })}
        >
          &#8314; {pilotSmallPrint}
        </Text>
      </SiteContainer>
    </Flex>
  )
}

export default whatIsCovered
