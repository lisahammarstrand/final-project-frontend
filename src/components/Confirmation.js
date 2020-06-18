import React from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import { Title } from 'lib/Title'
import { PageContainer, PageBackground, PageOverlay } from 'lib/PageBackground'
import { Button } from 'lib/Buttons'

export const Confirmation = () => {
  const history = useHistory()

  const RedirectLogin = () => {
    history.push('/login')
  }

  const ConfirmationContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
  `
  return (
    <PageContainer>
      <PageOverlay />
      <PageBackground>
        <ConfirmationContainer>
          <Title>
            <h1>Thank you!</h1>
          </Title>
          <p>We look forward to seeing you</p>
          <Link to='/login'>
            <Button
              type="button"
              title="To login page"
              onClick={RedirectLogin} />
          </Link>
        </ConfirmationContainer>
      </PageBackground>
    </PageContainer>
  )
}