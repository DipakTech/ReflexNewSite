import React from 'react'
import { Container, WrapperContainer } from '../globlaStyle/Container.style'
import { Link } from 'react-router-dom'

import { OurProducts } from '../../OurProduct'
import { WorkStyleContainer, SectionBg } from './Work.style'
import playstore from '../../assets/images/Work/playstore.png'
import apple from '../../assets/images/Work/apple.png'
import background from '../../assets/images/Work/background.svg'

const Work = () => {
  return (
    <WrapperContainer padding='64px'>
      <Container>
        <div className='title'>
          <h5>Work</h5>
          <p>veniam consequat sunt nostrud amet</p>
        </div>
        <WorkStyleContainer>
          {OurProducts.map((item) => {
            return (
              <div className='singleCard' key={item.id}>
                <div className='imgDiv'>
                  <img src={item.img} alt='name' />
                </div>
                <h4>{item.name}</h4>
                <p id='bodyContant'>{item.body}</p>

                <aside>
                  <p>Available on</p>
                  <ul>
                    <li>
                      <Link to='#'>
                        <img src={playstore} alt='playstore logo' />
                        <span>Playstore</span>
                      </Link>
                    </li>
                    <li>
                      <Link to='#'>
                        <img src={apple} alt='playstore logo' />
                        <span>Apple</span>
                      </Link>
                    </li>
                  </ul>
                </aside>
              </div>
            )
          })}
        </WorkStyleContainer>
      </Container>
      <SectionBg>
        <img src={background} alt='' />
      </SectionBg>
    </WrapperContainer>
  )
}

export default Work
