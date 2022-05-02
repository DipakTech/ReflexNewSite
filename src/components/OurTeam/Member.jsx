import React from 'react'
import { MemberContainer, ImageWrapper, ContentWrapper } from './Member.style'
import { LinkStyle } from '../Footer/Footer.style'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Member = ({ member }) => {
  const { name, img, position, links } = member
  console.log(links)
  return (
    <MemberContainer>
      <ImageWrapper>
        <img src={img} alt='' />
      </ImageWrapper>
      <ContentWrapper>
        <p>{name}</p>
        <p>{position}</p>
      </ContentWrapper>
      <LinkStyle>
        <li>
          <a href="https://www.facebook.com">
            <FaFacebook/>
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
      </LinkStyle>
    </MemberContainer>
  )
}

export default Member
