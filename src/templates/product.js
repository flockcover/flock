import React from 'react'
import R from 'ramda'
import Media from 'react-media'
import { css } from 'emotion'

import BigSectionLine from '../components/BigSectionLine'
import Flex from '../components/Flex'
import Box from '../components/Box'
import TextSection from '../components/TextSection'
import LightNav from '../components/LightNav'
import MobileNav from '../components/MobileNav'
import TextGrid from '../components/TextGrid'
import Footer from '../components/Footer'
import DownloadFlock from '../components/DownloadFlock'
import Featured from '../components/Featured'
import OtherProducts from '../components/OtherProducts'
import ToggleiPhone from '../components/ToggleiPhone'
import CalculateRiskFlat from '../components/CalculateRiskFlat'
import CalculateRiskDropDown from '../components/CalculateRiskDropDown'
import Testimonial from '../components/Testimonial'

import Hero from '../components/Hero'
import SiteContainer from '../components/SiteContainer'
import CoverNote from '../components/CoverNote'
import { colors, breakpoints } from '../constants/theme'

const SegmentPageTemplate = ({ data }) => {
  const {
    hero: { header, description, button, backgroundImage },
    why,
    showCoverNote,
    doINeedInsurance,
    how,
    risk,
    testimonial,
    otherProducts,
  } = data.markdownRemark.frontmatter
  return (
    <div>
      <Media query={`(min-width: ${R.nth(0, breakpoints)}`}>
        {matches => (matches ? <LightNav /> : <MobileNav />)}
      </Media>
      <Hero
        headerClassName={css({
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
        })}
        textColor={colors.white}
        header={header}
        description={description}
        button={button}
      />
      <TextGrid
        title={why.title}
        description={why.description}
        list={why.list}
      />
      <div>
        <Flex justifyContent="center">
          <SiteContainer>
            <BigSectionLine />
          </SiteContainer>
        </Flex>
        {showCoverNote ? (
          <CoverNote />
        ) : (
          <TextSection
            title={doINeedInsurance.title}
            bigText={doINeedInsurance.bigText}
            smallText={doINeedInsurance.smallText}
          />
        )}
      </div>
      <ToggleiPhone
        title={how.title}
        description={how.description}
        list={how.list}
      />
      <Flex background={colors.backgrounds.dark} justifyContent="center">
        <SiteContainer>
          <BigSectionLine
            borderColor={colors.white}
            backgroundColor={colors.backgrounds.dark}
          />
        </SiteContainer>
      </Flex>
      <Media query={`(min-width: ${R.nth(0, breakpoints)}`}>
        {matches =>
          matches ? (
            <CalculateRiskFlat
              title={risk.title}
              description={risk.description}
              list={risk.list}
            />
          ) : (
            <CalculateRiskDropDown
              title={risk.title}
              description={risk.description}
              list={risk.list}
            />
          )
        }
      </Media>
      <Box pt={3} pb={3}>
        <Testimonial testimonials={testimonial} />
      </Box>
      <DownloadFlock />
      <OtherProducts
        title={otherProducts.title}
        description={otherProducts.description}
        products={otherProducts.products}
      />
      <Featured />
      <Footer />
    </div>
  )
}

export default SegmentPageTemplate

export const query = graphql`
  query ProductPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        hero {
          button {
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
            title
            text
          }
        }
        showCoverNote
        doINeedInsurance {
          title
          bigText
          smallText
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
            list
          }
        }
        testimonial {
          quote
          author
          image
        }
        otherProducts {
          title
          description
          products {
            title
            text
            icon
            link
          }
        }
      }
    }
  }
`