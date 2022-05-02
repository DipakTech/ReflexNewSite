import React from 'react'
import { Container, WrapperContainer } from '../globlaStyle/Container.style'
import Flex from '../globlaStyle/Flex.style'
import learnmore from '../../assets/images/WhatWeDo/learnmore.svg'
import heroimg from '../../assets/images/WhatWeDo/heroimg.svg'
import {
  MainStyle,
  HeroImage,
  HeroSection,
  ProcessSection,
} from './Aboutus.style'
import OurValues from '../Ourvalues/OurValues'
import OurLeaders from '../OurLeaders/OurLeaders'
import process from '../../assets/images/WhatWeDo/processIllustration.svg'
import OurTeam from '../OurTeam/OurTeam'

const Aboutus = () => {
  return (
    <WrapperContainer>
      <MainStyle>
        <HeroSection>
          <div className='title'>
            <h5>what we do?</h5>
          </div>
          <Flex justifyContent='space-between'>
            <div className='body'>
              teamwork mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
              ullamco est sit aliqua dolor do amet sint. Velit officia consequat
              duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor
              do amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Exercitation
              veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
              ullamco est sit aliqua dolor do amet sint. Velit officia consequat
              duis enim velit mollit. veniam consequat sunt nostrud amet.Amet
              minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat sunt nostrud amet.
            </div>
            <HeroImage imageUrl={learnmore}>
              <img src={heroimg} alt='' />
            </HeroImage>
          </Flex>
          <Container>
            <ProcessSection>
              <div className='title'>
                <h5>process</h5>
                <p> work mollit non deserunt ullamco est sit aliqua</p>
                <div className='process'>
                  <img src={process} alt='' />
                </div>
              </div>
            </ProcessSection>
          </Container>
        </HeroSection>
        <OurValues />
        <OurLeaders />
        <OurTeam/>
        <section className='join-us'>
          <h5>join with us to start your careers. </h5>
          <Flex justifyContent='space-between'>
            <p>
              work mollit non deserunt ullamco est sit aliqua work mollit non
              deserunt ullamco est sit aliqua work mollit non deserunt ullamco
              est sit aliqua
            </p>
            <button className='btn'>Start your journey </button>
          </Flex>
        </section>
      </MainStyle>
    </WrapperContainer>
  )
}

export default Aboutus
