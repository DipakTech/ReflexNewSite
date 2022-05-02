import styled from 'styled-components';

export const MemberContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  text-align:center;
`
export const ImageWrapper = styled.div`
  height:250px;
  width:250px;
  /* border-radius:50%; */
  margin-right:40px;

  img{
    height:100%;
    width:100%;
    border:none;
    object-fit:cover;
    border-radius:50%;
    /* margin-top:20px; */
  }
`

export const ContentWrapper = styled.div`
  max-width:350px;

`