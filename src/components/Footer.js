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
const FooterImage = styled.img`
  width: 20px;
  height: auto;
`

export const Footer = () => {
  return (
    <FooterContainer>
      <p>LHP 2020</p>
      <div>
        <FooterLink href="">Contact</FooterLink>
        <FooterLink href=""><FooterImage src="facebook-f.svg" /></FooterLink>
        <FooterLink href=""><FooterImage src="instagram.svg" /></FooterLink>
      </div>
    </FooterContainer>
  )
}

