import React from 'react'
import TeamData from '../../TeamData'
import Member from './Member'

import { Container } from '../globlaStyle/Container.style'
import { MemberContainer } from './OurTeam.style'

const OurTeam = () => {
  console.log(TeamData)
  return (
    <Container>
      <div className="title">
        <h5>our team member</h5>
      </div>
      <MemberContainer>
        {TeamData.map((member) => {
          return <Member key={member.id} member={member} />
        })}
      </MemberContainer>
    </Container>
  )
}

export default OurTeam
