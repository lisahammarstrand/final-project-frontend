import React from 'react'
import styled from 'styled-components'
import { PackageCard } from 'components/PackageCard'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'

const StartPageWrapper = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 95%;
height: auto;
`
const PackageCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: auto;

  @media (min-width: 650px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`
export const StartPage = () => {
  return (
    /*  <div>StartPage</div> */
    <StartPageWrapper>
      <>
        <Header />
        <PackageCardContainer>
          <PackageCard title="Backcountry Skiing" subtitle="in Riksgränsen" />
          <PackageCard title="Backcountry Skiing" subtitle="in Riksgränsen" />
          <PackageCard title="Backcountry Skiing" subtitle="in Riksgränsen" />
          <PackageCard title="Backcountry Skiing" subtitle="in Riksgränsen" />
        </PackageCardContainer>
        <Footer />
      </>
    </StartPageWrapper >
  )
}