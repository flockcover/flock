import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {StickyContainer} from 'react-sticky'
import {css} from 'emotion'

import BigSectionLine from '../components/BigSectionLine'
import Box from '../components/Box'
import WhatIsCoveredSection from '../components/WhatIsCoveredSection'
import LightNav from '../components/LightNav'
import SiteMetadata from '../components/SiteMetadata'
import TextGrid from '../components/TextGrid'
import Footer from '../components/Footer'
import RenewalBanner from '../components/RenewalBanner'
import NonToggleiPhone from '../components/NonToggleIphone'
import BlackBackground from '../components/BlackBackground'
import FUfaqSection from '../components/FUfaqSection'

import Hero from '../components/Hero'
import {colors} from '../constants/theme'

class FlyUnlimitedPageTemplate extends Component {
  render() {
    const {
      hero,
      why,
      siteMetadataOverride,
      how,
      control,
      renewalBanner,
      whatIsCovered,
      faqSection
    } = this.props.data.markdownRemark.frontmatter

    return (
      <StickyContainer>
        <div>
          <SiteMetadata
            title={siteMetadataOverride.title}
            description={siteMetadataOverride.description}
            keywords={siteMetadataOverride.keywords}
          />
          <LightNav />
          <Box className={css({backgroundColor: 'white', paddingBottom: 75})}>
            <Hero
              headerClassName={css({
                backgroundImage: `url(${hero.backgroundImage})`,
                backgroundPosition: 'top left',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              })}
              textColor={colors.white}
              header={hero.header}
              description={hero.description}
              buttons={hero.buttons}
              features={hero.features}
            />

            <Box mt={[3, 5]}>
              <TextGrid
                title={why.title}
                description={why.description}
                list={why.list}
              />
            </Box>
          </Box>
          <BlackBackground className={css({paddingBottom: 40})}>
            <NonToggleiPhone
              title={how.title}
              description={how.description}
              list={how.list}
              image={how.image}
              policyPauseSmallPrint={how.policyPauseSmallPrint}
            />
          </BlackBackground>
          <Box className={css({backgroundColor: 'white', paddingTop: 40})}>
            <Box mt={[3, 5]}>
              <TextGrid
                yellowUnderline
                title={control.title}
                description={control.description}
                list={control.list}
              />
            </Box>

            <BigSectionLine id="what-is-covered" />

            <WhatIsCoveredSection
              cardTitle={whatIsCovered.cardTitle}
              mainTitle={whatIsCovered.mainTitle}
              mainDescription={whatIsCovered.mainDescription}
              mainList={whatIsCovered.mainList}
              smallprints={whatIsCovered.smallprints}
              buttonText={whatIsCovered.buttonText}
              buttonUrl={whatIsCovered.buttonUrl}
              fromPrice={whatIsCovered.fromPrice}
              features={whatIsCovered.features}
            />
          </Box>

          <RenewalBanner
            image={renewalBanner.image}
            mainText={renewalBanner.mainText}
            buttonText={renewalBanner.buttonText}
            buttonUrl={renewalBanner.buttonUrl}
            buttonTrack={renewalBanner.buttonTrack}
          />

          <Box className={css({backgroundColor: 'white'})}>
            <FUfaqSection
              header={faqSection.header}
              body={faqSection.body}
              buttonText={faqSection.buttonText}
              buttonUrl={faqSection.buttonUrl}
              faqList={faqSection.faqList}
            />
          </Box>

          <Footer />
        </div>
      </StickyContainer>
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
          backgroundImage
        }
        why {
          title
          description
          list {
            icon
            title
            text
          }
        }
        how {
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
          title
          description
          list {
            title
            text
          }
        }
        renewalBanner {
          image
          mainText
          buttonText
          buttonUrl
          buttonTrack
        }
        whatIsCovered {
          cardTitle
          mainTitle
          mainDescription
          mainList {
            icon
            title
          }
          smallprints {
            text
          }
          buttonText
          buttonUrl
          fromPrice
          features {
            text
          }
        }
        faqSection {
          header
          body
          buttonText
          buttonUrl
          faqList {
            text
            url
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
