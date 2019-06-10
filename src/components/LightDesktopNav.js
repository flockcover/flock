import React from 'react'
import {css} from '@emotion/core'

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

const LightDesktopNav = ({getAppButtonId}) => {
  const download = () => {
    downloadClickHandler()
    const linkAnonymousId =
      'https://flockcover.app.link/6IW6kTmgfP' +
      '?anonymous_id=' +
      analytics.user().anonymousId()
    window.open(linkAnonymousId, '_blank')
  }
  return (
    <Nav
      textColor={({isSticky}) => (isSticky ? colors.dark : colors.white)}
      arrowImage={({isSticky}) => (isSticky ? blackDownArrow : whiteDownArrow)}
      Logo={({isSticky}) => (
        <img
          css={css({width: '6rem', margin: 0})}
          src={isSticky ? blackLogo : whiteLogo}
        />
      )}
      DownloadButton={({isSticky}) =>
        isSticky ? (
          <SecondaryButton
            id={getAppButtonId}
            onClick={download}
            Text={SmallText}
          >
            Get the app
          </SecondaryButton>
        ) : (
          <WhiteButton id={getAppButtonId} Text={SmallText} onClick={download}>
            Get the app
          </WhiteButton>
        )
      }
    />
  )
}

export default LightDesktopNav
