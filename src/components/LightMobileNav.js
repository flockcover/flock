import React from 'react'

import blackLogo from '../images/logo-black.svg'
import blackDownArrow from '../images/icons/small-arrow-black.svg'
import whiteDownArrow from '../images/icons/small-down-arrow-white.svg'
import whiteLogo from '../images/logo-white.svg'
import MobileNav from './MobileNav'
import {colors} from '../constants/theme'
import blackHamburger from '../images/icons/hamburger.svg'
import whiteHamburger from '../images/icons/hamburger-white.svg'

const LightMobileNav = props => {
  return (
    <MobileNav
      getAppButtonId={props.getAppButtonId}
      iconColor={({isSticky}) => (isSticky ? colors.dark : colors.white)}
      icon={({isSticky}) => (isSticky ? blackHamburger : whiteHamburger)}
      logo={({isSticky}) => (isSticky ? blackLogo : whiteLogo)}
      arrowImage={({isSticky}) => (isSticky ? blackDownArrow : whiteDownArrow)}
    />
  )
}

export default LightMobileNav
