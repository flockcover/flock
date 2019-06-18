import React from 'react'
import {css} from '@emotion/core'

import SecondaryButton from './SecondaryButton'
import SmallText from './SmallText'
import blackLogo from '../images/logo-black.svg'
import blackDownArrow from '../images/icons/small-arrow-black.svg'
import Nav from './Nav'
import {colors} from '../constants/theme'
import {downloadClickHandler} from '../utils/trackDownload'

const DarkDesktopNav = ({to, getAppButtonId}) => {
  const download = () => {
    downloadClickHandler()
    const linkAnonymousId =
      to + '?anonymous_id=' + analytics.user().anonymousId()
    window.open('https://flockcover.app.link/6IW6kTmgfP')
  }
  return (
    <Nav
      textColor={() => colors.dark}
      arrowImage={() => blackDownArrow}
      Logo={() => <img css={css({width: '6rem', margin: 0})} src={blackLogo} />}
      DownloadButton={() => (
        <SecondaryButton
          id={getAppButtonId}
          Text={SmallText}
          onClick={download}
        >
          Get the app
        </SecondaryButton>
      )}
    />
  )
}

export default DarkDesktopNav
