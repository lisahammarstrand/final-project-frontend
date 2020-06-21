import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import { PageContainer, PageBackground, PageOverlay } from 'lib/PageBackground'
import { Title } from 'lib/Title'
import { IconSkis, IconDumbbell } from 'lib/Icons'
/* import { DetailsImage } from 'lib/DetailsImage' */
import { OutlinedButton } from 'lib/Buttons'
import { ProgressBar } from 'lib/ProgressBar'
import { Accordion } from 'components/Accordion'
import { Loader } from 'lib/Loader'

const MyPageBackground = styled(PageBackground)`
  align-items: center;
`
const MyPageSummary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  width: 80%;
  padding: 50px;
  background: transparent;
  border: none;
  border-radius: 6px;
  z-index: 1;

  @media (min-width: 650px) {
    flex-direction: row;
  }
`
const MyPageDescription = styled.div`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 650px) {
    align-items: flex-start;
    max-width: 400px;
  }
`
const ProgressbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #011627;
  width: 100%;
  padding: 16px;
  `
const UpdateButton = styled(OutlinedButton)`
  border: 2px solid #20a4f3;
`
export const MyPage = () => {
  /* const { userId } = useParams() */
  const URL = 'https://active-vaycay-backend.herokuapp.com/users'
  const accessToken = window.localStorage.getItem('accessToken')
  const [userData, setUserData] = useState({ times: 'Loading ...', name: 'Loading ...', activepackage: 'Loading ...', training: 'Loading ...' })

  useEffect(() => {
    fetch(URL, {
      method: 'GET',
      headers: { Authorization: accessToken }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Please log in to access your page', JSON)
        } else {
          return response.json()
        }
      })
      .then((data) => {
        setUserData(data)
      })
      .catch((err) => console.log('Error:', err))
  }, [accessToken])

  /* if (userData === undefined) {
    return (
      <Loader />
    )
  } else { */

  return (
    <PageContainer>
      <PageOverlay />
      <MyPageBackground>
        <MyPageSummary>
          <MyPageDescription>
            <Title>
              <h1>Your adventure is waiting</h1>
              <IconSkis src="skis.svg" alt="skis" />
            </Title>
            <h2>Welcome {userData.name}</h2>
            <p>We &apos;re excited that you&apos;re going on your next adventure with us! You have booked:</p>
            <p>{userData.activepackage}</p>
            <Title>
              <h1>Get ready</h1>
              <IconDumbbell src="dumbbell.svg" alt="dumbbell" />
            </Title>
            <h2>{userData.training} training – let &apos;s go!</h2>
            <p>We want you to have your best possible adventure, it’s by far more fun when you’re in an ok shape. And – rewards are waiting if you follow through.</p>
            <p>20 workouts before departure = sunglasses, gloves and a goodie bag with power bars from our partner The Outdoor Company. 10 workouts – not bad = a goodie bag with power bars.</p>
            <Accordion
              title="Workout"
              content="
              STRENGTH
              Air squats – Regular squats but with a light lift of the heels going up 
              Lunges – Switch lega each lunge
              Plank – Switch between straight arms and forearms
              Pushups – Regular or on your knees

              Each excersize: 20 seconds
              Rest: 10 seconds
              Rounds: 8

              CARDIO
              Basically any cardio is useful as long as a major part of your muscles are used and the intensity is high enough to increase your heart rate. To prepare your endurance for ski touring find the nearest ski slope or hill and walk up and down. As a reference, Hammarbybacken in Stockholm is 93,5 altimeters. Start with a few turns and increase each time. With or without skis.

              Each cardio workout: min 1 hour
              " />
            <ProgressbarContainer>
              {/*  <ProgressBar precentage={parseInt(user.times/20 * 100)} /> */}
              <ProgressBar precentage={25} />
              <p>Your current workouts: {userData.times}/20</p>
              <UpdateButton title="Update" />
            </ProgressbarContainer>
            <Link to="/">
              <OutlinedButton
                title="Log out"
                onClick={() => window.localStorage.removeItem('accessToken')} />
            </Link>
          </MyPageDescription>
        </MyPageSummary>
      </MyPageBackground>
    </PageContainer>
  )
}
/* } */