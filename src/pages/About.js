import React from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import { PageContainer, PageBackground, PageOverlay } from 'lib/PageBackground'
import { Title } from 'lib/Title'

const AboutSection = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  margin: 16px;
  z-index: 1;
`
const AboutDescription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 350px;
  margin: 0px 16px;

  @media (min-width: 650px) {
    max-width: 620px;
  }
`
export const About = () => {
  return (
    <PageContainer>
      <PageOverlay />
      <PageBackground>
        <AboutSection>
          <Title><h1>About this page</h1></Title>
          <AboutDescription>
            <p>slhdvhnv skvdös öljmsvös mdvöks mlsövjs öjsödjv ösvös</p>
          </AboutDescription>
        </AboutSection>
      </PageBackground>
    </PageContainer>
  )
}