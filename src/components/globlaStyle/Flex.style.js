import styled from 'styled-components'


const Flex = styled.div`
  margin-top:${({mt})=>mt};
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  /* justify-content: space-between; */

  /* .bgColor {
    width:200px;
  } */
  .centerdiv{
    display:grid;
    place-items:center;
  }

  .card {
    width: 370px;
    height: 372.45px;
    background: rgba(42, 174, 255, 0.7);
    border-radius: 16px;

    .imgstyle{
      margin:auto;
      margin:0 auto;
      display:flex;
      margin-top:-100px;

    }

    .positioncontent{
      align-items:center;
    }



  }

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    max-width: 528px;
    text-align: justify;

    color: rgba(0, 0, 0, 0.7);
  }

  & > div,
  & > ul {
    flex: 1;
  }

  p {
    color: #000;
  }
`

export default Flex;