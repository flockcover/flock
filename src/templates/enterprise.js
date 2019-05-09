import React from 'react'
import {StickyContainer} from 'react-sticky'
import {css} from '@emotion/core'

import Layout from '../components/Layout/Layout'
import Box from '../components/Box'
import LightNav from '../components/LightNav'
import DarkNav from '../components/DarkNav'
import SiteMetadata from '../components/SiteMetadata'
import TextGrid from '../components/TextGrid'
import Footer from '../components/Footer'
import Testimonial from '../components/Testimonial'
import Banner from '../components/RenewalBanner'
import Featured from '../components/Featured'

import Hero from '../components/Hero'
import {colors} from '../constants/theme'

const EnterpriseTemplate = ({
  navColor,
  hero,
  why,
  siteMetadataOverride,
  testimonial,
  banner
}) => {
  return (
    <StickyContainer>
      <div>
        <SiteMetadata
          title={siteMetadataOverride.title}
          description={siteMetadataOverride.description}
          keywords={siteMetadataOverride.keywords}
        />
        {navColor === 'light' ? <LightNav /> : <DarkNav />}
        <Box css={css({backgroundColor: 'white'})}>
          <Hero
            headerCSS={{
              backgroundImage: `url(${hero.backgroundImage})`,
              backgroundPosition: 'top left',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
            textColor={colors[hero.textColor]}
            header={hero.header}
            description={hero.description}
            buttons={hero.buttons}
            features={hero.features}
          />
          {!why.hidden && (
            <Box mt={[3, 5]} mb={[3, 5]}>
              <TextGrid
                title={why.title}
                description={why.description}
                list={why.list}
              />
            </Box>
          )}
        </Box>

        <Box className={css({backgroundColor: 'white'})}>
          <Box pt={[3, 3]}>
            <Testimonial testimonials={testimonial} />
          </Box>
          {!banner.hidden && (
            <Box pt={[3, 6]}>
              <Banner
                header={banner.header}
                image={banner.image}
                mainText={banner.mainText}
                buttonText={banner.buttonText}
                buttonUrl={banner.buttonUrl}
                buttonTrack={banner.buttonTrack}
                buttonColor={banner.buttonColor}
                buttonTextColor={banner.buttonTextColor}
                buttonBorder={banner.buttonBorder}
              />
            </Box>
          )}
        </Box>

        <Box pt={[3, 5]}>
          <Featured />
        </Box>

        <Footer />
      </div>
    </StickyContainer>
  )
}

export {EnterpriseTemplate}

const Enterprise = ({data}) => {
  const {
    navColor,
    hero,
    why,
    siteMetadataOverride,
    testimonial,
    banner
  } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <EnterpriseTemplate
        hero={hero}
        navColor={navColor}
        why={why}
        siteMetadataOverride={siteMetadataOverride}
        testimonial={testimonial}
        banner={banner}
      />
    </Layout>
  )
}

export default Enterprise

export const query = graphql`
  query Enterprise($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      frontmatter {
        title
        navColor
        hero {
          textColor
          buttons {
            title
            to
            backgroundColor
            textColor
            border
            external
            branch
            track
          }
          features {
            leftIcon
            title
            rightIcon
          }
          description
          header
          backgroundImage
        }
        why {
          hidden
          title
          description
          list {
            title
            text
            icon
          }
        }
        testimonial {
          quote
          author
          image
        }
        banner {
          hidden
          image
          header
          mainText
          buttonText
          buttonUrl
          buttonTrack
          buttonTextColor
          buttonColor
          buttonBorder
        }
        siteMetadataOverride {
          title
          description
          keywords
        }
      }
    }
  }
`
