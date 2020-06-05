import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
position: relative;
width: 250px;
height: 300px;
border: 1px solid white;
`

export const PackageCard = () => {
  return (
    <CardContainer>
      <h1>PackageCard</h1>
    </CardContainer>
  )
}