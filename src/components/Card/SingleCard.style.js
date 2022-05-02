import styled from 'styled-components';

export const CardWrapper = styled.div`
height:200px;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;

`

const SingleCard = styled.div`
  width: 200px;
  height: 120px;
  background: rgba(7, 113, 186, 0.15);
  border-radius: 500px;
  /* height: 120px; */
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    height:80px;
    width:80px;
  }
`
export default SingleCard;