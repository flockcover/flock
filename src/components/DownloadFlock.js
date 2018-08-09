import React from 'react'

import ArrowText from './ArrowText'
import BodyText from './BodyText'
import Flex from './Flex'
import Box from './Box'
import PrimaryButton from './PrimaryButton'
import H2 from './H2'
import SiteContainer from './SiteContainer'
import trackDownload from '../utils/trackDownload'

const DownloadFlock = () => {
  const download = () => {
    trackDownload()
    window.open('https://flockcover.app.link/6IW6kTmgfP', '_blank')
  }
  return (
    <Flex justifyContent="center">
      <SiteContainer>
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Box width={['100%', '80%']}>
            <H2 textAlign="center">Download Flock Cover for free. </H2>
          </Box>
          <Box width={['100%', '50%']}>
            <BodyText textAlign="center">
              Get the Flock Cover app on iOS and Android to receive a real-time quote for your flight in seconds.
            </BodyText>
          </Box>
          <Box
            pt={3}
            width={['100%', '50%']}
            display="flex"
            justifyContent="center"
          >
            <PrimaryButton onClick={download}>
              <ArrowText moveOnHover={false}>Download</ArrowText>
            </PrimaryButton>
          </Box>
        </Flex>
      </SiteContainer>
    </Flex>
  )
}

export default DownloadFlock
