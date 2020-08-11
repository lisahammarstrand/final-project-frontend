import styled from 'styled-components'

export const HamburgerIcon = styled.img`
  width: 40px;
  margin-left: 16px;
  border-radius: 4px;
  cursor: pointer;

  @media (min-width: 650px) {
    display: none;
  }
`
export const HamburgerMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #011627;
  color: white;
  width: 150px;
  height: 480px;
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
export const CloseIcon = styled.img`
  position: absolute;
  width: 35px;
  top: 16px;
  left: 16px;
  cursor: pointer;
`
export const HbgNavList = styled.ul`
  position: absolute;
  top: 50px;
  width: 100%;
  list-style: none;
  padding-left: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
export const HbgListItem = styled.li`
  padding: 20px 16px;
  cursor: pointer;

  &:hover {
    background: #20a4f3;
`