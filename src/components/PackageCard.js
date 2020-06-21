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
const PackageCardTitle = styled(Title)`
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
  margin: 10px 16px;
`
const DumbbellIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 10px;
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
/* const CardOverlay = styled.div`
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

const PackageCardButton = styled(Button)`
  position absolute;
  bottom: 24px;
  align-self: center;
`
export const PackageCard = ({ title, subtitle, date, background, dumbbell1, dumbbell2, dumbbell3 }) => {
  return (
    <Link to="/riksgransen">
      <CardContainer background={background}>
        <CardHeader>
          <PackageCardTitle>
            <h1>{title}</h1>
            {dumbbell1 && <DumbbellIcon src={dumbbell1} alt="" />}
            {dumbbell2 && <DumbbellIcon src={dumbbell2} alt="" />}
          </PackageCardTitle>
        </CardHeader>
        <PackageSubTitle>{date}</PackageSubTitle>
        <PackageSubTitle>{subtitle}</PackageSubTitle>
        <PackageCardButton title="Learn more" />
      </CardContainer>
    </Link>
  )
}