import React from 'react'
import * as R from 'ramda'
import {css} from '@emotion/core'

import Flex from './Flex'
import H4 from './H4'
import featuredList from '../../static/images/uploads/featured-list.png'
import SiteContainer from './SiteContainer'
import {space} from '../constants/theme'

const Featured = ({header, image}) => {
  return (
    <Flex justifyContent="center">
      <SiteContainer>
        <Flex alignItems="center" flexDirection="column" pb={3}>
          <H4 tag="h3" mb={[1, 2]}>
            {header ? header : 'We’ve been featured'}
          </H4>
          <img
            src={image ? image : featuredList}
            css={css({
              width: '100%',
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
