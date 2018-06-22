import React from 'react'
import {css} from 'emotion'
import R from 'ramda'

import logo from '../images/logo-white.svg'
import Link from './Link'
import SmallText from './SmallText'
import BodyText from './BodyText'
import Flex from './Flex'
import Box from './Box'
import SiteContainer from './SiteContainer'
import {colors, space} from '../constants/theme'

const mapIndex = R.addIndex(R.map)

const Footer = ({containerClassName}) => {
  const firstFooterLinks = [
    {
      to: '/',
      text: 'Home'
    },
    {
      to: '/products/commercial',
      text: 'Commercial pilots'
    },
    {
      to: '/products/trainee',
      text: 'Trainee pilots'
    },
    {
      to: '/products/hobbyist',
      text: 'Hobbyist pilots'
    },
    {
      to: 'https://help.flockcover.com',
      text: 'Support'
    },
    {
      to: 'https://help.flockcover.com/making-a-claim/how-do-i-make-a-claim',
      text: 'Make a claim'
    }
  ]
  const secondFooterLinks = [
    {
      to: '/about',
      text: 'About us'
    },
    {
      to: 'https://blog.flockcover.com',
      text: 'Blog'
    },
    {
      to: 'https://flockcover.workable.com',
      text: 'Careers'
    },
    {
      to: 'https://help.flockcover.com',
      text: 'FAQ'
    },
    {
      to: '/media-pack',
      text: 'Media pack'
    }
  ]
  return (
    <Flex
      className={containerClassName}
      background={colors.backgrounds.dark}
      justifyContent="center"
      pt={[1, 3]}
      pb={[1, 3]}
    >
      <SiteContainer>
        <Flex flexWrap={true}>
          <Flex width={['100%', '33.33%']} flexDirection="column" pt={3}>
            {mapIndex(({to, text}, index) => {
              return (
                <Link className={styles.link} to={to} key={index}>
                  <SmallText>{text}</SmallText>
                </Link>
              )
            }, firstFooterLinks)}
          </Flex>
          <Flex width={['100%', '33.33%']} flexDirection="column" pt={3}>
            {mapIndex(({to, text}, index) => {
              return (
                <Link className={styles.link} to={to} key={index}>
                  <SmallText>{text}</SmallText>
                </Link>
              )
            }, secondFooterLinks)}
          </Flex>
          <Flex width={['100%', '33.33%']} flexDirection="column" pt={3}>
            <BodyText color="white" fontWeight={700} mb={1}>
              Got a question? Get in touch:
            </BodyText>
            <Link
              to="mailto:hello@flockcover.com"
              className={css({
                color: 'white',
                paddingBottom: R.nth(1, space)
              })}
            >
              <SmallText>hello@flockcover.com</SmallText>
            </Link>
            <Link
              to="tel:+44 (0) 1234 480260"
              className={css({
                color: 'white',
                paddingBottom: R.nth(1, space)
              })}
            >
              <SmallText>+44 (0) 1234 480260</SmallText>
            </Link>
          </Flex>
        </Flex>
        <Flex borderTop="1px solid white" pt={3} mt={3} pb={3} flexWrap={true}>
          <Box width={['100%', '33.33%']} mb={[2, 0]}>
            <img src={logo} className={css({marginBottom: 0})} />
          </Box>
          <Box width={['100%', '33.33%']} mb={[2, 0]}>
            <SmallText fontWeight={700} color="white">
              Flock Cover is regulated by the FCA.
            </SmallText>
            <SmallText color="white">
              Click here to learn what that means
            </SmallText>
          </Box>
          <Box width={['100%', '33.33%']}>
            <SmallText color="white">
              © 2017 Flock Ltd. All Rights Reserved. <br /> Company number
              9503380
            </SmallText>
          </Box>
        </Flex>
      </SiteContainer>
    </Flex>
  )
}

export default Footer

const styles = {
  link: css({
    color: R.prop('yellow', colors),
    paddingBottom: R.nth(2, space)
  })
}
