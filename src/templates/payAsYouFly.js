import React from 'react'
import PropTypes from 'prop-types'
import * as R from 'ramda'
import {StickyContainer} from 'react-sticky'
import {css} from '@emotion/core'
import {graphql} from 'gatsby'

import Layout from '../components/Layout/Layout'
import LightNav from '../components/LightNav'
import Hero from '../components/Hero'
import Box from '../components/Box'
import SmallText from '../components/SmallText'
import TextGrid from '../components/TextGrid'
import TabSection from '../components/ProductTabs/ProductTabs'
import WhatIsCoveredSection from '../components/WhatIsCoveredSection'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import MapBackground from '../components/MapBackground'
import FaqSection from '../components/FaqSection'
import TitleAndDescription from '../components/TitleAndDescription'
import Calculator from '../components/Calculator'
import CalculateRiskDropDown from '../components/CalculateRiskDropDown'
import ToggleiPhone from '../components/ToggleiPhone'
import SiteMetadata from '../components/SiteMetadata'
import {colors, breakpoints} from '../constants/theme'

const PayAsYouFlyTemplate = ({
  downloadLink,
  hero,
  how,
  risk,
  calculator,
  siteMetadataOverride,
  stopWorrying,
  featured,
  faqSection,
  banner,
  productTabs
}) => {
  return (
    <Layout>
      <StickyContainer>
        <div>
          <SiteMetadata
            title={siteMetadataOverride.title}
            description={siteMetadataOverride.description}
            keywords={siteMetadataOverride.keywords}
            webPageName='payAsYouFly'
            ogTitle={siteMetadataOverride.openGraph.title}
            ogDescription={siteMetadataOverride.openGraph.description}
            ogImage={siteMetadataOverride.openGraph.image}
            twtTitle={siteMetadataOverride.twitter.title}
            twtDescription={siteMetadataOverride.twitter.description}
            twtImage={siteMetadataOverride.twitter.image}
          />
          <LightNav to={downloadLink} />
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
              textShadow={false}
              description={hero.description}
              buttons={hero.buttons}
              features={hero.features}
            />
            <Box pt={[3, 3]} pb={[2, 6]} background="white">
              <TextGrid
                title={stopWorrying.title}
                description={stopWorrying.description}
                list={stopWorrying.reasons}
              />
            </Box>
          </Box>

          <MapBackground>
            <ToggleiPhone
              title={how.title}
              description={how.description}
              list={how.list}
            />
            <CalculateRiskDropDown
              title={risk.title}
              list={risk.list}
              description={risk.description}
            />
          </MapBackground>

          <div css={css({backgroundColor: 'white'})}>
            <Box pt={[3, 6]}>
              <TitleAndDescription
                title={calculator.title}
                description={calculator.description}
              />
              <Calculator disclaimer={calculator.disclaimer} />
            </Box>

            <div id="what-is-covered" />
            <Box pt={[3, 6]} background="white">
              <TabSection
                title={productTabs.title}
                description={productTabs.description}
              >
                {productTabs.customerTypeList.map(
                  ({
                    title,
                    customerTypeDesc,
                    whatIsCovered: {
                      mainTitle,
                      mainList,
                      mainDescription,
                      buttonOneText,
                      buttonOneUrl,
                      buttonTwoText,
                      buttonTwoUrl,
                      fromPrice,
                      policyFeatureList,
                      smallPrints,
                      productType,
                      fromText,
                      perText
                    }
                  }) => (
                    <TabSection.Tab title={title} key={title}>
                      <Box>
                        <SmallText
                          css={css({color: 'white'})}
                          mb={4}
                          ml={2}
                          mr={2}
                        >
                          {customerTypeDesc}
                        </SmallText>
                        <WhatIsCoveredSection
                          headerTextColor="white"
                          itemTextColor="white"
                          smallPrintColor="white"
                          mainTitle={mainTitle}
                          mainList={mainList}
                          buttonOneText={buttonOneText}
                          buttonOneUrl={buttonOneUrl}
                          buttonTwoText={buttonTwoText}
                          buttonTwoUrl={buttonTwoUrl}
                          fromPrice={fromPrice}
                          smallPrints={smallPrints}
                          policyFeatureList={policyFeatureList}
                          productType={productType}
                          fromText={fromText}
                          perText={perText}
                        />
                      </Box>
                    </TabSection.Tab>
                  )
                )}
              </TabSection>
            </Box>

            <Banner
              image={banner.image}
              mainText={banner.mainText}
              buttonText={banner.buttonText}
              buttonUrl={banner.buttonUrl}
              buttonTrack={banner.buttonTrack}
            />
          </div>
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
          <Footer />
        </div>
      </StickyContainer>
    </Layout>
  )
}

const style = {
  iphone: css({
    marginBottom: 0,
    display: 'block'
  })
}

PayAsYouFlyTemplate.propTypes = {
  video: PropTypes.object,
  secondTestimonial: PropTypes.array,
  hero: PropTypes.object,
  siteMetadataOverride: PropTypes.object,
  stopWorrying: PropTypes.object,
  featured: PropTypes.object,
  banner: PropTypes.object,
  productTabs: PropTypes.object
}

export {PayAsYouFlyTemplate}

const PayAsYouFly = ({data}) => {
  const {
    productTabs,
    secondTestimonial,
    downloadLink,
    hero,
    calculator,
    siteMetadataOverride,
    stopWorrying,
    featured,
    faqSection,
    banner,
    how,
    risk
  } = data.markdownRemark.frontmatter

  return (
    <PayAsYouFlyTemplate
      hero={hero}
      downloadLink={downloadLink}
      calculator={calculator}
      siteMetadataOverride={siteMetadataOverride}
      stopWorrying={stopWorrying}
      banner={banner}
      productTabs={productTabs}
      faqSection={faqSection}
      how={how}
      risk={risk}
    />
  )
}

PayAsYouFly.propTypes = {
  data: PropTypes.object
}

export default PayAsYouFly

export const query = graphql`
  query PayAsYouFly($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      frontmatter {
        title
        templateKey
        downloadLink
        hero {
          textColor
          backgroundImage
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
        }
        stopWorrying {
          title
          description
          reasons {
            title
            text
            icon
          }
        }
        how {
          title
          description
          list {
            title
            image
            text
          }
        }
        risk {
          title
          description
          list {
            title
            icon
            text
          }
        }
        calculator {
          title
          description
          disclaimer
        }
        banner {
          image
          mainText
          buttonText
          buttonUrl
          buttonTrack
        }
        productTabs {
          title
          description
          customerTypeList {
            title
            customerTypeDesc
            whatIsCovered {
              mainTitle
              mainDescription
              mainList {
                icon
                title
              }
              buttonOneUrl
              buttonOneText
              buttonTwoUrl
              buttonTwoText
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
          }
        }
        faqSection {
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
