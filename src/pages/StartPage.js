import React from 'react'
import styled from 'styled-components'
import { PackageCard } from 'components/PackageCard'

const StartPageWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-image: url("skitouring_2.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
`
const StartPageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(1,23,39,0.3);
  z-index: 0;
  `
const IntroSection = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  margin: 16px;
  z-index: 1;
`
const IntroTitle = styled.div`
display: flex;
background: #011627;
padding: 5px 32px;
margin: 16px 0px;
`

const IconSkis = styled.img`
  width: 40px;
  margin: 0px 5px 0px 16px;
`
const IconDumbbell = styled.img`
  width: 40px;
  margin: 0px;
  transform: rotate(-50deg);
`
const IconAdventure = styled.img`
  width: 40px;
`
const IntroDescription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 350px;
  margin: 0px 16px;

  @media (min-width: 650px) {
    flex-direction: row;
    max-width: 620px;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    max-width: 90%;
  }

`
const ProgressImage = styled.img`
  width: 150px;
`
const PackageCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: auto;

  @media (min-width: 650px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`
export const StartPage = () => {
  return (
    <StartPageWrapper>
      <StartPageOverlay />
      <IntroSection>
        <IntroTitle>
          <h1>Intro title Lorem ipsum</h1>
          <IconSkis src="skis.svg" alt="skis" />
          {/*  <IconAdventure src="adventure.svg" alt="adventure" /> */}
          <IconDumbbell src="dumbbell.svg" alt="dumbbell" />
        </IntroTitle>
        <IntroDescription>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo erat, lacinia et nulla id, dapibus tristique orci. Etiam non tellus ante. Sed scelerisque mattis augue, sed bibendum elit aliquet nec. Praesent non scelerisque lectus, accumsan viverra ante</p>
          {/*  <ProgressImage src="progress_levels.png" alt="progress-levels" /> */}
        </IntroDescription>
      </IntroSection>
      <PackageCardContainer>
        <PackageCard title="Backcountry Skiing" subtitle="in Riksgränsen" />
        <PackageCard title="Backcountry Skiing" subtitle="in Riksgränsen" />
        <PackageCard title="Backcountry Skiing" subtitle="in Riksgränsen" />
        <PackageCard title="Backcountry Skiing" subtitle="in Riksgränsen" />
      </PackageCardContainer>
    </StartPageWrapper>
  )
}