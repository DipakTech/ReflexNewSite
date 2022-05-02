import React from 'react'
import { Container } from '../globlaStyle/Container.style'
import img1 from '../../assets/images/OurLeader/img1.png'
import img2 from '../../assets/images/OurLeader/img2.png'
import img3 from '../../assets/images/OurLeader/img3.png'
import Flex from '../globlaStyle/Flex.style'

const OurLeaders = () => {
  return (
    <Container>
      <div className='title'>
        <h5>Our leaders</h5>
        <span className='style-inverted'>“</span>
        <p>We believe in teamwork, passion, trust and respect</p>
      </div>
      <Flex className='cardlist' mt='70px'>
        <div className='card '>
          <div className='imgdiv'>
            <img src={img1} alt='' className='imgstyle' />
          </div>
          <div className='title'>
            <h6>Nishant phuyal</h6>
            <p>manager</p>
          </div>
        </div>
        <div className='card '>
          <div className='imgdiv'>
            <img src={img2} alt='' className='imgstyle' />
          </div>
          <div className='title'>
            <h6>Uttam Nepal</h6>
            <p>manager</p>
          </div>
        </div>
        <div className='card '>
          <div className='imgdiv'>
            <img src={img3} alt='' className='imgstyle' />
          </div>
          <div className='title'>
            <h6>Basu Nepal</h6>
            <p>manager</p>
          </div>
        </div>
      </Flex>
    </Container>
  )
}

export default OurLeaders
