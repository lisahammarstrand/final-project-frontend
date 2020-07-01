import React from 'react'
import styled from 'styled-components'

// This loader is not used because I couldn't make it visible.
// I would still lika to keep it in the project for future use.

export const LoaderBackground = styled.div` 
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  width: 100%;
  height: 600px;
  background-color: #011627;
  z-index: 0;
`

export const Spinner = styled.div`
  position: absolute;
  display: inline-block;
  width: 80px;
  height: 80px;
  border: #ff3366;
  border-radius: 50%;
  border-top-color: #20a4f3;
  border-bottom-color: #20a4f3;
  animation: spin 3s linear infinite;
  z-index: 1;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`
export const Loader = () => {
  return (
    <LoaderBackground>
      <p>Loading ...</p>
      <Spinner />
    </LoaderBackground>
  )
}