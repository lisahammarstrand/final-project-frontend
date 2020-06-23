import React, { useState } from 'react'
import styled from 'styled-components'


const AccordionSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const AccordionButton = styled.button`
  width: 100%;
  background-color: transparent;
  color: white;
  cursor: pointer;
  padding: 18px;
  display: flex;
  align-items: center;
  border: none;
  border-bottom: 1px solid #011627;
  outline: none;
  margin: 0px;
  transition: background-color 0.6s ease;

  &:active, &:hover {
    background: #20a4f3;
  }
`
const ChevronIcon = styled.img`
  margin-left: auto;
  fill: #ffffff;
  width: 20px;
  height: 20px;
  transition: transform 0.6s ease;

  &:active {
   transform: rotate(90deg);
}
`
const AccordionContent = styled.div`
  background-color: #20a4f3;
  margin: 0px;
  padding: 16px;
  animation: showContent 1s forwards;
  transition: ease-out;

  @keyframes showContent {
    0% {height: 0px;}
    100% {height: auto;}
  }

  &:active {
    visibility: visible;
  }
`

export const Accordion = ({ title, content }) => {
  const [active, setActive] = useState(false)


  return (
    <AccordionSection>

      <AccordionButton onClick={() => setActive(!active)}>
        <h2>{title}</h2>
        <ChevronIcon src="chevron-right-solid.svg" alt="chevron-icon" />
      </AccordionButton>
      <div className="accordion-content">
        {active &&
          <AccordionContent>
            <p>{content}</p>
          </AccordionContent>}
      </div>
    </AccordionSection>
  )
}