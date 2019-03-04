import React from 'react'
import {StickyContainer} from 'react-sticky'
import {css} from 'emotion'

import BigSectionLine from '../components/BigSectionLine'
import Box from '../components/Box'
import TextSection from '../components/TextSection'
import LightNav from '../components/LightNav'
import DarkNav from '../components/DarkNav'
import SiteMetadata from '../components/SiteMetadata'
import TextGrid from '../components/TextGrid'
import Footer from '../components/Footer'
import ShowIf from '../components/ShowIf'
import FlightSchool from '../components/FlightSchool'
import Testimonial from '../components/Testimonial'
import RenewalBanner from '../components/RenewalBanner'

import Hero from '../components/Hero'
import CoverNote from '../components/CoverNote'
import {colors} from '../constants/theme'

const SegmentPageTemplate = ({data}) => {
  const {
    navColor,
    hero,
    why,
    coverNote,
    flightSchool,
    siteMetadataOverride,
    doINeedInsurance,
    testimonial,
    renewalBanner
  } = data.markdownRemark.frontmatter

  return (
    <StickyContainer>
      <div>
        <SiteMetadata
          title={siteMetadataOverride.title}
          description={siteMetadataOverride.description}
          keywords={siteMetadataOverride.keywords}
        />
        {navColor === 'light' ? <LightNav /> : <DarkNav />}
        <Box className={css({backgroundColor: 'white'})}>
          <Hero
            headerClassName={css({
              backgroundImage: `url(${hero.backgroundImage})`,
              backgroundPosition: 'top left',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            })}
            textColor={colors[hero.textColor]}
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
          <ShowIf predicate={flightSchool.show}>
            <BigSectionLine />
            <FlightSchool title={flightSchool.title} list={flightSchool.list} />
          </ShowIf>
          <BigSectionLine pb={0} />
          {coverNote.isShowing ? (
            <CoverNote
              image={coverNote.image}
              title={coverNote.title}
              bodyText={coverNote.bodyText}
              smallText={coverNote.smallText}
              link={coverNote.link}
            />
          ) : (
            <TextSection
              title={doINeedInsurance.title}
              bigText={doINeedInsurance.bigText}
              smallText={doINeedInsurance.smallText}
            />
          )}
        </Box>

        <Box className={css({backgroundColor: 'white'})}>
          <Box pt={[3, 3]}>
            <Testimonial testimonials={testimonial} />
          </Box>
          <Box pt={[3, 6]}>
            <RenewalBanner
              image={renewalBanner.image}
              mainText={renewalBanner.mainText}
              buttonText={renewalBanner.buttonText}
              buttonUrl={renewalBanner.buttonUrl}
              buttonTrack={renewalBanner.buttonTrack}
            />
          </Box>
        </Box>
        <Footer />
      </div>
    </StickyContainer>
  )
}

export default SegmentPageTemplate

export const query = graphql`
  query ProductPageQuery($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
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
          title
          description
          list {
            title
            text
          }
        }
        coverNote {
          isShowing
          image
          title
          bodyText
          smallText
          link {
            to
            text
          }
        }
        flightSchool {
          show
          title
          list {
            image
            to
          }
        }
        doINeedInsurance {
          title
          bigText
          smallText
        }
        testimonial {
          quote
          author
          image
        }
        renewalBanner {
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
        }
      }
    }
  }
`
