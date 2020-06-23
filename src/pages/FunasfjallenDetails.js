import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { PageContainer, PageBackground, PageOverlay } from 'lib/PageBackground'
import { Title } from 'lib/Title'
import { IconSkis, IconDumbbell } from 'lib/Icons'
import { Button } from 'lib/Buttons'
import { Accordion } from 'components/Accordion'

const FunasfjallenBackground = styled(PageBackground)`
  background-image: url("skitouring_funasdalen.jpeg")
  `

const DetailsSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; 
  padding: 50px;
  z-index: 1;

  @media (min-width: 650px) {
    flex-direction: row;
  }
`
const DetailsDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-start;
    width: 90%;
  }
  @media (min-width: 1024px) {
    align-items: flex-start;
    max-width: 800px;
  }
`
const PackageSubTitle = styled.h2`
  display: inline-block;
  font-size: 20px;
  font-weight: normal;
  padding: 0px 32px;
  background: #011627;
  color: white;
`
const BookNowButton = styled(Button)`
  margin-top: 24px;
`
export const FunasfjallenDetails = () => {
  return (
    <PageContainer>
      <PageOverlay />
      <FunasfjallenBackground>
        <DetailsSummary>
          <DetailsDescription>
            <Title>
              <h1>Funäsfjällen Skitouring</h1>
              <IconSkis src="skis.svg" alt="skis" />
            </Title>
            <PackageSubTitle>March 3–7 2021</PackageSubTitle>
            <PackageSubTitle>7 000 SEK</PackageSubTitle>
            <p>Having the Northern Arctic Ocean as a snow-blower, it is no surprise that Riksgränsen is reputed to provide among the best skiing in Sweden.
            The area provides plenty of easy accessible off-piste, like Nordalsfjäll where the Scandinavian Big Mountain Championships are held every year.
            </p>
            <Accordion
              title="Program"
              content={<>
                <ul>
                  <li>March 3 Arrival & Dinner</li>
                  <li>March 4 We follow our guide up to the peak of Lill-Skarven and Stor-Skarven. Bonus of waffels at Andersborg.</li>
                  <li>March 5 Explore Hamrafjället and Småhamrarna.</li>
                  <li>March 6 Tour to Norway</li>
                  <li>March 7 Breakfast & Departure</li>
                </ul></>}
            />
            <Accordion
              title="Accommodation"
              content={<>We are staying at Fjällnäs Skilodge beutiful situated amidst the mountains. Full meal plan included.</>} />
            <Accordion
              title="Travel"
              content={<><p>Train with bus connection is recommended. Step aboard the train in Stockholm or Gothenburg at night and wake up in Sveg the next day. Bus connection to Funäsdalen. Travel arrangement is not included.</p></>} />
            <Title>
              <h1>Get ready</h1>
              <IconDumbbell src="dumbbell.svg" alt="dumbbell" />
            </Title>
            <p>We want you to have your best possible adventure, and really encourage you to do the workout included. Our activities are not exceptionally tough, but it’s by far more fun when you’re in an ok shape. And – rewards are waiting if you follow through.</p>
            <p>A full set of completed workouts = 20 times before departure, will get you sunglasses <span role="img" aria-label="emoji">😎</span>from our partner The Outdoor Company, and a goodie bag with power bars. If you manage to do 10 workouts – well not bad. You deserve a goodie bag with power bars.</p>
            <Accordion
              title="Workout"
              content={<> <h2>STRENGTH</h2>
                <ul>
                  <li>Air squats – Regular squats but with a light lift of the heels going up</li>
                  <li>Lunges – Switch lega each lunge</li>
                  <li>Plank – Switch between straight arms and forearms</li>
                  <li>Pushups – Regular or on your knees</li>
                </ul>
                <ul>
                  <li>Each excersize: 20 seconds</li>
                  <li>Rest: 10 seconds</li>
                  <li>Rounds: 8</li>
                </ul>
                <h2>CARDIO</h2>
                <p>Basically any cardio is useful as long as a major part of your muscles are used and the intensity is high enough to increase your heart rate. To prepare your endurance for ski touring find the nearest ski slope or hill and walk up and down. As a reference, Hammarbybacken in Stockholm is 93,5 altimeters. Start with a few turns and increase each time. With or without skis.</p>
                <p>Each cardio workout: min 1 hour</p>
              </>} />
            <Link to="/booking">
              <BookNowButton title="Book now" />
            </Link>
          </DetailsDescription>
        </DetailsSummary>
      </FunasfjallenBackground>
    </PageContainer>
  )
}