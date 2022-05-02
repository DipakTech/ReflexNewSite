import React from 'react'
import { BannerStyle, ItemStyle } from './OurExpertiseBanner.style'
import Teamwork from '../../assets/images/teamwork.svg'
import HappyMoment from '../../assets/images/HappyMoment.svg'
import LearnFromExport from '../../assets/images/LearnFromexport.svg'
import Project from '../../assets/images/Project.svg'

const OurExpertiseBanner = () => {
  const OurWork = [
    {
      id: 1,
      img: Teamwork,
      text: 'Teamwork',
    },
    {
      id: 2,
      img: HappyMoment,
      text: 'Happy Enviroment',
    },
    {
      id: 3,
      img: LearnFromExport,
      text: 'Learn From Experts',
    },
    {
      id: 4,
      img: Project,
      text: '50* Projects',
    },
  ]

  return (
    <BannerStyle>
      {OurWork.map((item, index) => {
        const { img, text } = item
        return (
          <ItemStyle key={index}>
            <img src={img} alt={text} />
            <p>{text}</p>
          </ItemStyle>
        )
      })}
    </BannerStyle>
  )
}

export default OurExpertiseBanner
