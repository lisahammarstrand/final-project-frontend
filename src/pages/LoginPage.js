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
const LoginButton = styled(Button)`
  position absolute;
  bottom: 24px;
  align-self: center;
`

export const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const history = useHistory()
  const URL = 'https://active-vaycay-backend.herokuapp.com/sessions'

  const handleSignIn = (event) => {
    event.preventDefault()
    setErrorMessage('')
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Oops could not sign you in. Please check your details and try again.')
        } else {
          return res.json()
        }
      })
      .then(({ accessToken }) => {
        if (accessToken) {
          window.localStorage.setItem('accessToken', accessToken)
          history.push('/mypage')
        }
      })
      .catch((err) => {
        setErrorMessage(err.message)
      })
  }

  return (
    <PageContainer>
      <PageOverlay />
      <LoginBackground>
        <LoginForm onSubmit={handleSignIn}>
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
          <div>{errorMessage}</div>
          <LoginButton
            title="Sign in"
            type="submit"
            onClick={handleSignIn} />
          <Link to="/booking">
            <p>No account? Go to booking page</p>
          </Link>
        </LoginForm>
      </LoginBackground>
    </PageContainer>

  )
}