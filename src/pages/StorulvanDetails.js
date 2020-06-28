import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { PageContainer, PageBackground, PageOverlay } from 'lib/PageBackground'
import { Title } from 'lib/Title'
import { IconSkis, IconDumbbell } from 'lib/Icons'
import { Button, TextButton } from 'lib/Buttons'
import { Accordion } from 'components/Accordion'

const StorulvanBackground = styled(PageBackground)`
  background-image: url("skitouring_storulvan.jpeg")
  `

const DetailsSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  padding: 24px;
  z-index: 1;

  @media (min-width: 650px) {
    flex-direction: row;
    align-items: flex-start; 
  }
`
const DetailsDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 650px) {
    align-items: flex-start;
    max-width: 620px;
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
const BackButton = styled(TextButton)`
  padding: 10px 0px;
`
export const StorulvanDetails = () => {
  return (
    <PageContainer>
      <PageOverlay />
      <StorulvanBackground>
        <DetailsSummary>
          <DetailsDescription>
            <Title>
              <h1>Storulvån Skitouring</h1>
              <IconSkis src="skis.svg" alt="skis" />
            </Title>
            <PackageSubTitle>April 1–4 2021</PackageSubTitle>
            <PackageSubTitle>6 000 SEK</PackageSubTitle>
            <p>Storulvån lies at the end of the road deep in the mountain realm,
            as a safe pair of arms at the foot of the mountain.
            It attracts a wonderful mixture of skiers, people out to enjoy the good life,
            and experienced mountaineering experts, all through the year.
            The silence and wide open spaces beckon from right outside the door.
            </p>
            <Accordion
              title="Program"
              content={
                <>
                  <ul>
                    <li>April 1 Arrival & Dinner
                    </li>
                    <li>April 2 We head for Getryggen, straight out from the station.
                    This is a perfect tour to start with. 650 altimeter. Level easy.
                    </li>
                    <li>April 3 Sönner-Tväråklumpen.
                    Also a close-by tour. 680 altimeter. Level medium.
                    </li>
                    <li>April 4 Early braekfast and then heading to Storsnasen
                    for an easy tour before departure. 705 altimeter. Level easy.
                    </li>
                  </ul>
                </>
              } />
            <Accordion
              title="Accommodation"
              content={
                <>
                  <p>We are staying at Storulvån Mountain Station,
                  right by the foot of the house-mountain Getryggen. Full meal plan included.
                  </p>
                </>
              } />
            <Accordion
              title="Travel"
              content={
                <>
                  <p>Train is recommended. Step aboard the train in Stockholm or
                  Gothenburg at night get off at
                  Enafors the next day. Bus connection to Storulvån.
                  Travel arrangement is not included.
                  </p>
                </>
              } />
            <Title>
              <h1>Get ready</h1>
              <IconDumbbell src="dumbbell.svg" alt="dumbbell" />
            </Title>
            <h2>Get the most out of your adventure</h2>
            <p>We want you to have your best possible adventure,
            and really encourage you to do the workout included.
            Our activities are not exceptionally tough, but it’s by far
            more fun when you’re in an ok shape. And – rewards are waiting
            if you follow through.
            </p>
            <p>A full set of completed workouts = 20 times before departure,
            will get you a complimentary dinner at your destination <span role="img" aria-label="emoji"> 🍽</span>
              If you manage to do 10 workouts – well not bad.
              You deserve a pair of sunglasses from our partner The Outdoor Company
            <span role="img" aria-label="emoji"> 😎</span>
            </p>
            <Accordion
              title="Workout Strength"
              content={
                <>
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
                  With or without skis.
                  </p>
                  <p>Each cardio workout: min 1 hour</p>
                </>
              } />
            <Link to="/booking">
              <BookNowButton title="Book now" />
            </Link>
            <Link to="/">
              <BackButton title={<><span role="img" aria-label="emoji"> ⬅️</span>All adventures</>} />
            </Link>
          </DetailsDescription>
        </DetailsSummary>
      </StorulvanBackground>
    </PageContainer>
  )
}