import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  display: block;
  height: 45px;
  width: auto;
  background: #ff3366;
  color: white;
  border: 2px solid white;
  border-radius: 6px;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  position: absolute;
  bottom: 24px;
  align-self: center;
  
  &:hover {
    background: transparent;
    border: 2px solid #ff3366;
  }
`;

const ButtonText = styled.p`
  font-size: 18px;
  font-weight: normal;
  margin: 0;
`;

export const Button = ({ title, className }) => {
  return (
    <StyledButton className={className}>
      {title && <ButtonText>{title}</ButtonText>}
    </StyledButton>
  );
};

export const OutlinedButton = styled(Button)`
  background: transparent;
  color: white;
  border: 2px solid #ff3366;

  &:hover {
    background: #ff3366;
    border: 2px solid white;
  }
`;

export const TextButton = styled(Button)`
  background: transparent;
  color: white;
  border: none;

  &:hover {
    background: #ff3366;
  }
`;