import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { PageContainer, PageBackground, PageOverlay } from 'lib/PageBackground'
import { DetailsSummary, DetailsDescription } from 'lib/DetailsSummaryDescription'
import { Title } from 'lib/Title'
import { PackageSubTitle } from 'lib/PackageSubTitle'
import { IconSkis, IconDumbbell } from 'lib/Icons'
import { Button, TextButton } from 'lib/Buttons'
import { Accordion } from 'components/Accordion'

const FunasfjallenBackground = styled(PageBackground)`
  background-image: url("skitouring_funasdalen.jpeg")
  `
const BookNowButton = styled(Button)`
  margin-top: 24px;
`
const BackButton = styled(TextButton)`
  padding: 10px 0px;
`
const Links = styled.div`
  align-self: center;
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
            <PackageSubTitle>6 000 SEK</PackageSubTitle>
            <p>To make your way up to the mountain tops with the help of ascension skins
            under your skis and your own strength and energy is an experience that will
            leave you with lifelong memories. The Funäsfjällen area is the perfect arena
            for memorable ski touring adventures.
            </p>
            <Accordion
              title="Program"
              content={
                <>
                  <ul>
                    <li>March 3 Arrival & Welcome</li>
                    <li>March 4 We follow our guide up to the peak of Lill-Skarven and Stor-Skarven.
                    Bonus of waffels at Andersborg.
                    </li>
                    <li>March 5 Explore Hamrafjället and Småhamrarna.</li>
                    <li>March 6 Tour to Norway and the famous Storviglen</li>
                    <li>March 7 Breakfast & Departure</li>
                  </ul>
                </>
              } />
            <Accordion
              title="Accommodation"
              content={
                <>We are staying at Fjällnäs Skilodge beutiful situated amidst the mountains.
                Breakfast included.
                </>
              } />
            <Accordion
              title="Travel"
              content={
                <>
                  <p>Train with bus connection is recommended.
                  Step aboard the train in Stockholm or Gothenburg at night and wake up
                  in Sveg the next day.
                  Bus connection to Funäsdalen. Travel arrangement is not included.
                  </p>
                </>
              } />
            <Title>
              <h1>Get ready</h1>
              <IconDumbbell src="dumbbell.svg" alt="dumbbell" />
            </Title>
            <p>We want you to have your best possible adventure, and really encourage you to
            do the workout included.
            Our activities are not exceptionally tough, but it’s by far more fun when you’re
            in an ok shape. And – rewards are waiting if you follow through.
            </p>
            <p>A full set of completed workouts = 20 times before departure,
            will get you a complimentary dinner at your destination
            <span className="bonus-emoji" role="img" aria-label="dinner-emoji"> 🍽 </span>
              If you manage to do 10 workouts – well not bad.
              You deserve a pair of sunglasses from our partner The Outdoor Company
            <span className="bonus-emoji" role="img" aria-label="sunglass-emoji"> 😎</span>
            Choose your workout difficulty level – Soft, Medium or Tough.
            </p>
            <Accordion
              title="Workout Strength"
              content={
                <>
                  <ul>
                    <li>Air squats – Regular squats but with a light lift of the heels going up</li>
                    <li>Lunges – Switch leg each lunge</li>
                    <li>Plank – Switch between straight arms and forearms</li>
                    <li>Pushups – Regular or on your knees</li>
                  </ul>
                  <ul>
                    <li>Each exercise: Soft & Medium 15 sec, Tough 20 sec</li>
                    <li>Rest: Soft, Medium, Tough 10 sec</li>
                    <li>Rounds: Soft 4, Medium 6, Tough 8</li>
                  </ul>
                </>
              } />
            <Accordion
              title="Workout Cardio"
              content={
                <>
                  <p>Basically any cardio is useful as long as a
                  major part of your muscles are used and the
                  intensity is high enough to increase your
                  heart rate. To prepare your endurance for
                  ski touring find the nearest ski slope or
                  hill and walk up and down. As a reference, Hammarbybacken in Stockholm
                  is 93,5 altimeters. Start with a few turns and increase each time.
                  With or without skis and poles, depending on the season.
                  </p>
                  <p>Each cardio workout minimum: Soft 45 min, Medium 60 min, Tough 75 min</p>
                </>
              } />
            <Links>
              <Link to="/booking">
                <BookNowButton title="Book now" />
              </Link>
              <Link to="/">
                <BackButton title={<><span role="img" aria-label="emoji"> ⬅️</span>All events</>} />
              </Link>
            </Links>
          </DetailsDescription>
        </DetailsSummary>
      </FunasfjallenBackground>
    </PageContainer>
  )
}