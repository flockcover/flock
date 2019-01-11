import React, {Component} from 'react'
import {StickyContainer} from 'react-sticky'
import {css} from 'emotion'
import {ScrollTo} from 'react-scroll-to'

import BigSectionLine from '../components/BigSectionLine'
import Box from '../components/Box'
import TextSection from '../components/TextSection'
import WhatIsCoveredSection from '../components/WhatIsCoveredSection'
import Flex from '../components/Flex'
import LightNav from '../components/LightNav'
import SiteMetadata from '../components/SiteMetadata'
import TextGrid from '../components/TextGrid'
import Footer from '../components/Footer'
import RenewalBanner from '../components/RenewalBanner'
import NonToggleiPhone from '../components/NonToggleiPhone'
import BlackBackground from '../components/BlackBackground'

import Hero from '../components/Hero'
import {colors} from '../constants/theme'

class SegmentPageTemplate extends Component {
  constructor(props) {
    super(props)
    this.whatIsCoveredRef = React.createRef() // Create a ref object
  }

  scrollToWhatIsCoveredRef = () => {
    window.scrollTo({
      top: this.whatIsCoveredRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  render() {
    const {
      hero,
      why,
      siteMetadataOverride,
      how,
      control,
      renewalBanner,
      whatIsCovered
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
              buttonOne={hero.buttonOne}
              buttonTwo={hero.buttonTwo}
              buttonTwoAction={this.scrollToWhatIsCoveredRef}
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

            <div ref={this.whatIsCoveredRef}>
              <BigSectionLine />
            </div>

            <WhatIsCoveredSection
              title={whatIsCovered.title}
              list={whatIsCovered.list}
              priceSmallPrint={whatIsCovered.priceSmallPrint}
            />
          </Box>

          <RenewalBanner
            image={renewalBanner.image}
            mainText={renewalBanner.mainText}
            buttonText={renewalBanner.buttonText}
          />

          <Footer />
        </div>
      </StickyContainer>
    )
  }
}

export default SegmentPageTemplate

export const query = graphql`
  query FlyUnlimitedPageQuery($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        title
        hero {
          buttonOne {
            text
            to
          }
          buttonTwo {
            text
            to
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
        }
        whatIsCovered {
          title
          list {
            icon
            title
          }
          priceSmallPrint
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
