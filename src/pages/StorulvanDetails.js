import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { PageContainer, PageBackground, PageOverlay } from 'lib/PageBackground'
import { Title } from 'lib/Title'
import { IconSkis, IconDumbbell } from 'lib/Icons'
import { Button } from 'lib/Buttons'
import { Accordion } from 'components/Accordion'

const StorulvanBackground = styled(PageBackground)`
  background-image: url("skitouring_storulvan.jpeg")
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
            <p>Storulvån lies at the end of the road deep in the mountain realm, as a safe pair of arms at the foot of the mountain. It attracts a wonderful mixture of skiers, people out to enjoy the good life, and experienced mountaineering experts, all through the year. The silence and wide open spaces beckon from right outside the door.
            </p>
            <Accordion
              title="Program"
              content="
              April 1 Arrival & Dinner</br>
              <p>April 2 We head for Getryggen, straight out from the station. This is a perfect tour to start with. 650 altimeter. Level easy.</p>
              <p>April 3 Sönner-Tväråklumpen. Also a close-by tour. 680 altimeter. Level medium.</p>
              <p>April 4 Early braekfast and then heading to Storsnasen for an easy tour before departure. 705 altimeter. Level easy.</p>
              " />
            <Accordion
              title="Accommodation"
              content="We are staying at Storulvån Mountain Station, right by the foot of the house-mountain Getryggen. Full meal plan included." />
            <Accordion
              title="Travel"
              content="Train is recommended. Step aboard the train in Stockholm or Gothenburg at night get off at Enafors the next day. Bus connection to Storulvån. Travel arrangement is not included." />
            <Title>
              <h1>Get ready</h1>
              <IconDumbbell src="dumbbell.svg" alt="dumbbell" />
            </Title>
            <h2>Get the most out of your adventure</h2>
            <p>We want you to have your best possible adventure, and really encourage you to do the workout included. Our activities are not exceptionally tough, but it’s by far more fun when you’re in an ok shape. And – rewards are waiting if you follow through.</p>
            <Accordion
              title="Workout"
              content="
              May 5 Arrival & Dinner</br>
              <p>May 6 With skis strapped to our backpacks, we follow our guide up to the peak of Nordalsfjäll.</p>
              <p>May 7 With the off-piste guide, you will explore the area connected by the lift-system.</p>
              <p>May 8 Try Skitouring Vassitjåkkothe</p>
              <p>May Breakfast & Departure</p>
              " />
            <Link to="/booking">
              <Button title="Book now" />
            </Link>
          </DetailsDescription>
        </DetailsSummary>
      </StorulvanBackground>
    </PageContainer>
  )
}