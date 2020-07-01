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

  const ConfirmationPageBackground = styled(PageBackground)`
    align-items: center;
  `
  const ConfirmationContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 80%;
    margin-top: 50px;
    z-index: 1;

    @media (min-width: 650px) {
      text-align: left;
      max-width: 620px;
    }
  `
  return (
    <PageContainer>
      <PageOverlay />
      <ConfirmationPageBackground>
        <ConfirmationContainer>
          <Title>
            <h1>Thank you for your reservation!</h1>
          </Title>
          <p>We look forward to exploring the mountains with you!
          You will receive a confirmation by email shortly.
          </p>
          <p>You can now sign in to your account and check your booking details.
          This is also where you can check and update your workout stats.
          </p>
          <Link to="/login">
            <Button
              type="button"
              title="To sign in page"
              onClick={RedirectLogin} />
          </Link>
        </ConfirmationContainer>
      </ConfirmationPageBackground>
    </PageContainer>
  )
}