import React from 'react'
import { Container, WrapperContainer } from '../globlaStyle/Container.style'
import { BarWrapper } from './VacanciesTopBar.style'
import { useLocation } from 'react-router-dom'

const VacanciesTopBar = () => {
  const location = useLocation()
  console.log(location.pathname)
  return (
    <WrapperContainer Bgcolor='#2AAEFF' height='140px'>
      <Container>
        <BarWrapper>
          <p>{location.pathname}</p>
          <h5>UI/Ux designer</h5>
          <p>deadline jan 26</p>
        </BarWrapper>
      </Container>
    </WrapperContainer>
  )
}

export default VacanciesTopBar
