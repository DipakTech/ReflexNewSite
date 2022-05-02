import React from 'react'
import SingleCard, { CardWrapper } from './SingleCard.style.js'
const Card = ({ item }) => {
  const { name, img } = item
  return (
    <CardWrapper>
      <SingleCard>
        <img src={img} alt='kdsjf' className='img' />
      </SingleCard>
      <h5>{name}</h5>
    </CardWrapper>
  )
}

export default Card
