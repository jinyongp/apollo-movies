import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body, #root {
    width: 100%;
    height: 100vh;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
    background-attachment: fixed;
    overflow-y: scroll;
  }
`;

export default GlobalStyle;
