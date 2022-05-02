import styled from 'styled-components'

export const HeroSection = styled.section`
padding:0 0 0 5vw;
`
export const ProcessSection = styled.section`

`

export const HeroImage = styled.div`
  background-image: url(${(props) => props.imageUrl});
  display:grid;
  place-items:center;
  background-repeat:no-repeat;
  margin-left:110px;
`

export const MainStyle = styled.main`
  .join-us {
    background: rgba(42, 174, 255, 0.6);
    padding: 74px;

    h5 {
      font-weight: 700;
      font-size: 32px;
      line-height: 48px;
      /* identical to box height */

      letter-spacing: 0.01em;
      text-transform: capitalize;

      color: #000000;
    }
    .process {
      height: 200px;
    }
  }
`
