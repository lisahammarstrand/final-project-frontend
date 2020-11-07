import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { PageContainer, PageBackground, PageOverlay } from 'lib/PageBackground'
import { DetailsSummary, DetailsDescription } from 'lib/DetailsSummaryDescription'
import { Title } from 'lib/Title'
import { IconSkis, IconDumbbell } from 'lib/Icons'
import { OutlinedButton } from 'lib/Buttons'
import { ProgressBar } from 'lib/ProgressBar'
import { Accordion } from 'components/Accordion'

const MyPageBackground = styled(PageBackground)`
  align-items: center;
`
const MyPageSummary = styled(DetailsSummary)`
  padding: 24px 32px;
`
const ProgressbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #011627;
  width: 100%;
  padding: 16px;
  `
const LogOutButton = styled(OutlinedButton)`
  bottom: 24px;
  margin-top: 32px;
  align-self: center;
`
const Links = styled.div`
  align-self: center;
`
export const MyPage = () => {
  const URL = 'https://active-vaycay-backend.herokuapp.com/profile'
  const accessToken = window.localStorage.getItem('accessToken')
  const [userData, setUserData] = useState({ userId: '', times: 'Loading ...', name: 'Loading ...', activepackage: 'Loading ...', training: 'Loading ...' })

  useEffect(() => {
    fetch(URL, {
      method: 'GET',
      headers: { Authorization: accessToken }
    })
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error('Please log in to access your page', JSON)
        } else {
          return response.json()
        }
      })
      .then((data) => {
        console.log(data);
        setUserData(data)
      })
      .catch((err) => console.log('Error:', err))
  }, [accessToken])

  const onUpdate = (userId) => {
    console.log(userId, 'on update')
    setUserData((prevState) => ({
      ...prevState,
      times: prevState.times + 1
    }));
  }

  const handleClick = (userId) => {
    console.log('handleClick', userId)
    fetch(`https://active-vaycay-backend.herokuapp.com/profile/${userId}/updatestats`, {
      method: 'PUT',
      body: '',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => response.json())
      .then(() => {
        onUpdate(userId)
      })
  }

  return (
    <PageContainer>
      <PageOverlay />
      <MyPageBackground>
        <MyPageSummary>
          <DetailsDescription>
            <Title>
              <h1>Your adventure is waiting</h1>
              <IconSkis src="skis.svg" alt="skis" />
            </Title>
            <h2>Welcome {userData.name}</h2>
            <p>We &apos;re excited that you&apos;re going on your next adventure with us!
            You have booked:
            </p>
            <h2>{userData.activepackage}</h2>
            <Title>
              <h1>Get ready</h1>
              <IconDumbbell src="dumbbell.svg" alt="dumbbell" />
            </Title>
            <h2>{userData.training} workout – let &apos;s go!</h2>
            <p>We want you to have your best possible adventure, it’s by far
            more fun when you’re in an ok shape.
            And – rewards are waiting if you follow through.
            Log each time you complete your workout.
            Strenght + Cardio = 1 workout.
            </p>
            <p>20 workouts = complimentary dinner at your destination
              <span className="bonus-emoji" role="img" aria-label="emoji"> 🍽</span>
            </p>
            <p>10 workouts – not bad = sunglasses from our partner The Outdoor Company
              <span className="bonus-emoji" role="img" aria-label="emoji">😎</span>
            </p>

            <Accordion
              title="Workout Strength"
              content={
                <>
                  <ul>
                    <li>Air squats – Regular squats but with a light lift of the heels going up</li>
                    <li>Lunges – Switch leg each lunge</li>
                    <li>Plank – Switch between straight arms and forearms</li>
                    <li>Pushups – Regular or on your knees</li>
                  </ul>
                  <h2>{userData.training}</h2>
                  <ul>
                    {userData.training === 'Soft' && <li>Each exercise – 15 sec</li>}
                    {userData.training === 'Medium' && <li>Each exercise – 15 sec</li>}
                    {userData.training === 'Tough' && <li>Each exercise – 20 sec</li>}
                    <li>Rest – 15 sec</li>
                    {userData.training === 'Soft' && <li>Rounds – 4</li>}
                    {userData.training === 'Medium' && <li>Rounds – 6</li>}
                    {userData.training === 'Tough' && <li>Rounds – 8</li>}
                  </ul>
                </>
              } />
            <Accordion
              title="Workout Cardio"
              content={
                <>
                  <p>Basically any cardio is useful as long as a
                  major part of your muscles are used and the
                  intensity is high enough to increase your
                  heart rate. To prepare your endurance for
                  ski touring find the nearest ski slope or
                  hill and walk up and down. As a reference, Hammarbybacken in Stockholm
                  is 93,5 altimeters. Start with a few turns and increase each time.
                  With or without skis and poles, depending on the season.
                  </p>
                  <h2>{userData.training}</h2>
                  {userData.training === 'Soft' && <p>Each cardio workout minimum: 45 minutes</p>}
                  {userData.training === 'Medium' && <p>Each cardio workout minimum: 60 minutes</p>}
                  {userData.training === 'Tough' && <p>Each cardio workout minimum: 75 minutes</p>}
                </>
              } />

            <ProgressbarContainer>
              <h2>{moment().format('MMM Do YYYY')}</h2>
              <ProgressBar percentage={userData.times * 5} />
              <h2>Your current workouts: {userData.times}/20</h2>
              {userData.times >= 10 && <p>Well done! You earned a pair of sunglasses.</p>}
              {userData.times >= 20 && <p>Good job! Complimentary dinner is yours.</p>}
              <button
                className="updateStats"
                type="button"
                onClick={() => handleClick(userData.userId)}
                disabled={userData.times >= 20}>
                Update
              </button>
            </ProgressbarContainer>
            <Links>
              <Link to="/">
                <LogOutButton
                  title="Log out"
                  onClick={() => window.localStorage.removeItem('accessToken')} />
              </Link>
            </Links>
          </DetailsDescription>
        </MyPageSummary>
      </MyPageBackground>
    </PageContainer>
  )
}

