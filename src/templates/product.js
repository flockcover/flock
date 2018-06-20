import React from 'react'
import R from 'ramda'
import Media from 'react-media'
import {css} from 'emotion'

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
import FlightSchool from '../components/FlightSchool'
import Testimonial from '../components/Testimonial'
import map from '../images/map.png'

import Hero from '../components/Hero'
import CoverNote from '../components/CoverNote'
import {colors, breakpoints} from '../constants/theme'
import SiteContainer from '../components/SiteContainer'

const SegmentPageTemplate = ({data}) => {
  const {
    hero: {header, description, button, backgroundImage},
    why,
    showCoverNote,
    showFlightSchoolList,
    doINeedInsurance,
    how,
    risk,
    testimonial,
    otherProducts
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
          backgroundRepeat: 'no-repeat'
        })}
        textColor={colors.white}
        header={header}
        description={description}
        button={button}
      />
      <Box mt={[2, 5]}>
        <TextGrid
          title={why.title}
          description={why.description}
          list={why.list}
        />
      </Box>
      {showFlightSchoolList ? (
        <div>
          <BigSectionLine />
          <Flex justifyContent="center">
            <SiteContainer>
              <FlightSchool />
            </SiteContainer>
          </Flex>
        </div>
      ) : null}
      <BigSectionLine pb={0} />
      {showCoverNote ? (
        <CoverNote />
      ) : (
        <TextSection
          title={doINeedInsurance.title}
          bigText={doINeedInsurance.bigText}
          smallText={doINeedInsurance.smallText}
        />
      )}
      <div
        className={css({
          background: `${colors.backgrounds.dark} url(${map})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        })}
      >
        <ToggleiPhone
          title={how.title}
          description={how.description}
          list={how.list}
        />
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
      </div>
      <Box pt={[2, 5]}>
        <Testimonial testimonials={testimonial} />
      </Box>
      <Box pt={[2, 5]}>
        <DownloadFlock />
      </Box>
      <BigSectionLine />
      <OtherProducts
        title={otherProducts.title}
        description={otherProducts.description}
        products={otherProducts.products}
      />
      <Box pt={[2, 5]}>
        <Featured />
      </Box>
      <Footer />
    </div>
  )
}

export default SegmentPageTemplate

export const query = graphql`
  query ProductPageQuery($id: String!) {
    markdownRemark(id: {eq: $id}) {
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
        showFlightSchoolList
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
