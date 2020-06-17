import styled from 'styled-components'

export const Input = styled.input`
line-height: 25px;
margin: 8px 0px;
font-size: 16px;
border: none;
color: white;
width: 95%;
background: transparent;
border-bottom: 1px solid #011627;
&:focus, &:active {
  outline: none;
  border-color: #2eb4c6;
  border-bottom: 2px solid #2eb4c6;
}
`