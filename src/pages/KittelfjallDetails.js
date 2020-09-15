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

const KittelfjallBackground = styled(PageBackground)`
  background-image: url("skitouring_gen.jpeg")
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
export const KittelfjallDetails = () => {
  return (
    <PageContainer>
      <PageOverlay />
      <KittelfjallBackground>
        <DetailsSummary>
          <DetailsDescription>
            <Title>
              <h1>Kittelfjäll Skitouring</h1>
              <IconSkis src="skis.svg" alt="skis" />
            </Title>
            <PackageSubTitle>April 7–11 2021</PackageSubTitle>
            <PackageSubTitle>8 000 SEK</PackageSubTitle>
            <p>Situated far east in the Lappland mountains, Kittelfjäll gets enormous
            dumps of dry inland snow.
            This mythical area has probably the most powder days in Scandinavia,
            and attracts skiers who seek the wild and unexploited.
            </p>
            <Accordion
              title="Program"
              content={
                <>
                  <ul>
                    <li>April 7 Arrival & Welcome</li>
                    <li>April 8 Two classic tours – Sadeln and Norgesvängen.
                    </li>
                    <li>April 9 Tour to Daune, a beautiful and quite mountain
                    offering birch forrest skiing.
                    </li>
                    <li>April 10 Borkafjäll with it&apos;s impressive vertical rock wall.
                    Beautiful run down towards Lake Borka.
                    </li>
                    <li>April 11 Breakfast & Departure</li>
                  </ul>
                </>
              } />
            <Accordion
              title="Accommodation"
              content={
                <>
                  <p>We are staying at Hotell Kittelfjäll, right by the foot of the mountain.
                  Breakfast included.
                  </p>
                </>
              } />
            <Accordion
              title="Travel"
              content={
                <>
                  <p>Train with bus connection is recommended. Step aboard the train in Stockholm or
                  Gothenburg at night and wake up in Vilhelmina the next day.
                  Bus connection to Kittelfjäll. Travel arrangement is not included.
                  </p>
                </>
              } />
            <Title>
              <h1>Get ready</h1>
              <IconDumbbell src="dumbbell.svg" alt="dumbbell" />
            </Title>
            <h2>Get the most out of your adventure</h2>
            <p>We want you to have your best possible adventure,
            and really encourage you to do the workout included. Our activities are not
            exceptionally tough, but it’s by far more fun when you’re in an ok shape.
            And – rewards are waiting if you follow through.
            </p>
            <p>A full set of completed workouts = 20 times before departure,
            will get you a complimentary dinner at your destination
            <span className="bonus-emoji" role="img" aria-label="emoji"> 🍽 </span>
              If you manage to do 10 workouts – well not bad.
              You deserve a pair of sunglasses from our partner The Outdoor Company
            <span className="bonus-emoji" role="img" aria-label="emoji"> 😎</span>
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
      </KittelfjallBackground>
    </PageContainer>
  )
}