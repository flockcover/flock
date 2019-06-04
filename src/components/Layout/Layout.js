import React from 'react'
import 'animate.css/animate.min.css'
import * as R from 'ramda'
import {injectGlobal} from 'emotion'
import Helmet from 'react-helmet'
import {ThemeProvider} from 'emotion-theming'
import CookieConsent from 'react-cookie-consent'
import Media from 'react-media'
import favicon from '../../images/icons/favicon.ico'
import theme, {fontFamilies, colors, breakpoints} from '../../constants/theme'
import './Layout.css'
import {StaticQuery, graphql} from 'gatsby'

import itc from '../../fonts/avantgarde/itcavantgardestd-bold-webfont.woff'
import chivo from '../../fonts/chivo/Chivo-Regular.woff2'

injectGlobal`
::selection {
  background-color: ${colors.yellow};
  color: ${colors.dark};
}
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  font-family: ${fontFamilies.chivo}
}
h1, h2, h3, h4, h5, h6 {
  font-family: ${fontFamilies.itc};
}
a.inline-link {
  font-family: 'Chivo';
  text-decoration: none;
  color: #00C0FF;
}
a.inline-link:visited {
  color: #00C0FF;
}
@font-face {
  font-family: 'ITC';
  font-style: normal;
  font-weight: 700;
  src: url(${itc}) format('woff');
}
@font-face {
  font-family: 'Chivo';
  font-style: normal;
  font-weight: 400;
  src: url(${chivo}) format('woff2');
}
.cookieConsent button:hover {
  background: #FFFF33 !important;
  text-decoration: underline;
}
.cookiesLink {
  opacity: .8em;
  display: inline-block;
  padding: .2em;
  color: '#FFFF33';
}
.cookiesLinkSmall {
  opacity: .8em;
  display: inline-block;
  padding: .1em;
  color: '#FFFF33';
}
`

const Layout = ({children}) => (
  <StaticQuery
    query={graphql`
      query SettingsQuery {
        markdownRemark(frontmatter: {title: {eq: "settings"}}) {
          frontmatter {
            siteMetadata {
              title
              description
              keywords
            }
          }
        }
      }
    `}
    render={({markdownRemark: {frontmatter}}) => (
      <ThemeProvider theme={theme}>
        <div>
          <Helmet
            title={frontmatter.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content: frontmatter.siteMetadata.description
              },
              {
                name: 'keywords',
                content: R.join(',', frontmatter.siteMetadata.keywords)
              }
            ]}
            link={[
              {rel: 'shortcut icon', type: 'image/ico', href: `${favicon}`}
            ]}
          >
            <meta property="og:type" content="website" />
            
            <meta
              property="og:title"
              content="Flock Cover | Pay-as-you-fly drone insurance"
            />

            <meta property="og:url" content="https://flockcover.com/" />

            <meta
              property="og:description"
              content="At Flock, we’re creating smarter drone insurance. Get fully customised cover for your drone, precisely when you need it. Download the app and get a real-time quote in seconds."
            />

            <meta
              property="og:image"
              content="https://monzo.com/static/images/facebook-campaign-image-01.png"
            />

            <meta property="og:locale" content="en_GB" />

            <script type="application/ld+json">
              {JSON.stringify({
                '@context': 'http://schema.org',
                '@type': 'Organization',
                url: 'http://www.flockcover.com',
                logo:
                  'http://www.flockcover.com/images/uploads/flock-logo-yellow.png',
                contactPoint: [
                  {
                    '@type': 'ContactPoint',
                    telephone: '+44 (0) 1234 480260',
                    contactType: 'customer service'
                  }
                ],
                sameAs: [
                  'http://www.facebook.com/flockcover',
                  'https://www.instagram.com/flockcover',
                  'http://www.linkedin.com/company/flockcover',
                  'http://www.twitter.com/flockcover'
                ]
              })}
            </script>
          </Helmet>
          <Media query={`(max-width: ${R.nth(0, breakpoints)})`}>
            {matches => {
              if (matches) {
                return (
                  <CookieConsent
                    disableStyles={true}
                    buttonText="Got it!"
                    style={{
                      background: '#707070',
                      fontFamily: 'Helvetica,Calibri,Arial,sans-serif',
                      padding: '1em 1.8em',
                      width: '100%',
                      maxHeight: '16vw',
                      overflow: 'hidden',
                      transition: 'max-height 1s',
                      boxSizing: 'border-box',
                      fontSize: '2vw',
                      alignItems: 'center',
                      zIndex: '9999',
                      display: 'flex',
                      justifyContent: 'space-between',
                      flexDirection: 'row'
                    }}
                    buttonStyle={{
                      color: '#4e503b',
                      fontSize: '1.8vw',
                      background: '#FFCC00',
                      fontFamily: 'Helvetica,Calibri,Arial,sans-serif',
                      float: 'right',
                      margin: '4vw',
                      alignContent: 'center',
                      border: 'none',
                      padding: '1vw',
                      textAlign: 'center',
                      lineHeight: '2.5vw'
                    }}
                    location="top"
                  >
                    <span>
                      This website uses cookies to enhance the user experience.
                      &nbsp;{' '}
                      <a
                        className="cookiesLinkSmall"
                        href="https://help.flockcover.com/legal/cookies-policy"
                        target="_blank"
                      >
                        {' '}
                        Learn more
                      </a>
                    </span>
                  </CookieConsent>
                )
              } else {
                return (
                  <CookieConsent
                    buttonText="Got it!"
                    style={{
                      background: '#707070',
                      fontFamily: 'Helvetica,Calibri,Arial,sans-serif',
                      padding: '1em 1.8em',
                      width: '100%',
                      maxHeight: '16vw',
                      overflow: 'hidden',
                      transition: 'max-height 1s',
                      boxSizing: 'border-box',
                      fontSize: '1vw',
                      alignItems: 'center',
                      zIndex: '9999'
                    }}
                    buttonStyle={{
                      color: '#4e503b',
                      fontSize: '1vw',
                      background: '#FFCC00',
                      lineHeight: '1.5em',
                      fontFamily: 'Helvetica,Calibri,Arial,sans-serif',
                      marginRight: '10vw'
                    }}
                    location="bottom"
                  >
                    <span>
                      This website uses cookies to enhance the user experience.
                      &nbsp;{' '}
                      <a
                        className="cookiesLink"
                        href="https://help.flockcover.com/legal/cookies-policy"
                        target="_blank"
                      >
                        {' '}
                        Learn more
                      </a>
                    </span>
                  </CookieConsent>
                )
              }
            }}
          </Media>

          <div>{children}</div>
        </div>
      </ThemeProvider>
    )}
  />
)

export default Layout
