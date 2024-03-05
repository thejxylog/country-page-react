import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --font-size-sm: 12px;
  --font-size-md: 14px;
  --font-size-lg: 16px;
  --font-size-xl: 32px;

  --color-stone-200: #D2D5DA;
  --color-stone-300: #6C727F;
  --color-stone-600: #282B30;
  --color-stone-800: #1B1D1F;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  color: var(--color-stone-200);
  font-family: "Be Vietnam Pro", sans-serif;
  line-height: 1;
  background-color: var(--color-stone-800);
}
`;

export default GlobalStyles;
