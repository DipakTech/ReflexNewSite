import React from 'react'
import styled from 'styled-components'

const ErrorMessageStyle = styled.div`
  padding: 2px 20px;
  position: absolute;
  width: 233px;
  height: 25px;
  z-index: 3;
  /* background: #d00000; */
  border-radius: 4px;
`

const ErrorMessage = ({ message }) => {
  return <ErrorMessageStyle>{message}</ErrorMessageStyle>
}

export default ErrorMessage
