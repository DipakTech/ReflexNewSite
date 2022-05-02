import React from 'react'
import Card from './Card'
import { serviceData } from '../../services'
import { Container, WrapperContainer } from '../globlaStyle/Container.style'
import CardsContainer from './CardsContainer.style'

export const Cardlist = () => {
  console.log(serviceData)
  return (
    <WrapperContainer>
      <div className='title'>
        <h5>our expertise</h5>
      </div>
      <Container>
        <CardsContainer>
          {serviceData.map((item) => {
            return <Card key={item.id} item={item} />
          })}
        </CardsContainer>
      </Container>
    </WrapperContainer>
  )
}

export default Cardlist
