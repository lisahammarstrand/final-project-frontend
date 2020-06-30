import React from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import { PageContainer, PageBackground, PageOverlay } from 'lib/PageBackground'
import { Title } from 'lib/Title'

const AboutSection = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  margin: 16px;
  z-index: 1;
`
const AboutDescription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 350px;
  margin: 0px 16px;
  text-align: center;

  @media (min-width: 650px) {
    max-width: 620px;
    align-items: flex-start;
    text-align: left;
  }
`
export const About = () => {
  return (
    <PageContainer>
      <PageOverlay />
      <PageBackground>
        <AboutSection>
          <Title><h1>Dreaming of snow</h1></Title>
          <AboutDescription>
            <h2>Background</h2>
            <p>This is a project built within the Technigo Frontent Bootcamp, final sprint.
            An opportunity to experiment with the tools and techniques used during
            the Bootcamp, and deep-dive into selected parts. To wrap things up and move ahead.
            </p>
            <p>I had this idea about boosting active outdoor tourism in combination with
            physical activity, with the objective to make the most of active vacations,
            and to make the overall experience more enjoyable.
            By stimulating a training habit to be better prepared for the adventure,
            rather than discovering a week before departure that your
            physical shape is not that great. The basic idea is to reward guests who
            follow through with their workout program with a bonus.
            I also missed skiing so much this winter,
            after cancelling two ski touring adventures. Flipping through some images,
            I found myself dreaming of snow and wanted to create some positiveness and
            optimism in these unpredictable times. (All content is just placeholder material.)
            </p>
            <h2>Continous development</h2>
            <p>My intention with this project was to have a more developed  ”My page” where you could log
            your workout statistics and get alerts when you are close to reaching bonus
            goals. The time frame set limits and this is something I will continue to
            work on. There are plenty of opportunities for this section, and what
              I created now is just an example to get the imagination going.</p>
            <h2>Tech</h2>
            <p>To build the frontend I used <b>React, React Router, React Hooks </b>and
              <b> Styled Components.
              </b> I focused on understanding and practice Styled Components and
            how to structure and create reusable components. This is something I will
              explore further, more pages and components are suitable to be reusable.
            </p>
            <p>Tech in the backend – here I used <b>Expressjs, Node.js, MongoDB, Mongoose</b> to create an
            API with RESTful endpoints, and storing and fetching data. Crypto and
            bcrypt is implemented for secure password handling.
            </p>
            <p>For deployment I used <b>Netlify</b> for the frontend and <b>Heroku</b> for the backend.

            </p>
          </AboutDescription>
        </AboutSection>
      </PageBackground>
    </PageContainer>
  )
}