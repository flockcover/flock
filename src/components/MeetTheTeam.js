import React from 'react'
import {withPrefix} from 'gatsby'
import {css} from '@emotion/core'
import PropTypes from 'prop-types'
import * as R from 'ramda'

import SiteContainer from './SiteContainer'
import SmallText from './SmallText'
import TitleAndDescription from './TitleAndDescription'
import ShowIf from './ShowIf'
import Flex from './Flex'
import Box from './Box'

const mapIndex = R.addIndex(R.map)

const MeetTheTeam = ({title, description, team}) => {
  return (
    <div>
      <TitleAndDescription title={title} description={description} />
      <Flex justifyContent="center">
        <SiteContainer>
          <Flex flexWrap="wrap" justifyContent="flex-start">
            {mapIndex(({member, role, image}, key) => {
              return (
                <Box
                  key={key}
                  mb={2}
                  pr={2}
                  width={['50%', '33.33%', `${100 / 6}%`]}
                >
                  <ShowIf predicate={!!image}>
                    <img src={withPrefix(image)} css={style.image} />
                  </ShowIf>
                  <SmallText fontWeight={700}>{member}</SmallText>
                  <SmallText>{role}</SmallText>
                </Box>
              )
            }, team)}
          </Flex>
        </SiteContainer>
      </Flex>
    </div>
  )
}

const style = {
  image: css({
    marginBottom: 0
  })
}

export default MeetTheTeam

MeetTheTeam.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  team: PropTypes.array
}
