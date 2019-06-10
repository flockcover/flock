import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import {StickyContainer} from 'react-sticky'
import {css} from '@emotion/core'
import * as R from 'ramda'

import Layout from '../components/Layout/Layout'
import BigSectionLine from '../components/BigSectionLine'
import DarkNav from '../components/DarkNav'
import Hero from '../components/Hero'
import Box from '../components/Box'
import TextGrid from '../components/TextGrid'
import TabSection from '../components/ProductTabs/ProductTabs'
import ProductCardTabs from '../components/ProductCardTabs'
import Banner from '../components/Banner'
import Testimonial from '../components/Testimonial'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import SiteMetadata from '../components/SiteMetadata'
import {colors, breakpoints} from '../constants/theme'

import bigFlock from '../../static/images/uploads/hero-arrow-cropped.svg'
import mobileFlock from '../images/mobile-arrow-hero.svg'
import iPhone from '../../static/images/uploads/white-phone-cropped-2@2x.png'

const HomeTemplate = ({
  secondTestimonial,
  downloadLink,
  hero,
  siteMetadataOverride,
  stopWorrying,
  featured,
  banner,
  productTabs
}) => {
  return (
    <StickyContainer>
      <div>
        <SiteMetadata
          title={siteMetadataOverride.title}
          description={siteMetadataOverride.description}
          keywords={siteMetadataOverride.keywords}
          ogTitle={siteMetadataOverride.openGraph.title}
          ogDescription={siteMetadataOverride.openGraph.description}
          ogImage={siteMetadataOverride.openGraph.image}
          twtTitle={siteMetadataOverride.twitter.title}
          twtDescription={siteMetadataOverride.twitter.description}
          twtImage={siteMetadataOverride.twitter.image}
        />
        <DarkNav
          to={downloadLink}
          getAppButtonId="Home page - Get-the-app button"
        />
        <Box css={css({backgroundColor: 'white'})}>
          <Hero
            RightSideComponent={() => (
              <img src={iPhone} css={style.heroImage} />
            )}
            headerCSS={style.header}
            header={hero.header}
            textShadow={false}
            description={hero.description}
            buttons={hero.buttons}
            features={hero.features}
          />
          {!stopWorrying.hidden && (
            <Box pt={[3, 3]} background="white">
              <TextGrid
                title={stopWorrying.title}
                description={stopWorrying.description}
                list={stopWorrying.reasons}
              />
              <BigSectionLine id="product-tabs" />
            </Box>
          )}
        </Box>

        {!productTabs.hidden && (
          <div css={css({backgroundColor: 'white'})}>
            <Box background="white">
              <TabSection
                title={productTabs.title}
                description={productTabs.description}
              >
                {productTabs.customerTypeList.map(
                  ({customerTypeDesc, productCards, title}) => (
                    <TabSection.Tab title={title} key={title}>
                      <Box pb={5}>
                        <ProductCardTabs
                          title={title}
                          customerTypeDesc={customerTypeDesc}
                          productCards={productCards}
                        />
                      </Box>
                    </TabSection.Tab>
                  )
                )}
              </TabSection>
            </Box>
          </div>
        )}

        <div css={css({backgroundColor: 'white'})}>
          <Box pt={[3, 5]}>
            <Testimonial testimonials={secondTestimonial} />
          </Box>

          <Box pt={[3, 5]} pb={[3, 5]}>
            {!banner.hidden && (
              <Banner
                image={banner.image}
                mainText={banner.mainText}
                buttonText={banner.buttonText}
                buttonUrl={banner.buttonUrl}
                buttonTrack={banner.buttonTrack}
                buttonColor={banner.buttonColor}
                buttonId="Go to FAQ button"
              />
            )}
          </Box>
          {!featured.hidden && (
            <Featured title={featured.title} image={featured.image} />
          )}
        </div>
        <Footer />
      </div>
    </StickyContainer>
  )
}

const style = {
  heroImage: css({
    marginBottom: 0,
    display: 'block'
  }),
  header: {
    background: colors.backgrounds.light,
    backgroundImage: `url(${mobileFlock})`,
    backgroundSize: '45rem',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom left',
    width: '100%',
    [`@media (min-width: ${R.nth(0, breakpoints)})`]: {
      backgroundImage: `url(${bigFlock})`,
      backgroundPosition: 'bottom right'
    }
  }
}

HomeTemplate.propTypes = {
  video: PropTypes.object,
  secondTestimonial: PropTypes.array,
  hero: PropTypes.object,
  siteMetadataOverride: PropTypes.object,
  stopWorrying: PropTypes.object,
  featured: PropTypes.object,
  banner: PropTypes.object,
  productTabs: PropTypes.object
}

export {HomeTemplate}

const HomePage = ({data}) => {
  const {
    productTabs,
    secondTestimonial,
    downloadLink,
    hero,
    siteMetadataOverride,
    stopWorrying,
    featured,
    banner
  } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <HomeTemplate
        secondTestimonial={secondTestimonial}
        hero={hero}
        downloadLink={downloadLink}
        siteMetadataOverride={siteMetadataOverride}
        stopWorrying={stopWorrying}
        featured={featured}
        banner={banner}
        productTabs={productTabs}
      />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.object
}

export default HomePage

export const query = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      frontmatter {
        title
        templateKey
        downloadLink
        hero {
          header
          description
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
          smallPrint
        }
        stopWorrying {
          hidden
          title
          description
          reasons {
            title
            text
            icon
          }
        }
        secondTestimonial {
          quote
          author
          image
        }
        featured {
          hidden
          title
          image
        }
        banner {
          hidden
          image
          mainText
          buttonText
          buttonUrl
          buttonTrack
          buttonColor
        }
        productTabs {
          hidden
          title
          description
          customerTypeList {
            title
            customerTypeDesc
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
