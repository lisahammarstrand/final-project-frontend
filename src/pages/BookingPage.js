import React, { useState } from 'react'
import styled from 'styled-components'
import { PageContainer, PageBackground, PageOverlay } from 'lib/PageBackground'
import { Form } from 'lib/Form'
import { Label } from 'lib/Label'
import { Input } from 'lib/Input'
import { Select } from 'lib/Select'
import { Button } from 'lib/Buttons'
import { Title } from 'lib/Title'
import { Confirmation } from 'components/Confirmation'

const BookingBackground = styled(PageBackground)`
  align-items: center;
`
const SubmitButton = styled(Button)`
  bottom: 24px;
  align-self: center;
`
const BookingTitle = styled(Title)`
  position: relative;
  margin-top: 0;
  align-self: center;
  z-index: 2;
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
      .catch((err) => console.log('Error:', err))
  }

  return (
    <PageContainer>
      <PageOverlay />
      <BookingBackground>
        {!registrered && (
          <Form onSubmit={handleSubmit}>
            {!failed &&
              <>
                <BookingTitle><h1>Yes, great decision!</h1></BookingTitle>
                <h2>Glad you are joining us on your next adventure!
                Welcome to enter your details:
                </h2>
              </>}
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
                <option value="Off-piste skiing in Riksgränsen, May 5–9 2021">Off-piste skiing in Riksgränsen, May 5–9 2021</option>
                <option value="Skitouring in Funäsfjällen, March 3–7 2021">Skitouring in Funäsfjällen, March 3–7 2021</option>
                <option value="Skitouring in Storulvån, April 1–4 2021">Skitouring in Storulvån, April 1–4 2021</option>
                <option value="Skitouring in Kittelfjäll, April 7–11 2021">Skitouring in Kittelfjäll, April 7–11 2021</option>
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
              title="Book"
              type="submit"
              onClick={handleSubmit} />
          </Form>
        )}
        {registrered && (
          <Confirmation />
        )}
      </BookingBackground>
    </PageContainer>
  )
}

