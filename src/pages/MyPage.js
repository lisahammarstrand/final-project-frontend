import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import { PageContainer, PageBackground, PageOverlay } from 'lib/PageBackground'
import { Title } from 'lib/Title'
import { IconSkis, IconDumbbell } from 'lib/Icons'
import { DetailsImage } from 'lib/DetailsImage'
import { OutlinedButton } from 'lib/Buttons'
import { ProgressBar } from 'lib/ProgressBar'
import { Loader } from 'lib/Loader'

const MyPageBackground = styled(PageBackground)`
  align-items: center;
`
const MyPageSummary = styled.div`
  position: absolute;
  top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center; 
  width: 80%;
  padding: 50px;
  background: #011627;
  border: none;
  border-radius: 6px;
  z-index: 1;

  @media (min-width: 650px) {
    flex-direction: row;
  }
`
const MyPageDescription = styled.div`
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
const UpdateButton = styled(OutlinedButton)`
  border: 2px solid #20a4f3;
`
export const MyPage = () => {
  /* const { userId } = useParams() */
  const URL = 'https://active-vaycay-backend.herokuapp.com/users'
  const accessToken = window.localStorage.getItem('accessToken')
  const [userData, setUserData] = useState({})

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
          <div>
            <DetailsImage src="skitouring_2.jpeg" alt="skitouring" />
            {/*  <ProgressBar precentage={parseInt(user.times/15 * 100)} /> */}
            <ProgressBar precentage={45} />
            <p>Your workouts: {userData.times}/20</p>
            <UpdateButton title="Update" />
          </div>
          <MyPageDescription>
            <Title>
              <h1>Title</h1>
              <IconSkis src="skis.svg" alt="skis" />
            </Title>
            <h2>Welcome {userData.name}</h2>
            <p>We &apos;re excited that you&apos;re going {userData.activepackage} with us! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo erat, lacinia et nulla id, dapibus tristique orci. </p>
            <Title>
              <h1>Title</h1>
              <IconDumbbell src="dumbbell.svg" alt="dumbbell" />
            </Title>
            <h2>{userData.training} training – let &apos;s go!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo erat, lacinia et nulla id, dapibus tristique orci. Etiam non tellus ante. Sed scelerisque mattis augue, sed bibendum elit aliquet nec. Praesent non scelerisque lectus, accumsan viverra ante</p>
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