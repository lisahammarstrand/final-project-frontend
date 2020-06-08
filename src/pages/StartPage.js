import React from 'react'
import styled from 'styled-components'
import { PackageCard } from 'components/PackageCard'

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
  margin-left: 32px;
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
    /*  <div>StartPage</div> */
    <StartPageWrapper>
      <>
        <IntroSection>
          <IntroTitle>
            <h1>Intro title</h1>
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
      </>
    </StartPageWrapper >
  )
}