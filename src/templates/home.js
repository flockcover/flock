import React from 'react'
import Link from 'gatsby-link'

import HomeHero from '../components/HomeHero'
import Text from '../components/Text'
import Flex from '../components/Flex'
import Box from '../components/Box'
import StopWorrying from '../components/StopWorrying'
import WhatKindOfPilot from '../components/WhatKindOfPilot'
import Testimonial from '../components/Testimonial'
import HowFlockWorks from '../components/HowFlockWorks'
import HowToCalculateRisk from '../components/HowToCalculateRisk'
import WhatFlockCovers from '../components/WhatFlockCovers'
import DownloadFlock from '../components/DownloadFlock'
import Featured from '../components/Featured'
import Footer from '../components/Footer'

const HomePageTemplate = ({ data }) => {
  const {
    title,
    firstTestimonial,
    secondTestimonial,
    hero: { header, description, button },
    howFlockWorks,
    stopWorrying,
    kindOfPilot,
    whatFlockCovers,
    risk,
  } = data.allMarkdownRemark.edges[0].node.frontmatter

  return (
    <div>
      <HomeHero header={header} description={description} button={button} />
      <StopWorrying data={stopWorrying} />
      <WhatKindOfPilot data={kindOfPilot} />
      <Box pb={3}>
        <Testimonial testimonials={firstTestimonial} />
      </Box>
      <HowFlockWorks data={howFlockWorks} />
      <HowToCalculateRisk data={risk} />
      <WhatFlockCovers data={whatFlockCovers} />
      <Box pb={5}>
        <Testimonial testimonials={secondTestimonial} />
      </Box>
      <DownloadFlock />
      <Featured />
      <Footer />
    </div>
  )
}

export default HomePageTemplate

export const query = graphql`
  query HomePage {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/pages/index.md/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            templateKey
            hero {
              header
              description
              button {
                text
                to
              }
            }
            firstTestimonial {
              quote
              author
              image
            }
            secondTestimonial {
              quote
              author
              image
            }
            stopWorrying {
              title
              description
              reasons {
                title
                text
              }
            }
            kindOfPilot {
              title
              description
              pilots {
                title
                icon
                text
                link
              }
            }
            risk {
              title
              description
              calculations {
                title
                icon
                list
              }
            }
            howFlockWorks {
              title
              description
              listOfHow {
                title
                text
                image
              }
            }
            whatFlockCovers {
              title
              description
              listOfWhatFlockCovers {
                text
              }
            }
          }
        }
      }
    }
  }
`
