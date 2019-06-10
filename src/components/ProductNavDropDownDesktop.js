import React from 'react'
import * as R from 'ramda'
import {css} from '@emotion/core'
import {Collapse} from 'react-collapse'

import SiteContainer from './SiteContainer'
import Flex from './Flex'
import PrimaryButton from './NavPrimaryButton'
import {colors, breakpoints} from '../constants/theme'

const mapIndex = R.addIndex(R.map)

const ProductNavDropDown = ({productsIsOpen}) => {
  return (
    <Collapse
      isOpened={productsIsOpen}
      css={css({width: '100%'})}
      springConfig={{stiffness: 1000, damping: 50}}
    >
      <Flex
        justifyContent="center"
        width="100%"
        background={colors.backgrounds.dark}
        pt={20}
        pb={20}
      >
        <SiteContainer edgeToEdge>
          <Flex
            justifyContent="space-between"
            alignItems="flex-start"
            flexWrap
            p={'15px'}
          >
            {mapIndex(
              ({to, text, hasIcon}, index) => (
                <Flex
                  p="5px"
                  pr="15px"
                  key={index}
                  flexDirection="column"
                  css={css({
                    [`@media (min-width: ${R.nth(0, breakpoints)})`]: {
                      width: '50%'
                    },

                    '@media (min-width: 1200px)': {
                      width: '33.3333%'
                    }
                  })}
                >
                  <Flex flexDirection="column">
                    <PrimaryButton
                      color="black"
                      to={to}
                      title={text}
                      mb={12}
                      hasIcon={hasIcon}
                    />
                  </Flex>
                </Flex>
              ),
              buttonContent
            )}
          </Flex>
        </SiteContainer>
      </Flex>
    </Collapse>
  )
}

const buttonContent = [
  {
    to: '/insurance/commercial',
    text: 'COMMERCIAL OPERATOR',
    hasIcon: true,
    options: [
      {
        to: '/payasyoufly',
        text: 'Pay-as-you-fly',
        icon: 'PAYF'
      },
      {
        to: '/flyunlimited',
        text: 'Fly Unlimited',
        icon: 'FU'
      }
    ]
  },
  {
    to: '/insurance/trainee',
    text: 'TRAINEE PILOT',
    hasIcon: true,
    options: [
      {
        to: '/payasyoufly',
        text: 'Pay-as-you-fly',
        icon: 'PAYF'
      }
    ]
  },
  {
    to: '/insurance/recreational',
    text: 'RECREATIONAL PILOT',
    hasIcon: true,
    options: [
      {
        to: '/payasyoufly',
        text: 'Pay-as-you-fly',
        icon: 'PAYF'
      }
    ]
  },
  // {
  //   to: '/enterprise',
  //   text: 'ENTERPRISE',
  //   hasIcon: true,
  //   options: []
  // }
]

export default ProductNavDropDown
