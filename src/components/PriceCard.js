import React from 'react'
import {css} from 'react-emotion'
import R from 'ramda'

import Flex from './Flex'
import H1 from './H1'
import H2 from './H2'
import SmallText from './SmallText'
import PrimaryButton from './PrimaryButton'
import ArrowText from './ArrowText'

const mapIndex = R.addIndex(R.map)

const PriceCard = ({
  fromText,
  perText,
  productType,
  buttonText,
  fromPrice,
  policyFeatureList,
  buttonOneOnClick
}) => (
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
        {productType}
      </H2>
    </Flex>

    <Flex
      flex={2}
      p={2}
      style={{backgroundColor: '#FFE001', flexDirection: 'column'}}
      justifyContent="center"
    >
      <SmallText>{fromText}</SmallText>

      <Flex alignItems="flex-end">
        <H1 mb={0} markdown={true}>
          {fromPrice}
        </H1>
        <SmallText
          className={css({
            marginLeft: 10
          })}
        >
          {perText}
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
        onClick={buttonOneOnClick}
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
)

export default PriceCard