import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from 'lib/Buttons'

const PackageDetailsContainer = styled.article`
  position: relative;
  color: white;
  width: 100%;
`
const PackageDetailsBackground = styled.div`
  min-height: 100vh;
  background-image: url("skitouring_2.jpeg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  z-index: -1;
`
const DetailsOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(1,23,39,0.3);
  display: flex;
  flex-direction: column;
  z-index: 0;
  `
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
    <PackageDetailsContainer>
      <DetailsOverlay />
      <PackageDetailsBackground>
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
      </PackageDetailsBackground>
    </PackageDetailsContainer>
  )
}