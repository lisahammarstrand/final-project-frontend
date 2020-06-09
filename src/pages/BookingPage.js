import React from 'react'
import styled from 'styled-components'
import { Route, Link } from 'react-router-dom'

const BookingContainer = styled.section`
  position: relative;
  color: white;
  width: 100%;
  `
const BookingBackground = styled.div`
  min-height: 100vh;
  background-image: url("skitouring_2.jpeg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: -1;
`
const BookingOverlay = styled.div`
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
const BookingForm = styled.form`
  position: absolute;
  top: 50px;
  width: 80%;
  height: 500px;
  background: transparent;
  border: 1px solid white;
  border-radius: 6px;
  z-index: 1;
  `
export const BookingPage = () => {
  return (
    /*  <div>BookingPage</div> */
    <BookingContainer>
      <BookingOverlay />
      <BookingBackground>
        <BookingForm />
      </BookingBackground>
    </BookingContainer>


  )
}

