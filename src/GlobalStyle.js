import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  @media (max-width: 1300px){
    font-size: 80%;
  }
}
`;

export default GlobalStyle;
