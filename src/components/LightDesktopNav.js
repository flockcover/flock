import React from 'react'
import {css} from 'react-emotion'

import WhiteButton from './WhiteButton'
import SecondaryButton from './SecondaryButton'
import SmallText from './SmallText'
import blackLogo from '../images/logo-black.svg'
import blackDownArrow from '../images/icons/small-arrow-black.svg'
import whiteDownArrow from '../images/icons/small-down-arrow-white.svg'
import whiteLogo from '../images/logo-white.svg'
import Nav from './Nav'
import {colors} from '../constants/theme'
import {downloadClickHandler} from '../utils/trackDownload'

const LightDesktopNav = (to) => {
  const download = () => {
    downloadClickHandler()
    console.log('to', to)
    console.log('branch', branch)
    const linkAnonymousId = 'https://flockcover.app.link/6IW6kTmgfP' + '?anonymous_id=' + analytics.user().anonymousId()
    window.open(linkAnonymousId, '_blank')
  }
  return (
    <Nav
      textColor={({isSticky}) => (isSticky ? colors.dark : colors.white)}
      arrowImage={({isSticky}) => (isSticky ? blackDownArrow : whiteDownArrow)}
      Logo={({isSticky}) => (
        <img
          className={css({width: '6rem', margin: 0})}
          src={isSticky ? blackLogo : whiteLogo}
        />
      )}
      DownloadButton={({isSticky}) =>
        isSticky ? (
          <SecondaryButton
             onClick={download}
            Text={SmallText}
          >
            Download
          </SecondaryButton>
        ) : (
          <WhiteButton Text={SmallText} onClick={download}>
            Download
          </WhiteButton>
        )
      }
    />
  )
}

export default LightDesktopNav
