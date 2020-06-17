import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { PageContainer, PageBackground, PageOverlay } from 'lib/PageBackground'
import { OutlinedButton } from 'lib/Buttons'
import { ProgressBar } from 'lib/ProgressBar'

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
const MyPageImage = styled.img`
  width: 300px;
  border: 2px solid white;
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
const IconSkis = styled.img`
  width: 40px;
  margin: 0px 5px 0px 10px;
`
const IconDumbbell = styled.img`
  width: 40px;
  margin-left: 10px;
  transform: rotate(-50deg);
`
const MyPageTitle = styled.div`
  display: flex;
  background: #011627;
  padding: 5px 32px;
  margin: 16px 0px;
`
const UpdateButton = styled(OutlinedButton)`
  border: 2px solid #20a4f3;
`

export const MyPage = () => {
  return (
    <PageContainer>
      <PageOverlay />
      <MyPageBackground>
        <MyPageSummary>
          <div>
            <MyPageImage src="skitouring_2.jpeg" alt="skitouring" />
            {/*  <ProgressBar precentage={parseInt(user.times/15 * 100)} /> */}
            <ProgressBar precentage={45} />
            <UpdateButton title="Update" />
          </div>
          <MyPageDescription>
            <MyPageTitle>
              <h1>Title</h1>
              <IconSkis src="skis.svg" alt="skis" />
            </MyPageTitle>
            <h2>Welcome Name</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo erat, lacinia et nulla id, dapibus tristique orci. Etiam non tellus ante. Sed scelerisque mattis augue, sed bibendum elit aliquet nec. Praesent non scelerisque lectus, accumsan viverra ante</p>
            <MyPageTitle>
              <h1>Title</h1>
              <IconDumbbell src="dumbbell.svg" alt="dumbbell" />
            </MyPageTitle>
            <h2>Medium training – let &apos;s go!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo erat, lacinia et nulla id, dapibus tristique orci. Etiam non tellus ante. Sed scelerisque mattis augue, sed bibendum elit aliquet nec. Praesent non scelerisque lectus, accumsan viverra ante</p>
            <Link to="/">
              <OutlinedButton title="Log out" />
            </Link>
          </MyPageDescription>
        </MyPageSummary>
      </MyPageBackground>
    </PageContainer>
  )
}
