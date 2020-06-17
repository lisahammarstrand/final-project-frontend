import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { PageContainer, PageBackground, PageOverlay } from 'lib/PageBackground'
import { Button } from 'lib/Buttons'

const DetailsSummary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  padding: 50px;
  z-index: 1;

  @media (min-width: 650px) {
    flex-direction: row;
  }
`
const DetailsImage = styled.img`
  width: 300px;
  border: 2px solid white;
`
const DetailsDescription = styled.div`
  margin-left: 20px;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 650px) {
    align-items: flex-start;
    max-width: 400px;
  }
`
const IconSkis = styled.img`
  width: 40px;
  margin: 0px 5px 0px 10px;
`
const IconDumbbell = styled.img`
  width: 40px;
  margin-left: 10px;
  transform: rotate(-50deg);
`
const DetailsTitle = styled.div`
  display: flex;
  background: #011627;
  padding: 5px 32px;
  margin: 16px 0px;
`

export const PackageDetails = () => {
  return (
    <PageContainer>
      <PageOverlay />
      <PageBackground>
        <DetailsSummary>
          <DetailsImage src="skitouring_2.jpeg" alt="skitouring" />
          <DetailsDescription>
            <DetailsTitle>
              <h1>Title</h1>
              <IconSkis src="skis.svg" alt="skis" />
            </DetailsTitle>
            <h2>Subtitle</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo erat, lacinia et nulla id, dapibus tristique orci. Etiam non tellus ante. Sed scelerisque mattis augue, sed bibendum elit aliquet nec. Praesent non scelerisque lectus, accumsan viverra ante</p>
            <DetailsTitle>
              <h1>Title</h1>
              <IconDumbbell src="dumbbell.svg" alt="dumbbell" />
            </DetailsTitle>
            <h2>Subtitle</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo erat, lacinia et nulla id, dapibus tristique orci. Etiam non tellus ante. Sed scelerisque mattis augue, sed bibendum elit aliquet nec. Praesent non scelerisque lectus, accumsan viverra ante</p>
            <Link to="/booking">
              <Button title="Book now" />
            </Link>
          </DetailsDescription>
        </DetailsSummary>
      </PageBackground>
    </PageContainer>
  )
}