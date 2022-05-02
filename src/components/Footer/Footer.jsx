import React from 'react'
import { links } from '../../navdata'
import { MdLocationOn, MdPhoneEnabled, MdEmail } from 'react-icons/md'
import { Container, WrapperContainer } from '../globlaStyle/Container.style'
import {
  FooterContainer,
  AboutusContainer,
  LinksContainer,
  SupportContainer,
  ContactContainer,
  BgColor,
  LinkStyle,
} from './Footer.style'
import { MdFacebook } from 'react-icons/md'
import { FaTwitter, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

const Footer = () => {
  return (
    <WrapperContainer>
      <BgColor>
        <Container>
          <FooterContainer>
            <AboutusContainer>
              <h5>About Us</h5>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              </p>
            </AboutusContainer>
            <LinksContainer>
              <h5>quick links</h5>
              <ul>
                {links.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href={item.url}>{item.text}</a>
                    </li>
                  )
                })}
              </ul>
            </LinksContainer>
            <SupportContainer>
              <h5>Support</h5>
              <ul>
                <li>Help</li>
                <li>Company policies</li>
                <li>How to join Norma?</li>
              </ul>
            </SupportContainer>
            <ContactContainer>
              <h5>Contact us</h5>
              <ul>
                <li>
                  <span>
                    <MdLocationOn />
                  </span>
                  sinamangal kathmandu, nepal
                </li>
                <li>
                  <span>
                    <MdPhoneEnabled />
                  </span>
                  9876543210 / 1234567890
                </li>
                <li>
                  <span>
                    <MdEmail />
                  </span>
                  reflrxitsolution@gmail.com
                </li>
              </ul>
            </ContactContainer>
          </FooterContainer>
          <LinkStyle >
              <li>
                <a href='https://www.facebook.com'>
                  <MdFacebook />
                </a>
              </li>
              <li>
                <a href='https://www.twitter.com'>
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com'>
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href='https://www.gmail.com'>
                  <SiGmail />
                </a>
              </li>
          </LinkStyle>
        </Container>
      </BgColor>
    </WrapperContainer>
  )
}

export default Footer
