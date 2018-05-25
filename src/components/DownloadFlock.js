import React from 'react'

import BodyText from './BodyText'
import Flex from './Flex'
import Box from './Box'
import PrimaryButton from './PrimaryButton'
import H2 from './H2'
import SiteContainer from './SiteContainer'
import BigSectionLine from './BigSectionLine'

const DownloadFlock = ({}) => {
  return (
    <Flex justifyContent="center">
      <SiteContainer>
        <Flex justifyContent="center" alignItems="center" flexWrap={true}>
          <Box width="80%">
            <H2 textAlign="center">Download the Flock app to get covered</H2>
          </Box>
          <Box width="50%">
            <BodyText textAlign="center">
              Get our iOS or Android app for free. Have a play and see how to
              reduce your flight’s risk.
            </BodyText>
          </Box>
          <Box pt={3} width="100%" display="flex" justifyContent="center">
            <PrimaryButton>Download</PrimaryButton>
          </Box>
        </Flex>
        <BigSectionLine />
      </SiteContainer>
    </Flex>
  )
}

export default DownloadFlock
