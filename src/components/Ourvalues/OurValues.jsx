import React from 'react'
import { Container } from '../globlaStyle/Container.style'
import Flex from '../globlaStyle/Flex.style'
import Teamwork from '../../assets/images/OurValues/teamwork.svg'
import Passion from '../../assets/images/OurValues/passion.svg'
import Trust from '../../assets/images/OurValues/trust.svg'
import Respect from '../../assets/images/OurValues/respect.svg'

const OurValues = () => {
  return (
    <Container>
      <div className='title'>
        <h5>our values</h5>
      </div>
      <Flex justifyContent='space-between' mt='0px'>
        <div className='centerdiv'>
          <img src={Teamwork} alt='teamwork' />
          <p className='center'>teamwork</p>
        </div>
        <div className='centerdiv'>
          <img src={Passion} alt='passion' />
          <p className='center'>passion</p>
        </div>
        <div className='centerdiv'>
          <img src={Trust} alt='trust' />
          <p className='center'>trust</p>
        </div>
        <div className='centerdiv'>
          <img src={Respect} alt='respect' />
          <p className='center'>respect</p>
        </div>
      </Flex>
    </Container>
  )
}

export default OurValues
