import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { PageContainer, PageBackground, PageOverlay } from 'lib/PageBackground'
import { Title } from 'lib/Title'
import { IconSkis, IconDumbbell } from 'lib/Icons'
import { DetailsImage } from 'lib/DetailsImage'
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

export const PackageDetails = () => {
  return (
    <PageContainer>
      <PageOverlay />
      <PageBackground>
        <DetailsSummary>
          <DetailsImage src="skitouring_2.jpeg" alt="skitouring" />
          <DetailsDescription>
            <Title>
              <h1>Title</h1>
              <IconSkis src="skis.svg" alt="skis" />
            </Title>
            <h2>Subtitle</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo erat, lacinia et nulla id, dapibus tristique orci. Etiam non tellus ante. Sed scelerisque mattis augue, sed bibendum elit aliquet nec. Praesent non scelerisque lectus, accumsan viverra ante</p>
            <Title>
              <h1>Title</h1>
              <IconDumbbell src="dumbbell.svg" alt="dumbbell" />
            </Title>
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