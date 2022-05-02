import styled from 'styled-components';

export const SectionContainer = styled.div`
  width: 100%;
  padding: 0 70px;
`

 const CardsContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(330px,1fr));
   gap: 3rem;
   justify-content:center;
 `
export const Heading = styled.div`
  text-align:center;
`

export default CardsContainer;
