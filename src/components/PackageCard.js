import React from 'react'
import styled from 'styled-components'
import { Button } from 'lib/Buttons'

const CardContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border: 2px solid white;
  border-radius: 6px;
  padding: 6px;
  margin: 10px;
  background-image: url("skitouring_2.jpeg");
  background-size: cover;
  display: flex;
  flex-direction: column;

 /*  &:hover {
    visibility: visible;
  } */
`
const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const PackageTitle = styled.h1`
  font-size: 24px;
  margin-left: 16px;
  margin-bottom: 10px;
  margin-top: 10px;
`
const DumbbellIcon = styled.img`
  width: 30px;
  height: 30px;
  transform: rotate(-50deg);
`
const PackageSubTitle = styled.h2`
  font-size: 20px;
  font-weight: normal;
  margin-left: 16px;
  margin-top: 0px;
`
const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(1,23,39,0.3);
  display: flex;
  flex-direction: column;
 /*  visibility: hidden;

  &:hover {
    visibility: visible;
  } */
  `
export const PackageCard = ({ title, subtitle }) => {
  return (
    <CardContainer>
      <CardOverlay>
        <CardHeader>
          <PackageTitle>{title}</PackageTitle>
          <DumbbellIcon src="dumbbell.svg" alt="dumbbell" />
          <DumbbellIcon src="dumbbell.svg" alt="dumbbell" />
        </CardHeader>
        <PackageSubTitle>{subtitle}</PackageSubTitle>
        <Button title="Learn more" />
      </CardOverlay>
    </CardContainer>
  )
}