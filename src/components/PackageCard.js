import React from 'react'
import styled from 'styled-components'
import { Button, OutlinedButton, TextButton } from 'lib/Buttons'


const CardContainer = styled.div`
position: relative;
width: 300px;
height: 300px;
border: 1px solid white;
border-radius: 6px;
padding: 6px;
`
const PackageTitle = styled.h1`
font-size: 24px;
margin-left: 16px;
margin-bottom: 10px;
margin-top: 10px;
`
const PackageSubTitle = styled.h2`
font-size: 20px;
font-weight: normal;
margin-left: 16px;
margin-top: 10px;
`
const DumbbellIcon = styled.img`
width: 50px;
height: 50px;
transform: rotate(-50deg);
`
const CardHeader = styled.div`
display: flex;
justify-content: space-between;
`


export const PackageCard = ({ title, subtitle }) => {
  return (
    <CardContainer>
      <CardHeader>
        <PackageTitle>{title}</PackageTitle>
        <DumbbellIcon src="dumbbell.svg" alt="dumbbell" />
      </CardHeader>
      <PackageSubTitle>{subtitle}</PackageSubTitle>
      {/*   <Button title="Book now" /> */}
      <OutlinedButton title="Learn more" />
      {/* <TextButton title="Learn more" /> */}
    </CardContainer>
  )
}