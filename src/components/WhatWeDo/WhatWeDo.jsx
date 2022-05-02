import React from 'react'
import { Link } from 'react-router-dom'
import { Container, WrapperContainer } from '../globlaStyle/Container.style'
import { AiOutlineArrowRight } from 'react-icons/ai'

import whatwedo from '../../assets/images/WhatWeDo/Rectangle.png'

import { ContentWrapper, ImageWrapper } from './WhatWeDo.style'
import Flex from '../globlaStyle/Flex.style'

const WhatWeDo = () => {
  return (
    <WrapperContainer Bgcolor='#E5E5E5' padding='60px'>
      <Container>
        <Flex justifyContent='space-between'>
          <ContentWrapper>
            <h5>what we do?</h5>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco
              est sit aliqua dolor do amet sint. Velit officia consequat duis
              enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet. Exercitation veniam consequat sunt nostrud amet.Amet minim
              mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit.
            </p>
            <li>
              <Link to='#'>
                learm more
                <AiOutlineArrowRight />
              </Link>
            </li>
          </ContentWrapper>
          <ImageWrapper>
            <div className='imageContainer'>
              <img src={whatwedo} alt='' />
            </div>
          </ImageWrapper>
        </Flex>
      </Container>
    </WrapperContainer>
  )
}

export default WhatWeDo
