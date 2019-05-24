import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {StickyContainer} from 'react-sticky'
import * as R from 'ramda'
import {css} from '@emotion/core'
import {graphql} from 'gatsby'

import Layout from '../components/Layout/Layout'
import BigSectionLine from '../components/BigSectionLine'
import Box from '../components/Box'
import WhatIsCoveredSection from '../components/WhatIsCoveredSection'
import LightNav from '../components/LightNav'
import SiteMetadata from '../components/SiteMetadata'
import TextGrid from '../components/TextGrid'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import NonToggleiPhone from '../components/NonToggleIphone'
import BlackBackground from '../components/BlackBackground'
import FaqSection from '../components/FaqSection'
import Hero from '../components/Hero'
import {colors, breakpoints} from '../constants/theme'


class FlyUnlimitedPageTemplate extends Component {
  render() {
    const {
      hero,
      why,
      siteMetadataOverride,
      how,
      control,
      banner,
      whatIsCovered,
      faqSection
    } = this.props.data.markdownRemark.frontmatter

    return (
      <Layout>
        <StickyContainer>
          <div>
            <SiteMetadata
              title={siteMetadataOverride.title}
              description={siteMetadataOverride.description}
              keywords={siteMetadataOverride.keywords}
            />
            <LightNav />
            <Box css={css({backgroundColor: 'white', paddingBottom: 75})}>
              <Hero
                headerCSS={{
                  backgroundImage: `url(${hero.backgroundImage})`,
                  backgroundPosition: 'top left',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
                textColor={colors.white}
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
            </Box>

            {!how.hidden && (
              <BlackBackground css={css({paddingBottom: 40})}>
                <NonToggleiPhone
                  title={how.title}
                  description={how.description}
                  list={how.list}
                  image={how.image}
                  policyPauseSmallPrint={how.policyPauseSmallPrint}
                />
              </BlackBackground>
            )}

            <Box css={css({backgroundColor: 'white', paddingTop: 40})}>
              {!control.hidden && (
                <React.Fragment>
                  <Box mt={[3, 5]}>
                    <TextGrid
                      yellowUnderline
                      title={control.title}
                      description={control.description}
                      list={control.list}
                    />
                  </Box>

                  <div id="what-is-covered">
                    <BigSectionLine />
                  </div>
                </React.Fragment>
              )}

              {!whatIsCovered.hidden && (
                <WhatIsCoveredSection
                  mainTitle={whatIsCovered.mainTitle}
                  mainList={whatIsCovered.mainList}
                  mainDescription={whatIsCovered.mainDescription}
                  buttonOneText={whatIsCovered.buttonOneText}
                  buttonOneUrl={whatIsCovered.buttonOneUrl}
                  fromPrice={whatIsCovered.fromPrice}
                  policyFeatureList={whatIsCovered.policyFeatureList}
                  smallPrints={whatIsCovered.smallPrints}
                  productType={whatIsCovered.productType}
                  fromText={whatIsCovered.fromText}
                  perText={whatIsCovered.perText}
                />
              )}
            </Box>

            {!banner.hidden && (
              <Banner
                image={banner.image}
                mainText={banner.mainText}
                buttonText={banner.buttonText}
                buttonUrl={banner.buttonUrl}
                buttonTrack={banner.buttonTrack}
              />
            )}

            {!faqSection.hidden && (
              <Box css={css({backgroundColor: 'white'})}>
                <FaqSection
                  header={faqSection.header}
                  body={faqSection.body}
                  buttonText={faqSection.buttonText}
                  buttonUrl={faqSection.buttonUrl}
                  disclosureIndicator={faqSection.disclosureIndicator}
                  faqs={faqSection.faqs}
                />
              </Box>
            )}

            <Footer

            />
          </div>
        </StickyContainer>
      </Layout>
    )
  }
}

FlyUnlimitedPageTemplate.propTypes = {
  hero: PropTypes.object,
  flockStory: PropTypes.object,
  siteMetadataOverride: PropTypes.object,
  coreValues: PropTypes.object,
  meetTheTeam: PropTypes.object
}

export default FlyUnlimitedPageTemplate

export const query = graphql`
  query FlyUnlimitedPageQuery($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        title
        hero {
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
          smallPrint
          backgroundImage
        }
        why {
          hidden
          title
          description
          list {
            icon
            title
            text
          }
        }
        how {
          hidden
          title
          description
          image
          policyPauseSmallPrint
          list {
            title
            text
          }
        }
        control {
          hidden
          title
          description
          list {
            title
            text
          }
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
        whatIsCovered {
          hidden
          mainTitle
          mainDescription
          mainList {
            icon
            title
          }
          buttonOneUrl
          buttonOneText
          fromPrice
          policyFeatureList {
            text
          }
          productType
          fromText
          perText
          smallPrints {
            text
          }
        }
        faqSection {
          hidden
          header
          body
          buttonText
          buttonUrl
          disclosureIndicator
          faqs {
            title
            body
          }
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
