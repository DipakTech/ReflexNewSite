import styled from 'styled-components';

// export const FlexWrapper = styled.div`
//   /* display:flex; */
//   /* justify-content:space-between; */
//   padding-top:60px;
//   padding-bottom:80px;
//   width:100%;


// `
export const ContentWrapper = styled.div`
  width: 70%;

  h5 {
    padding-bottom: 36px;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    color: #2aaeff;
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.01em;
    text-transform: capitalize;
  }

  li {
    list-style: none;
  }
  p {
    max-width: 609px;
    text-align: justify;
    margin-bottom: 35px;
  }
`
export const ImageWrapper = styled.div`
align-items:center;
  .imageContainer {
    display:flex;
    align-items:center;
    justify-content:center;
    width: 550px;
    height: 500px;
    background: rgba(196, 196, 196, 0.6);
    border-radius:0 0 0 50%;

    img{
      width:550px;
      height:400px;
    }
  }
`

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  background: #2aaeff;
`
export const ItemStyle = styled.div`

`
