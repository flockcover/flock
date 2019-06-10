import React from 'react'
import Media from 'react-media'
import {nth} from 'ramda'

import LightMobileNav from '../components/LightMobileNav'
import LightDesktopNav from '../components/LightDesktopNav'

import {breakpoints} from '../constants/theme'

const LightNav = ({getAppButtonId}) => (
  <Media query={`(min-width: ${nth(1, breakpoints)})`}>
    {matches =>
      matches ? (
        <LightDesktopNav getAppButtonId={getAppButtonId} />
      ) : (
        <LightMobileNav getAppButtonId={getAppButtonId} />
      )
    }
  </Media>
)

export default LightNav
