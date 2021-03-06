import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

body {
  background: ${props => props.theme && props.theme.colors.background};
  color: ${props => props.theme && props.theme.colors.text};
}

body,
input,
button,
textarea {
  font: 400 16px "Roboto", sans-serif;
}

`;  