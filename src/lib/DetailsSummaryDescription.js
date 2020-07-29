import styled from 'styled-components'

export const DetailsSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  padding: 24px;
  z-index: 1;

  @media (min-width: 650px) {
    flex-direction: row;
    align-items: flex-start; 
}
`
export const DetailsDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 650px) {
    max-width: 620px;
  }
`