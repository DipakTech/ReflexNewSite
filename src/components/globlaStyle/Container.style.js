import styled from 'styled-components';

export const WrapperContainer = styled.div`
  width: 100vw;
  background: ${({ Bgcolor }) => Bgcolor};
  padding:${({padding})=>padding} 0;
  height:${({ height }) => height};
  position:relative;
`

export const Container = styled.div`
padding:0 5vw;
position:relative;
background-color:${({ background }) => background};

`