import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import { Label } from 'lib/Label'
import { Input } from 'lib/Input'
import { Select } from 'lib/Select'
import { Button } from 'lib/Buttons'

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
  padding: 40px 30px 30px 30px;
  background: transparent;
  border: 1px solid white;
  border-radius: 6px;
  z-index: 1;
  `
export const BookingPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [activepackage, setActivePackage] = useState('')
  const [date, setDate] = useState('')
  const [training, setTraining] = useState('')
  const history = useHistory()

  return (
    <BookingContainer>
      <BookingOverlay />
      <BookingBackground>
        <BookingForm>
          <Label>
            Name
            <Input
              type="text"
              required
              value={name}
              onChange={event => setName(event.target.value)} />
          </Label>
          <Label>
            Email
            <Input
              type="text"
              required
              value={email}
              onChange={event => setEmail(event.target.value)} />
          </Label>
          <Label>
            Password
            <Input
              type="password"
              required
              value={password}
              onChange={event => setPassword(event.target.value)} />
          </Label>
          <Label>
            Package
            <Input
              type="text"
              required
              value={activepackage}
              onChange={event => setActivePackage(event.target.value)} />
          </Label>
          <Label>
            Date
            <Select
              type="text"
              required
              value={date}
              onChange={event => setDate(event.target.value)} />
            <option value="">Select date</option>
            <option value="Feb 20–25 2021">Feb 20–25 2021</option>
            <option value="March 20–25 2021">March 20–25 2021</option>
            <option value="April 20–25 2021">April 20–25 2021</option>
          </Label>
          <Label>
            Training
            <Input
              type="text"
              required
              value={training}
              onChange={event => setTraining(event.target.value)} />
          </Label>
        </BookingForm>
      </BookingBackground>
    </BookingContainer>


  )
}

