import React from 'react'
import {
  Container,
  WrapperContainer,
} from '../components/globlaStyle/Container.style'
import VacanciesTopBar from '../components/VancanciesTopBar/VacanciesTopBar'
import styled from 'styled-components'
import FormNavigationImg from '../assets/images/FormImg/illustration.svg'
const CardInformations = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 60px;
  .CardInformation {
    width: 600px;
    border: 1px solid rgba(33, 118, 255, 0.9);
    border-radius: 8px;

    .width {
      background: #2aaeff;
      border-radius: 8px 8px 0px 0px;
      height: 67px;
      margin: auto 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }

    ul {
      padding-left: 35.5px;

      li {
        list-style: disc;
        margin-bottom: 24px;
      }
    }
  }
`
const FormSection = styled.div`
  width: 100%;
`

const FormInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  form {
    width: 700px;
    padding-top: 80px;
    position: relative;
    #textarea {
      display: flex;
      flex-direction: column;

      label {
        margin-bottom: 20px;
      }

      textarea {
        height: 150px;
        background: #ffffff;
        border: 0.5px solid #000000;
        box-sizing: border-box;
        border-radius: 4px;
      }
    }

    .formgrop {
      margin-bottom: 40px;
      display: flex;
      justify-content: space-between;

      input {
        height: 40px;
        width: 500px;
        background: #ffffff;
        border: 0.5px solid #000000;
        box-sizing: border-box;
        border-radius: 4px;
      }
    }
    .lineUnder {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
    }

    .circle {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #444;
    }

    .line {
      width: 100%;
      height: 0px;
      background-color: #444;
      border: 3px solid rgba(0, 0, 0, 0.2);
    }
  }
`
const ImageStyle = styled.div`
  height: 1117px;
  width: 467.5px;

  img {
    width: 100%;
    height: 100%;
  }
`

const Vacancies = () => {
  return (
    <>
      <WrapperContainer>
        <VacanciesTopBar />
        <Container>
          <CardInformations>
            <div className='CardInformation'>
              <div className='title width'>
                <p>responsibilities</p>
              </div>
              <ul>
                <li>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </li>
                <li>
                  Amet minim mollit non deserunt ullamco est sit aliquallit.
                </li>
                <li>
                  Amet minim mollit non deserunt ullamco est sit aliquacia
                  consequat duis enim velit mollit.
                </li>
                <li>
                  Amet minim mollit non deserunt ullamco est sit aliquallit.
                </li>
              </ul>
            </div>
            <div className='CardInformation'>
              <div className='title width'>
                <p>responsibilities</p>
              </div>
              <ul>
                <li>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </li>
                <li>
                  Amet minim mollit non deserunt ullamco est sit aliquallit.
                </li>
                <li>
                  Amet minim mollit non deserunt ullamco est sit aliquacia
                  consequat duis enim velit mollit.
                </li>
                <li>
                  Amet minim mollit non deserunt ullamco est sit aliquallit.
                </li>
              </ul>
            </div>
          </CardInformations>
          <FormSection>
            <div className='title'>application form </div>
            <FormInformation>
              <form>
                <div className='formgrop'>
                  <label htmlFor='name'>Full Name</label>
                  <input type='text' />
                </div>
                <div className='formgrop'>
                  <label htmlFor='name'>Date of Birth*</label>
                  <input type='text' />
                </div>
                <div className='formgrop'>
                  <label htmlFor='name'>Gender*</label>
                  <input type='text' />
                </div>
                <div className='formgrop'>
                  <label htmlFor='name'>Current Adress *</label>
                  <input type='text' />
                </div>
                <div className='formgrop'>
                  <label htmlFor='name'>Contact Number *</label>
                  <input type='text' />
                </div>
                <div className='formgrop'>
                  <label htmlFor='name'>Email Address*</label>
                  <input type='text' />
                </div>
                <div className='formgrop'>
                  <label htmlFor='name'>Resume*</label>
                  <input type='text' />
                </div>
                <div className='lineUnder'>
                  <div className='circle'></div>
                  <div className='line'></div>
                </div>
                <div id='textarea'>
                  <label htmlFor='name' className='block'>
                    how did you know about this vacancy?*
                  </label>
                  <textarea type='textarea' />
                </div>
                <div id='textarea'>
                  <label htmlFor='name'>
                    why do you want to join our team?*
                  </label>
                  <textarea type='textarea' />
                </div>
                <div>
                  <button type='submit' className='btn'>
                    Submit
                  </button>
                </div>
              </form>
              <ImageStyle>
                <img src={FormNavigationImg} alt='navigation form ' />
              </ImageStyle>
            </FormInformation>
          </FormSection>
        </Container>
      </WrapperContainer>
    </>
  )
}

export default Vacancies
