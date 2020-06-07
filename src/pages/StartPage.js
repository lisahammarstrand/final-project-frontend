import React from 'react'
import styled from 'styled-components'
import { PackageCard } from 'components/PackageCard'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'

const StartPageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: auto;
`
const IntroSection = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  margin: 0px 16px;
`
const IntroTitle = styled.div`
display: flex;
`
const IconDumbbell = styled.img`
  width: 40px;
  transform: rotate(-50deg);
`
const IconAdventure = styled.img`
  width: 40px;
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
    /*  <div>StartPage</div> */
    <StartPageWrapper>
      <>
        <Header />
        <IntroSection>
          <IntroTitle>
            <h1>Intro title</h1>
            <IconAdventure src="adventure.svg" alt="adventure" />
            <IconDumbbell src="dumbbell.svg" alt="dumbbell" />
          </IntroTitle>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo erat, lacinia et nulla id, dapibus tristique orci. Etiam non tellus ante. Sed scelerisque mattis augue, sed bibendum elit aliquet nec. Praesent non scelerisque lectus, accumsan viverra ante</p>
        </IntroSection>
        <PackageCardContainer>
          <PackageCard title="Backcountry Skiing" subtitle="in Riksgränsen" />
          <PackageCard title="Backcountry Skiing" subtitle="in Riksgränsen" />
          <PackageCard title="Backcountry Skiing" subtitle="in Riksgränsen" />
          <PackageCard title="Backcountry Skiing" subtitle="in Riksgränsen" />
        </PackageCardContainer>
        <Footer />
      </>
    </StartPageWrapper >
  )
}