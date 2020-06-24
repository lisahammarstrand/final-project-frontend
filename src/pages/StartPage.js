import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Title } from 'lib/Title'
import { IconSkis, IconDumbbell } from 'lib/Icons'
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
const IconDumbbellStart = styled(IconDumbbell)`
  margin: 0px;
`
const ReadMoreText = styled.div`
  margin: 0px 16px;
  background-color: transparent;
  color: white;
  border: none;
  outline: none;
  margin: 0px;

  @media (min-width: 650px) {
    max-width: 620px;
  }
`
const IntroDescription = styled.section`
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
const MoreText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 350px;
  margin: 0px;
  animation: showContent 1s forwards;
  transition: ease-out;

  @keyframes showContent {
    0% {height: 0px;}
    100% {height: auto;}
  }
  @media (min-width: 650px) {
    max-width: 620px;
  }
`
const PackageCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: auto;
  margin-bottom: 50px;

  @media (min-width: 650px) {
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 800px;
  }
`
export const StartPage = () => {
  const [showText, setShowText] = useState(false)

  return (
    <StartPageWrapper>
      <StartPageOverlay />
      <IntroSection>
        <Title>
          <h1>Solid adventures</h1>
          <IconSkis src="skis.svg" alt="skis" />
          <IconDumbbellStart src="dumbbell.svg" alt="dumbbell" />
        </Title>
        <IntroDescription>
          <ReadMoreText onClick={() => setShowText(!showText)}>
            <p>Great that you’re here! We want to offer you the opportunity
            to explore some unique skiing in the Swedish mountains.
            Four destinations, chosen for their reliable snow conditions and excellent skiing in
            authentic settings. Read more
            </p>
          </ReadMoreText>
          <MoreText>
            {showText &&
              <div>
                <p>Our philosophy is pretty simple, the more prepared you are, the more you will
                enjoy the adventure. That is why we encourage you to get your strength and
                cardio in shape, starting the very minute you make your reservation.
                You’ll be rewarded with a small bonus and most important – a more solid adventure!
                </p>
              </div>}
          </MoreText>
        </IntroDescription>
      </IntroSection>
      <PackageCardContainer>
        <Link to="/riksgransen">
          <PackageCard
            background="skitouring_2.jpeg"
            title="Riksgränsen"
            dumbbell1="dumbbell.svg"
            alt="dumbbell"
            dumbbell2="dumbbell.svg"
            date="May 5–9 2021"
            subtitle="Off-Piste" />
        </Link>
        <Link to="/funasfjallen">
          <PackageCard
            background="skitouring_funasdalen.jpeg"
            title="Funäsfjällen"
            dumbbell1="dumbbell.svg"
            alt="dumbbell"
            date="March 3–7 2021"
            subtitle="Skitouring" />
        </Link>
        <Link to="/storulvan">
          <PackageCard
            background="skitouring_storulvan.jpeg"
            title="Storulvån"
            dumbbell1="dumbbell.svg"
            alt="dumbbell"
            date="April 1–4 2021"
            subtitle="Skitouring" />
        </Link>
        <Link to="/kittelfjall">
          <PackageCard
            background="skitouring_gen.jpeg"
            title="Kittelfjäll"
            dumbbell1="dumbbell.svg"
            alt="dumbbell"
            dumbbell2="dumbbell.svg"
            date="April 7–11 2021"
            subtitle="Skitouring" />
        </Link>
      </PackageCardContainer>
    </StartPageWrapper>
  )
}