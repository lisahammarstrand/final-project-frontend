import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import { PageContainer, PageBackground, PageOverlay } from 'lib/PageBackground'
import { Form } from 'lib/Form'
import { Label } from 'lib/Label'
import { Input } from 'lib/Input'
import { Select } from 'lib/Select'
import { Button } from 'lib/Buttons'

const BookingBackground = styled(PageBackground)`
  align-items: center;
`
const SubmitButton = styled(Button)`
  position absolute;
  bottom: 24px;
  align-self: center;
`
const URL = 'https://active-vaycay-backend.herokuapp.com/users'

export const BookingPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [activepackage, setActivePackage] = useState('')
  const [training, setTraining] = useState('')
  const [registrered, setRegistered] = useState(false)
  const [failed, setFailed] = useState(false)
  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({ name, email, password, activepackage, training }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        if (res.status !== 201) {
          return (
            res.json()
              .then((json) => console.log(json.message)), setFailed(true)
          )
        } else {
          setRegistered(true)
          return res.json()
        }
      })
      /*   .then(({ accessToken }) => {
          if (accessToken) {
            window.localStorage.setItem('accessToken', accessToken)
            history.push('/mypage')
          }
        }) */
      .catch((err) => console.log('Error:', err))
  }

  return (
    <PageContainer>
      <PageOverlay />
      <BookingBackground>
        <Form onSubmit={handleSubmit}>
          {failed && (
            <p>Oops could not registrer your booking. Please check your inputs and try again.</p>
          )}
          <Label>
            Name
            <Input
              type="text"
              required
              value={name}
              onChange={(event) => setName(event.target.value)} />
          </Label>
          <Label>
            Email
            <Input
              type="text"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)} />
          </Label>
          <Label>
            Password
            <Input
              type="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)} />
          </Label>
          <Label>
            Package
            <Select
              type="text"
              required
              value={activepackage}
              onChange={(event) => setActivePackage(event.target.value)}>
              <option value="">Select package</option>
              <option value="Riksgränsen">Backcountry skiing in Riksgränsen</option>
              <option value="Funäsdalen">Skitouring in Funäsfjällen</option>
              <option value="Kittelfjäll">Skitouring in Kittelfjäll</option>
              <option value="Storulvån">Skitouring in Storulvån</option>
            </Select>
          </Label>
          <Label>
            Training
            <Select
              type="text"
              required
              value={training}
              onChange={(event) => setTraining(event.target.value)}>
              <option value="">Select training</option>
              <option value="Soft">Soft</option>
              <option value="Medium">Medium</option>
              <option value="Tough">Tough</option>
            </Select>
          </Label>
          <SubmitButton
            title="Submit"
            type="submit"
            onClick={handleSubmit} />
        </Form>
      </BookingBackground>
    </PageContainer>

  )
}

