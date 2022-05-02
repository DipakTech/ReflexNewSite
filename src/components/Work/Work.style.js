import styled from 'styled-components';

export const SectionBg = styled.div`
position:absolute;
top:0;
z-index:-1;

img{
  width:100vw;
}

`

export const WorkStyleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 3rem;
  justify-content: center;
  margin-bottom: 20px;

  .singleCard {
    background-color: #fff;
    box-shadow: 0px 4px 7px 2px rgba(0, 0, 0, 0.25);
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* text-align: center; */

    h4 {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 27px;
      letter-spacing: 0.01em;
      text-transform: capitalize;
      color: #2aaeff;
      text-align:center;
      margin-top:16px;
    }

    aside {
      display: flex;
      flex-direction: column;

      p {
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.01em;
        text-transform: capitalize;
        color: #2aaeff;
      }

      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        li {
          a {
            img {
              margin-right: 8px;
              height: 30px;
              width: 30px;
            }
            span {
              font-size: 16px;
              opacity: 0.7;
              font-weight: 500;
              line-height: 24px;
              letter-spacing: 0.01em;
              color: rgba(0, 0, 0, 0.7);
            }
          }
        }
      }
    }

    .imgDiv {
      margin: 0 auto;
      width: 250px;
      height: 175px;
      border: 1px solid #2aaeff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #bodyContant {
      text-align: justify;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      text-align: justify;
      letter-spacing: 0.01em;
      text-transform: capitalize;
      color: rgba(0, 0, 0, 0.9);
    }
  }
`
export const BtnStyle = styled.ul`
margin-top:9px;
  width: 90%;
  display: flex;
  justify-content: space-between;

  li {
    .btn {
      background: #000000;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 4px;
      padding: 7px 10px;
    }
  }
`
