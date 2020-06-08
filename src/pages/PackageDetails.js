import React from 'react'
import styled from 'styled-components'
import { Button } from 'lib/Buttons'

const PackageDetailsContainer = styled.article`
  position: relative;
  color: white;
`
const PackageDetailsBackground = styled.div`
  min-height: 100vh;
  background-image: url("skitouring_2.jpeg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; 
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
/* const PackageDetailsButton = styled(Button)`
position absolute;
bottom: 24px;
` */

export const PackageDetails = () => {
  return (
    /*  <div>PackageDetailsPage</div> */
    <PackageDetailsContainer>
      <DetailsOverlay />
      <PackageDetailsBackground>
        <DetailsSummary>
          <DetailsImage src="skitouring_2.jpeg" alt="skitouring" />
          <DetailsDescription>
            <h1>Title</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo erat, lacinia et nulla id, dapibus tristique orci. Etiam non tellus ante. Sed scelerisque mattis augue, sed bibendum elit aliquet nec. Praesent non scelerisque lectus, accumsan viverra ante</p>
            <Button title="Book now" />
          </DetailsDescription>
        </DetailsSummary>
      </PackageDetailsBackground>
    </PackageDetailsContainer>
  )
}