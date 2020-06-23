import React from 'react'
import { Link } from 'react-router-dom'
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
const HamburgerIcon = styled.img`
  width: 40px;
  margin-left: 16px;
  border-radius: 4px;

  @media (min-width: 768px) {
    display: none;
  }
`
const HeaderImage = styled.img`
  width: 50px;
  margin-left: 16px;
`
const Navbar = styled.nav`
  display: none;

  @media (min-width: 768px) {
    height: 60px;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    padding: 10px;
  }
`
const SignInButton = styled(OutlinedButton)`
  margin-right: 16px; 
  margin-bottom: 0px;
`

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <div>
          <HamburgerIcon src="hamburger_menu.svg" alt="hamburger_menu" />
          <Link to="/">
            <HeaderImage src="logo_mountains.png" alt="logo_mountains" />
          </Link>
        </div>
        <Navbar>
          <Link to="/" exact>
            <span className="nav">All adventures</span>
          </Link>
          <Link to="/booking" exact>
            <span className="nav">Book now</span>
          </Link>
        </Navbar>
        <Link to="/login">
          <SignInButton title="Sign in" />
        </Link>
      </HeaderContainer>
      {/* <Route path="/riksgransen">
        <Link className="back-link" to="/">
          ⬅️All adventures
        </Link>
      </Route> */}
    </>
  )
}
