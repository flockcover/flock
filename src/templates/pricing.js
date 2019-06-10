import PropTypes from 'prop-types'
import React from 'react'
import {StickyContainer} from 'react-sticky'
import * as R from 'ramda'
import {css} from '@emotion/core'
import {graphql} from 'gatsby'

import Layout from '../components/Layout/Layout'
import LightNav from '../components/LightNav'
import Testimonial from '../components/Testimonial'
import Download from '../components/DownloadFlock'
import Flex from '../components/Flex'
import Box from '../components/Box'
import TextGrid from '../components/TextGrid'
import Footer from '../components/Footer'
import OtherProducts from '../components/OtherProducts'
import SiteMetadata from '../components/SiteMetadata'
import BigSectionLine from '../components/BigSectionLine'

import PricingHero from '../components/PricingHero'
import {colors, breakpoints} from '../constants/theme'
import Calculator from '../components/Calculator'

const PricingTemplate = ({data}) => {
  const {
    hero: {header, backgroundImage},
    riskCalculations,
    testimonials,
    otherProducts,
    siteMetadataOverride
  } = data.markdownRemark.frontmatter

  return (
    <Layout>
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
          <LightNav getAppButtonId="Pricing page - Get-the-app button" />
          <div
            css={css({
              position: 'relative'
            })}
          >
            <PricingHero
              headerCSS={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
              textColor={colors.white}
              header={header}
            />
            <Box
              css={css({
                transform: 'translateY(-20%)',
                [`@media (min-width: ${R.nth(0, breakpoints)})`]: {
                  transform: 'translateY(-30%)'
                },
                [`@media (min-width: ${R.nth(1, breakpoints)})`]: {
                  transform: 'translateY(-50%)'
                }
              })}
            >
              <Calculator />
            </Box>
          </div>
          <TextGrid
            description={riskCalculations.description}
            list={riskCalculations.list}
            image={riskCalculations.image}
          />
          <Flex mt={[3, 5]} mb={[3, 5]} justifyContent="center">
            <Testimonial testimonials={testimonials} />
          </Flex>
          <Download />
          <BigSectionLine />
          <Box mb={[3, 5]}>
            <OtherProducts
              products={otherProducts.products}
              description={otherProducts.description}
              title={otherProducts.title}
            />
          </Box>
          <Footer />
        </div>
      </StickyContainer>
    </Layout>
  )
}

export default PricingTemplate

PricingTemplate.propTypes = {
  data: PropTypes.object.isRequired
}

export const query = graphql`
  query PricingPageQuery($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        title
        hero {
          header
          backgroundImage
        }
        riskCalculations {
          image
          description
          list {
            title
            text
          }
        }
        testimonials {
          author
          image
          quote
        }
        otherProducts {
          title
          description
          products {
            title
            icon
            text
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
