import React from 'react'
import { Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import { OutlinedButton } from 'lib/Buttons'

const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0px;
  border-bottom: 1px solid white;
`
const HeaderTitle = styled.h1`
  font-size: 20px;
  color: #f6f7f8;
`
const HeaderImage = styled.img`
  width: 50px;
  margin-left: 16px;
`

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <HeaderImage src="logo_mountains.png" alt="logo_mountains" />
        </Link>
        <HeaderTitle>TITLE OF THIS PAGE</HeaderTitle>
        <Link to="/login">
          <OutlinedButton title="My page" />
        </Link>
      </HeaderContainer>
      <Route path="/package">
        <Link className="back-link" to="/">
          {/*  <i className="fas fa-arrow-circle-left"></i> */}
           ⬅️All packages
        </Link>
      </Route>
    </>
  )
}

