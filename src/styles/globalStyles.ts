import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  
  body { 
    margin: 0;
    padding: 0;
    background: #FFF;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
  }

  #root {
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;