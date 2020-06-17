import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import { PageContainer, PageBackground, PageOverlay } from 'lib/PageBackground'
import { Form } from 'lib/Form'
import { Label } from 'lib/Label'
import { Input } from 'lib/Input'
import { Button } from 'lib/Buttons'

const LoginBackground = styled(PageBackground)`
  align-items: center;
`
const LoginForm = styled(Form)`
  height: 300px;
  `
const SubmitButton = styled(Button)`
  position absolute;
  bottom: 24px;
  align-self: center;
`
const URL = 'https://active-vaycay-backend.herokuapp.com/sessions'

export const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [registrered, setRegistered] = useState(false)
  const [failed, setFailed] = useState(false)
  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
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
      .then(({ accessToken }) => {
        if (accessToken) {
          window.localStorage.setItem('accessToken', accessToken)
          history.push('/mypage')
        }
      })
      .catch((err) => console.log('Error:', err))
  }
  return (
    <PageContainer>
      <PageOverlay />
      <LoginBackground>
        <LoginForm onSubmit={handleSubmit}>
          {failed && (
            <p>Oops could not sign you in. Please check your inputs and try again.</p>
          )}
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
          <SubmitButton
            title="Submit"
            type="submit"
            onClick={handleSubmit} />
        </LoginForm>
      </LoginBackground>
    </PageContainer>

  )
}