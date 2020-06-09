import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  height: 90px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color:  #f6f7f8;
  padding: 0 16px;
  border-top: 1px solid #f6f7f8;
`
const FooterLink = styled.a`
  text-decoration: none;
  color: #f6f7f8;
  margin-left: 16px;
`

export const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; LHP 2020</p>
      <div>
        <FooterLink href="contact">Contact</FooterLink>
        <FooterLink href="about">About</FooterLink>
        <FooterLink href="facebook">FB</FooterLink>
        <FooterLink href="instagram">Insta</FooterLink>
      </div>
    </FooterContainer>
  )
}

