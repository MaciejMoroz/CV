import { createGlobalStyle } from 'styled-components/macro';
const GlobalStyle = createGlobalStyle`
  *,
  *::before, 
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html { 
    font-size:62.5%
  }

  body {
    font-family: 'Arimo', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2e2d41;
    cursor: default;
    font-size: 16px;
    position: relative;
    @media print {
      overflow: visible;
    }
  }


  button,
  input {
    font-family: 'Arimo', sans-serif;
    background-color: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
    text-align: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  input[type=number]::-webkit-outer-spin-button,
  input[type=number]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }

  input[type=number] {
      -moz-appearance:textfield;
  }

  a, img, div{
    -webkit-tap-highlight-color: transparent;
  }

  .bold { 
    font-weight: 700;
  }
  @media print {
  html, body {
    height: initial !important;
    overflow: initial !important;
    -webkit-print-color-adjust: exact;
  }
}


`;

export default GlobalStyle;
