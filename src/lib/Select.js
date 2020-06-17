import styled from 'styled-components'

export const Select = styled.select`
  line-height: 25px;
  font-size: 16px;
  width: 95%;
  background: transparent;
  color: white;
  border: none;
  border-bottom: 1px solid #011627;
  padding: 2px;
  margin: 8px 0px;

  &:focus, &:active {
    outline: none;
    border-color: #2eb4c6;
    border-bottom: 2px solid #2eb4c6;
}
`