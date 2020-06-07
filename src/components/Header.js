import React from 'react'
import styled from 'styled-components'
import { OutlinedButton } from 'lib/Buttons'

const HeaderContainer = styled.header`
  position: relative;
  width: 95%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 16px;
  margin-left: 16px;
  border-bottom: 2px solid white;
`
const HeaderTitle = styled.h1`
  font-size: 20px;
`
const HeaderImage = styled.img`
  width: 50px;
`
const SignUpButton = styled.button`
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

&:hover {
  background: transparent;
  border: 2px solid #ff3366;
}
`


export const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <HeaderImage src="logo_mountains.png" alt="logo_mountains" />
      <HeaderTitle>TITLE OF THIS PAGE</HeaderTitle>
      <OutlinedButton title="My page" />
    </HeaderContainer>
  )
}

