import React from 'react'
import Media from 'react-media'
import {nth} from 'ramda'

import DarkMobileNav from '../components/DarkMobileNav'
import DarkDesktopNav from '../components/DarkDesktopNav'

import {breakpoints} from '../constants/theme'

const DarkNav = ({to, getAppButtonId}) => (
  <Media query={`(min-width: ${nth(1, breakpoints)})`}>
    {matches =>
      matches ? (
        <DarkDesktopNav getAppButtonId={getAppButtonId} to={to} />
      ) : (
        <DarkMobileNav getAppButtonId={getAppButtonId} to={to} />
      )
    }
  </Media>
)

export default DarkNav
