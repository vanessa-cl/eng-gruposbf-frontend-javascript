import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root {
    --nike-primary: #000000;
    --nike-neutral-100: #FFFFFF;
    --nike-neutral-200: #F7F7F7;
    --nike-neutral-300: #D6D6D6;
    --nike-neutral-500: #737373;
    --nike-neutral-700: #1A1A1A;
    --centauro-success-300: #006611;
    --nike-paragraph-tiny: 12px;
    --nike-label-medium: 14px;
    --nike-paragraph-medium: 16px;
    --nike-heading-2: 18px;
    --nike-heading-1: 32px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
  }

  body, #__next {
    background-color: var(--nike-neutral-700);
    height: 100%;
    width: 100%;
  }

  ul {
    list-style: none;
  }

`;
