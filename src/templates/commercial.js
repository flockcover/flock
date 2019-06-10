import React from 'react'
import {StickyContainer} from 'react-sticky'
import {css} from '@emotion/core'

import Layout from '../components/Layout/Layout'
import BigSectionLine from '../components/BigSectionLine'
import Box from '../components/Box'
import LightNav from '../components/LightNav'
import DarkNav from '../components/DarkNav'
import SiteMetadata from '../components/SiteMetadata'
import TextGrid from '../components/TextGrid'
import Footer from '../components/Footer'
import Testimonial from '../components/Testimonial'
import Banner from '../components/Banner'
import ProductTypeSection from '../components/ProductTypeSection'

import Hero from '../components/Hero'
import CoverNote from '../components/CoverNote'
import {colors} from '../constants/theme'

const CommercialTemplate = ({
  navColor,
  hero,
  why,
  coverNote,
  siteMetadataOverride,
  productTypes,
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
          webPageName="insurance/commercial"
          ogTitle={siteMetadataOverride.openGraph.title}
          ogDescription={siteMetadataOverride.openGraph.description}
          ogImage={siteMetadataOverride.openGraph.image}
          twtTitle={siteMetadataOverride.twitter.title}
          twtDescription={siteMetadataOverride.twitter.description}
          twtImage={siteMetadataOverride.twitter.image}
        />
        {navColor === 'light' ? (
          <LightNav getAppButtonId="Commercial page - Get-the-app button" />
        ) : (
          <DarkNav getAppButtonId="Commercial page - Get-the-app button" />
        )}
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
            <Box mt={[3, 5]}>
              <TextGrid
                title={why.title}
                description={why.description}
                list={why.list}
              />
            </Box>
          )}

          {!productTypes.hidden && (
            <Box mb={4}>
              <div id="product-types" />

              <BigSectionLine />

              <ProductTypeSection
                title={productTypes.title}
                description={productTypes.description}
                productCards={productTypes.productCards}
              />
            </Box>
          )}
          {!coverNote.hidden && (
            <CoverNote
              image={coverNote.image}
              title={coverNote.title}
              bodyText={coverNote.bodyText}
              smallText={coverNote.smallText}
              link={coverNote.link}
            />
          )}
        </Box>

        <Box className={css({backgroundColor: 'white'})}>
          <Box pt={[3, 3]}>
            <Testimonial testimonials={testimonial} />
          </Box>
          {!banner.hidden && (
            <Box pt={[3, 6]}>
              <Banner
                buttonId="Go to FAQ button"
                image={banner.image}
                mainText={banner.mainText}
                buttonText={banner.buttonText}
                buttonUrl={banner.buttonUrl}
                buttonTrack={banner.buttonTrack}
              />
            </Box>
          )}
        </Box>

        <Footer />
      </div>
    </StickyContainer>
  )
}

export {CommercialTemplate}

const Commercial = ({data}) => {
  const {
    navColor,
    hero,
    why,
    coverNote,
    siteMetadataOverride,
    productTypes,
    testimonial,
    banner
  } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <CommercialTemplate
        hero={hero}
        navColor={navColor}
        why={why}
        coverNote={coverNote}
        siteMetadataOverride={siteMetadataOverride}
        productTypes={productTypes}
        testimonial={testimonial}
        banner={banner}
      />
    </Layout>
  )
}

export default Commercial

export const query = graphql`
  query Commercial($id: String!) {
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
            color
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
        productTypes {
          hidden
          title
          description
          productCards {
            buttonOneText
            buttonTwoText
            buttonOneUrl
            buttonTwoUrl
            buttonOneExternal
            buttonTwoExternal
            fromPrice
            policyFeatureList {
              text
            }
            productType
            fromText
            perText
            icon
          }
        }
        coverNote {
          hidden
          image
          title
          bodyText
          smallText
          link {
            to
            text
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
          mainText
          buttonText
          buttonUrl
          buttonTrack
        }
        siteMetadataOverride {
          title
          description
          keywords
          openGraph {
            title
            description
            image
          }
          twitter {
            title
            description
            image
          }
        }
      }
    }
  }
`
