import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { PageContainer, PageBackground, PageOverlay } from 'lib/PageBackground'
import { Title } from 'lib/Title'
import { IconSkis, IconDumbbell } from 'lib/Icons'
import { Button } from 'lib/Buttons'
import { Accordion } from 'components/Accordion'

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

export const PackageDetails = () => {
  return (
    <PageContainer>
      <PageOverlay />
      <PageBackground>
        <DetailsSummary>
          <DetailsDescription>
            <Title>
              <h1>Riksgränsen Off-Piste</h1>
              <IconSkis src="skis.svg" alt="skis" />
            </Title>
            <PackageSubTitle>May 5–9 2021</PackageSubTitle>
            <PackageSubTitle>10 000 SEK</PackageSubTitle>
            <p>Having the Northern Arctic Ocean as a snow-blower, it is no surprise that Riksgränsen is reputed to provide among the best skiing in Sweden.
            The area provides plenty of easy accessible off-piste, like Nordalsfjäll where the Scandinavian Big Mountain Championships are held every year.
            </p>
            <Accordion
              title="Program"
              content="
              May 5 Arrival & Dinner</br>
              <p>May 6 With skis strapped to our backpacks, we follow our guide up to the peak of Nordalsfjäll.</p>
              <p>May 7 With the off-piste guide, you will explore the area connected by the lift-system.</p>
              <p>May 8 Try Skitouring Vassitjåkkothe</p>
              <p>May Breakfast & Departure</p>
              " />
            <Accordion
              title="Accommodation"
              content="We are staying at Hotell Riksgränsen right in the center of it all. Full meal plan included." />
            <Accordion
              title="Travel"
              content="Train is recommended. Step aboard the train in Stockholm or Gothenburg at night and wake up amidst the fantastic mountain scenery the next day. Travel arrangement is not included." />
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
      </PageBackground>
    </PageContainer>
  )
}