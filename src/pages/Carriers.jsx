import React from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  WrapperContainer,
} from '../components/globlaStyle/Container.style'
import styled from 'styled-components'
import dateIcon from '../assets/images/Vacancies/Vector.svg'
export const WrapperStyle = styled.div`
  display: flex;
  flex-direction: column;

  .title-content {
    margin-bottom: 30px;
    text-transform: capitalize;

    .title {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 27px;
      letter-spacing: 0.01em;
      color: #000000;
    }
  }

  .justify {
    text-align: justify;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    text-align: justify;
    letter-spacing: 0.01em;
    text-transform: capitalize;

    color: rgba(0, 0, 0, 0.7);
  }

  .vacancies {
    .vacancie {
      color: blue;
      letter-spacing: 0.01em;
      text-transform: capitalize;
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 40px;
      padding: 20px;
      list-style: disc;
      li {
        h5 {
          size: 18px;
          font-weight: 400;
          line-height: 27px;
          font-family: 'poppins';
        }
        a {
          padding-left: 5px;
        }
      }
    }
  }
`

const Carriers = () => {
  return (
    <WrapperContainer>
      <Container>
        <WrapperStyle>
          <div className='title-content'>
            <p className='title'>why to join reflex IT solution?</p>
            <p className='justify'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco
              est sit aliqua dolor do amet sint. Velit officia consequat duis
              enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor
              do amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco
              est sit aliqua dolor do amet sint. Velit officia consequat duis
              enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </p>
          </div>
          <div className='vacancies'>
            <div className='vacancie'>Vacancie</div>
            <ul>
              <li>
                <h5>UI/Ux designer(mid level)</h5>
                <img src={dateIcon} alt='' />
                <Link to='/careers/vacancies/'>
                  01/jan/2022 - 29/jan/2022
                  <p>(4 seat available)</p>
                </Link>
              </li>
              <li>
                <h5>flutter (Internship)</h5>
                <img src={dateIcon} alt='' />
                <Link to='/careers/vacancies/'>
                  {' '}
                  01/jan/2022 - 29/jan/2022
                  <p>(4 seat available)</p>
                </Link>
              </li>
              <li>
                <h5>java (Internship)</h5>
                <img src={dateIcon} alt='' />
                <Link to='/careers/vacancies/'>
                  01/jan/2022 - 29/jan/2022
                  <p>(4 seat available)</p>
                </Link>
              </li>
              <li>
                <h5>word press (Internship)</h5>
                <img src={dateIcon} alt='' />
                <Link to='/careers/vacancies/'>
                  01/jan/2022 - 29/jan/2022
                  <p>(4 seat available)</p>
                </Link>
              </li>
            </ul>
          </div>
        </WrapperStyle>
      </Container>
    </WrapperContainer>
  )
}

export default Carriers
