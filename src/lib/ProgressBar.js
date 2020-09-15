import React from 'react'
import styled from 'styled-components'

const Tracker = styled.div`
  width: 80%;
  height: 40px;
  margin: 16px;
  background: transparent;
  border: 2px solid #20a4f3;
`
// Trying to make progress bar increment according to times update
const ProgressInTracker = styled.div`
  width: 0%; 
  height: 100%;
  background: #20a4f3;
  animation: showProgress 4s forwards; 
  transition: ease-out;

  @keyframes showProgress {
    0% { width: 0%;}
    100% { width: ${(props) => (props.percentage)}%;}
  }
`
// The incrementing of percentage is not working
// but will continue to work on this feature
export const ProgressBar = ({ percentage }) => {
  return (
    <Tracker>
      <ProgressInTracker percentage={percentage} />
    </Tracker>
  )
}