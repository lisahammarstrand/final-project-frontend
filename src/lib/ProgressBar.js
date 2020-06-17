import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'

const Tracker = styled.div`
width: 60%;
height: 40px;
margin: 40px 16px;
background: transparent;
border: 2px solid #20a4f3;
border-radius: 4px;
`
const ProgressInTracker = styled.div`
width: 0%;    
height: 100%;
background: #20a4f3;
animation: showProgress 4s forwards; 
transition: ease-out;

@keyframes showProgress {
  0% { width: 0%;}
  100% { width: 75%;}
  }
`
export const ProgressBar = () => {
  return (
    <Tracker>
      <ProgressInTracker />
    </Tracker>
  )
}