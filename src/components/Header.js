import React, { useState } from 'react'
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
  cursor: pointer;

  @media (min-width: 650px) {
    display: none;
  }
`
const HamburgerMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #011627;
  color: white;
  width: 150px;
  height: 250px;
  padding: 0px;
  text-align: left;
  position: absolute;
  border-radius: 0px 0px 6px 0px;
  top: 0;
  left: 0;
  animation: showMenu 1s forwards;
  transition: transfrom 0.3s ease-in-out;
  z-index: 10;
  
  @keyframes showMenu {
    0% {width: 0px;}
    100% {width: 200px;}
  }
  
  &:active {
  visibility: visible;
  }

  @media (min-width: 650px) {
    display: none;
  }
`
const CloseIcon = styled.img`
  position: absolute;
  width: 35px;
  top: 16px;
  left: 16px;
  cursor: pointer;
`
const HbgNavList = styled.ul`
  position: absolute;
  top: 50px;
  width: 100%;
  list-style: none;
  padding-left: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const HbgListItem = styled.li`
  padding: 20px;
  cursor: pointer;

  &:hover {
    background: #20a4f3;
`

const HeaderImage = styled.img`
  width: 50px;
  margin-left: 16px;
`

const Navbar = styled.nav`
  display: none;

  @media (min-width: 650px) {
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
  const [openHamburger, setOpenHamburger] = useState(false)

  return (
    <>
      <HeaderContainer>
        <div>
          <HamburgerIcon
            src="hamburger_menu.svg"
            alt="hamburger_menu"
            onClick={() => setOpenHamburger(!openHamburger)} />
          <Link to="/">
            <HeaderImage src="logo_mountains.png" alt="logo_mountains" />
          </Link>
          <div>
            {openHamburger &&
              <HamburgerMenu>
                <CloseIcon
                  src="close_icon.svg"
                  alt="close-button"
                  onClick={() => setOpenHamburger(!openHamburger)} />
                <HbgNavList>
                  <Link to="/" exact>
                    <HbgListItem>All adventures</HbgListItem>
                  </Link>
                  <Link to="/booking" exact>
                    <HbgListItem>Book now</HbgListItem>
                  </Link>
                  <Link to="/about" exact>
                    <HbgListItem>About</HbgListItem>
                  </Link>
                </HbgNavList>
              </HamburgerMenu>}
          </div>
        </div>
        <Navbar>
          <Link to="/" exact>
            <span className="nav">All adventures</span>
          </Link>
          <Link to="/booking" exact>
            <span className="nav">Book now</span>
          </Link>
          <Link to="/about" exact>
            <span className="nav">About</span>
          </Link>
        </Navbar>
        <Link to="/login">
          <SignInButton title="Sign in" />
        </Link>

      </HeaderContainer>
    </>
  )
}
