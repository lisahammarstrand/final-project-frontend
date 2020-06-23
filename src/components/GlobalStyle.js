import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: white;
}
h1 {
  font-size: 22px;
  margin: 10px 0px;
}
h2 {
  font-size: 16px;
  margin: 5px 0px;
}
p {
  margin: 10px 0px;
}
ul {
  list-type-style: none;
}
li {
  list-type-style: none;
}
`