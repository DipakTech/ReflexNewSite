import React from 'react'
import { Container } from '../globlaStyle/Container.style'
import { ClientContainer } from './OurClient.style'
import client1 from '../../assets/images/OurClinet/client1.png'
import client2 from '../../assets/images/OurClinet/client2.png'
import client3 from '../../assets/images/OurClinet/client3.png'
import client4 from '../../assets/images/OurClinet/client4.png'
import client5 from '../../assets/images/OurClinet/client5.png'
import client6 from '../../assets/images/OurClinet/client6.png'
import client7 from '../../assets/images/OurClinet/client7.png'

const OurClient = () => {
  return (
    <Container>
      <ClientContainer>
        <div className='title'>
          <h5>Our Client</h5>
        </div>
        <div className='firstRow'>
          <div className='item'>
            <img src={client1} alt='' />
          </div>
          <div className='item'>
            <img src={client2} alt='' />
          </div>
          <div className='item'>
            <img src={client3} alt='' />
          </div>
          <div className='item'>
            <img src={client4} alt='' />
          </div>
        </div>
        <div className='secondRow'>
          <div className='item'>
            <img src={client5} alt='' />
          </div>
          <div className='item'>
            <img src={client6} alt='' />
          </div>
          <div className='item'>
            <img src={client7} alt='' />
          </div>
        </div>
      </ClientContainer>
    </Container>
  )
}

export default OurClient
