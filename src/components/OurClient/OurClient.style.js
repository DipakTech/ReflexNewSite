import styled from 'styled-components';

export const ClientContainer = styled.div`
  text-align: center;
  display:flex;
  flex-direction:column;

  h5{
    margin-bottom:100px;
  }

  .firstRow {
    margin-top:-100px;
    display: flex;
    align-items: center;
    justify-content: space-between;

  }
  .secondRow {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

  }
  .item{
    height:150px;
    width:150px;

    img{
      height:100%;
      width:100%;
    }
  }
`