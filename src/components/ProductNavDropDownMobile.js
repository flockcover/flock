import React from 'react'
import * as R from 'ramda'

import SiteContainer from './SiteContainer'
import Flex from './Flex'
import PrimaryButton from './NavPrimaryButton'
import {colors} from '../constants/theme'

const mapIndex = R.addIndex(R.map)

const ProductNavDropDown = () => {
  return (
    <Flex
      justifyContent="center"
      width="100%"
      background={colors.backgrounds.dark}
      pt={30}
    >
      <SiteContainer edgeToEdge>
        {mapIndex(
          ({to, text, hasIcon}, index) => (
            <Flex flexDirection="column" mb="20px" key={index}>
              <PrimaryButton
                color="black"
                to={to}
                title={text}
                hasIcon={hasIcon}
              />
            </Flex>
          ),
          buttonContent
        )}
      </SiteContainer>
    </Flex>
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
