import React from 'react'
import {css} from '@emotion/core'
import * as R from 'ramda'
import {withPrefix} from 'gatsby'

import Flex from './Flex'
import H1 from './H1'
import H2 from './H2'
import SmallText from './SmallText'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import ArrowText from './ArrowText'

const mapIndex = R.addIndex(R.map)

const PriceCard = ({
  fromText,
  perText,
  productType,
  buttonOneText,
  buttonTwoText,
  fromPrice,
  icon,
  policyFeatureList,
  buttonOneUrl,
  buttonTwoUrl,
  buttonOneExternal,
  buttonTwoExternal,
  flex = null,
  style
}) => (
  <Flex
    flex={flex || '0 0 auto'}
    flexDirection="column"
    width={[300, 400, 400]}
    css={[
      css({
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s'
      }),
      css(style)
    ]}
  >
    {productType && (
      <Flex
        p={[10, 15, 20]}
        pl={20}
        pt={[15, 20, 20]}
        pb={[15, 20, 25]}
        style={{
          backgroundColor: '#F7F7F4',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <H2 markdown={true} mb={0} flex={1}>
          {productType}
        </H2>
        {icon && (
          <img
            src={withPrefix(icon)}
            css={css({marginBottom: 0, height: 30})}
          />
        )}
      </Flex>
    )}

    {fromPrice && (
      <Flex
        pt={[15, 20, 25]}
        pb={[15, 20, 25]}
        pl={[20]}
        style={{
          backgroundColor: '#FFE001',
          flexDirection: 'column'
        }}
        justifyContent="center"
      >
        <SmallText>{fromText}</SmallText>

        <Flex alignItems="flex-end">
          <H1 mb={0} markdown={true} fontSize={12}>
            {fromPrice}
          </H1>
          <SmallText
            css={css({
              marginLeft: 10,
              lineHeight: '28px'
            })}
          >
            {perText}
          </SmallText>
        </Flex>
      </Flex>
    )}

    <Flex
      flex={1}
      style={{
        backgroundColor: '#F7F7F4',
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 15,
        justifyContent: 'space-between',
        paddingBottom: 5
      }}
    >
      {policyFeatureList && policyFeatureList.length > 0 && (
        <Flex flexDirection="column" pt={30} pb={30}>
          {mapIndex(
            ({text}) => (
              <SmallText
                css={css({
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
      )}
    </Flex>

    <Flex
      flexDirection="column"
      css={css({
        backgroundColor: '#F7F7F4',
        alignItems: 'flex-start',
        paddingTop: 5,
        paddingBottom: 15,
        paddingRight: 15,
        paddingLeft: 20
      })}
    >
      {buttonOneText && buttonOneUrl && (
        <PrimaryButton
          id={`${productType} - product card - button 1`}
          to={buttonOneUrl}
          external={buttonOneExternal}
          title={buttonOneText}
          color="yellow"
          mb={15}
        />
      )}

      {buttonTwoText && buttonTwoUrl && (
        <PrimaryButton
          id={`${productType} - product card - button 2`}
          to={buttonTwoUrl}
          external={buttonTwoExternal}
          title={buttonTwoText}
          color="black"
        />
      )}
    </Flex>
  </Flex>
)

export default PriceCard
