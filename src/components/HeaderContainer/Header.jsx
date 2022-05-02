import React from 'react'
import { Container, WrapperContainer } from '../globlaStyle/Container.style'
import Flex from '../globlaStyle/Flex.style'
import FrontImg from '../../assets/images/Rectangle.svg'
import { CallToAction, HeroImg } from './Header.style'
const Header = () => {
  return (
    <WrapperContainer Bgcolor='#E5E5E5' padding='54px'>
      <Container>
        <Flex justifyContent='space-between'>
          <CallToAction>
            <h5>join with us to start your careers. </h5>
            <button className='btn'>get start your journey</button>
          </CallToAction>
          <HeroImg className='Heroimg'>
            <img src={FrontImg} alt='' />
          </HeroImg>
        </Flex>
      </Container>
    </WrapperContainer>
  )
}

export default Header
