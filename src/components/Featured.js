import React from 'react'
import R from 'ramda'
import {css} from 'react-emotion'

import Flex from './Flex'
import H3 from './H3'
import featuredList from '../images/featured-list.png'
import SiteContainer from './SiteContainer'
import {space} from '../constants/theme'

const Featured = () => {
  return (
    <Flex justifyContent="center">
      <SiteContainer>
        <Flex alignItems="center" flexDirection="column" pb={3}>
          <H3 mb={3}>We’ve been featured</H3>
          <img
            src={featuredList}
            className={css({
              paddingTop: R.nth(2, space),
              paddingBottom: R.nth(2, space)
            })}
          />
        </Flex>
      </SiteContainer>
    </Flex>
  )
}

export default Featured
