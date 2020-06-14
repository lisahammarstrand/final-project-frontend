import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { OutlinedButton } from 'lib/Buttons'

const MyPageContainer = styled.article`
  position: relative;
  color: white;
  width: 100%;
`
const MyPageBackground = styled.div`
  min-height: 100vh;
  background-image: url("skitouring_2.jpeg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  z-index: -1;
`
const MyPageOverlay = styled.div`
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

export const MyPage = () => {
  return (
    <MyPageContainer>
      <MyPageOverlay />
      <MyPageBackground>
        <MyPageSummary>
          <MyPageImage src="skitouring_2.jpeg" alt="skitouring" />
          <MyPageDescription>
            <MyPageTitle>
              <h1>Title</h1>
              <IconSkis src="skis.svg" alt="skis" />
            </MyPageTitle>
            <h2>Subtitle</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo erat, lacinia et nulla id, dapibus tristique orci. Etiam non tellus ante. Sed scelerisque mattis augue, sed bibendum elit aliquet nec. Praesent non scelerisque lectus, accumsan viverra ante</p>
            <MyPageTitle>
              <h1>Title</h1>
              <IconDumbbell src="dumbbell.svg" alt="dumbbell" />
            </MyPageTitle>
            <h2>Subtitle</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo erat, lacinia et nulla id, dapibus tristique orci. Etiam non tellus ante. Sed scelerisque mattis augue, sed bibendum elit aliquet nec. Praesent non scelerisque lectus, accumsan viverra ante</p>
            <Link to="/">
              <OutlinedButton title="Log out" />
            </Link>
          </MyPageDescription>
        </MyPageSummary>
      </MyPageBackground>
    </MyPageContainer>
  )
}
