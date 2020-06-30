import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledHbgMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #011627;
  color: white;
  transform: ${({ open }) => open ? 'translateX(0' : 'translateX(-100%)'};
  width: 200px;
  height: 250px;
  padding: 2rem;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  transition: transfrom 0.3s ease-in-out

  &:hover {
    background: #20a4f3;
  }

  @media (min-width: 650px) {
    display: none;
  }

`

export const HamburgerMenu = ({ open }) => {
  return (
    <StyledHbgMenu open={open}>
      <Link to="/" exact>
        <span className="nav">All adventures</span>
      </Link>
      <Link to="/booking" exact>
        <span className="nav">Book now</span>
      </Link>
      <Link to="/about" exact>
        <span className="nav">About</span>
      </Link>
    </StyledHbgMenu>
  )
}