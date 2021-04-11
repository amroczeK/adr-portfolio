import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none !important;
}
body {
  background: #111;
  font-family: 'Inter', sans-serif;
}
h2 {
    font-weight: lighter;
    font-size: 1rem;
  }
h3 {
    color: white;
  }
h4 {
  font-weight: bold;
  font-size: 2rem;
}
/* p {
    padding: 1rem 0rem;
    color: white;
    font-size: 1.4rem;
    line-height: 150%;
  } */
`;

export default GlobalStyle;
