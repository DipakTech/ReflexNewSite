import styled from 'styled-components';

export const ContactContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  padding-top:30px;
`
export const FormWrapper = styled.div`
  display:flex;

`

export const Form = styled.form`
/* position:relative; */

`

export const FormGroup = styled.div`
  margin-bottom: 32px;
  /* width: 100%; */
  display: flex;
  justify-content: space-between;

  article {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
  label {
    font-size: 1.125rem;
    width: 150px;
  }
  input {
    width: 25rem;
    height: 40px;
    background: #fafafa;
    border: 0.5px solid #000000;
    box-sizing: border-box;
    border-radius: 4px;
    position: relative;
  }
  textarea {
    width: 25rem;
    height: 200px;
    background: #fafafa;
    border: 0.5px solid #000000;
    box-sizing: border-box;
    border-radius: 4px;
  }

  button {
    color: #fff;
    background-color: #2aaeff;
    border-radius: 4px;
    padding: 10px 38px;
    border: transparent;
    cursor: pointer;
  }
`


export const MapContainer = styled.div`
/* margin-top:20px; */
  margin-left:90px;
  width: 530px;
  height: 530px;
  background-color:#444;
  border: 1px solid #444;
  box-sizing: border-box;
`