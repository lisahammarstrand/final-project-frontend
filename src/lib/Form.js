import styled from 'styled-components'

export const Form = styled.form`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 24px;
  width: 90%;
  height: auto;
  padding: 40px 30px 30px 30px;
  background: transparent;
  border: 2px solid white;
  border-radius: 6px;
  z-index: 1;

  @media (min-width: 650px) {
    max-width: 620px;
  }
`