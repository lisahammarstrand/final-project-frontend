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
  font-weight: bold;
  margin: 10px 0px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering:optimizeLegibility;
}
h2 {
  font-size: 16px;
  margin: 5px 0px;
}
p {
  margin: 10px 0px;
}
`