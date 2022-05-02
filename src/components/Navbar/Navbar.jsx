import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/reflexlogo.svg'
import { links } from '../../navdata'
import { Container, WrapperContainer } from '../globlaStyle/Container.style'
import { Nav, Logoimg } from './NavBar.style'

const Navbar = () => {
  console.log(links)
  return (
    <WrapperContainer Bgcolor='#fff'>
      <Container>
        <Nav>
          <Logoimg src={logo} />
          <ul>
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              )
            })}
          </ul>
        </Nav>
      </Container>
    </WrapperContainer>
  )
}

export default Navbar
