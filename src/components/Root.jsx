import { css, Global } from '@emotion/react';

export const Root = ({ children }) => (
  <>
    <Global
      styles={css`
        @import url('https://rsms.me/inter/inter.css');
        html {
          font: 16px/1.2 'Inter', sans-serif;
          color: black;
        }
        @supports (font-variation-settings: normal) {
          html {
            font-family: 'Inter var', sans-serif;
          }
        }

        body {
          margin: 0;
        }
      `}
    />
    {children}
  </>
);
