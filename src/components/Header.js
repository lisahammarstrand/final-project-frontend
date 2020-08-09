import React, { useState, useRef, useEffect } from 'react'
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
  cursor: pointer;

  @media (min-width: 650px) {
    height: 60px;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    padding: 10px;
  }
`
const EventsDropDown = styled.div`
  position: absolute;
  top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #011627;
  color: white;
  width: 150px;
  height: 255px;
  padding: 0px;
  text-align: left;
  border-radius: 0px 0px 4px 4px;
  animation: showMenu 1s forwards;
  transition: transfrom 0.3s ease-out;
  z-index: 10;
  
  @keyframes showMenu {
    0% {height: 0px;}
    100% {height: 255px;}
  }
  
  &:active {
    visibility: visible;
  }
`
const EventsNavList = styled.ul`
  position: absolute;
  top: 0px;
  width: 150px;
  height: 255px;
  margin: 0px;
  list-style: none;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-around; 
`
const EventsListItem = styled.li`
  padding: 16px;
  cursor: pointer;

  &:hover {
    background: #20a4f3;
`
const SignInButton = styled(OutlinedButton)`
  margin-right: 16px; 
  margin-bottom: 0px;
`

export const Header = () => {
  const [openHamburger, setOpenHamburger] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(false)
  const node = useRef(null)

  useEffect(() => {
    const HandleClickOutside = e => {
      if (node.current !== null && !node.current.contains(e.target)) {
        setOpenDropdown(!openDropdown)
      }
    }
    if (openDropdown) {
      window.addEventListener('click', HandleClickOutside)
    }
    return () => {
      window.removeEventListener('click', HandleClickOutside)
    }
  }, [openDropdown])

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
                    <HbgListItem
                      onClick={() => setOpenHamburger(false)}>All events/Start</HbgListItem>
                  </Link>
                  <Link to="/booking" exact>
                    <HbgListItem
                      onClick={() => setOpenHamburger(false)}>Book now</HbgListItem>
                  </Link>
                  <Link to="/about" exact>
                    <HbgListItem
                      onClick={() => setOpenHamburger(false)}>About</HbgListItem>
                  </Link>
                </HbgNavList>
              </HamburgerMenu>}
          </div>
        </div>
        <Navbar>
          <div>
            <div
              className="nav"
              onClick={() => setOpenDropdown(!openDropdown)}>
              Events</div>
            {openDropdown &&
              <EventsDropDown ref={node}>
                <EventsNavList>
                  <Link to="/riksgransen" exact>
                    <EventsListItem
                      onClick={() => setOpenDropdown(false)}>Riksgränsen</EventsListItem>
                  </Link>
                  <Link to="/funasfjallen" exact>
                    <EventsListItem
                      onClick={() => setOpenDropdown(false)}>Funäsfjällen</EventsListItem>
                  </Link>
                  <Link to="/storulvan" exact>
                    <EventsListItem
                      onClick={() => setOpenDropdown(false)}>Storulvån</EventsListItem>
                  </Link>
                  <Link to="/kittelfjall" exact>
                    <EventsListItem
                      onClick={() => setOpenDropdown(false)}>Kittelfjäll</EventsListItem>
                  </Link>
                  <Link to="/" exact>
                    <EventsListItem
                      onClick={() => setOpenDropdown(false)}>All events/Start</EventsListItem>
                  </Link>
                </EventsNavList>
              </EventsDropDown>}
          </div>
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
