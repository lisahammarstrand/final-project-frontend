import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from 'lib/Buttons'
import { Title } from 'lib/Title'

const CardContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border: 2px solid white;
  border-radius: 6px;
  padding: 6px;
  margin: 10px;
  background-image: url('${(props) => props.background}');
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

 /*  &:hover {
    visibility: visible;
  } */
`
const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const PackageTitle = styled(Title)`
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
  margin-left: 16px;
  margin-bottom: 10px;
  margin-top: 10px;
`
const DumbbellIcon = styled.img.attrs((props) => props.dumbbell, { src: 'src="dumbbell.svg"' })`
  width: 30px;
  height: 30px;
  transform: rotate(-50deg);
`
const PackageSubTitle = styled.h2`
  display: inline-block;
  font-size: 20px;
  font-weight: normal;
  margin-left: 16px;
  margin-top: 0px;
  padding: 0px 16px;
  background: #011627;
  color: white;
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
const PackageCardButton = styled(Button)`
  position absolute;
  bottom: 24px;
  align-self: center;
`
export const PackageCard = ({ title, subtitle, date, background, dumbbell }) => {
  return (
    <Link to="/package">
      <CardContainer background={background}>
        {/* <CardOverlay> */}
        <CardHeader>
          <PackageTitle>
            <h1>{title}</h1>
            <DumbbellIcon dumbbell={dumbbell} />
          </PackageTitle>
        </CardHeader>
        <PackageSubTitle>{date}</PackageSubTitle>
        <PackageSubTitle>{subtitle}</PackageSubTitle>
        <PackageCardButton title="Learn more" />
        {/*  </CardOverlay> */}
      </CardContainer>
    </Link>
  )
}