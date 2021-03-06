import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  display: block;
  height: 45px;
  width: auto;
  background: #ff3366;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  transition: 0.5s;
  
  &:hover {
    transform: scale(1.1);
  }
`
const ButtonText = styled.p`
  font-size: 16px;
  font-weight: normal;
  margin: 0;
`
export const Button = ({ title, className }) => {
  return (
    <StyledButton className={className}>
      {title && <ButtonText>{title}</ButtonText>}
    </StyledButton>
  )
}

export const OutlinedButton = styled(Button)`
  background: transparent;
  color: white;
  border: 2px solid #ff3366;

  &:hover {
    transform: scale(1.1);
  }
`
export const TextButton = styled(Button)`
  background: transparent;
  color: white;
  border: none;

  &:hover {
    transform: scale(1.1);
  }
`