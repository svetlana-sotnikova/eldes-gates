import { css, cx } from '@emotion/css';

const margin = css`
  margin: 1em 0;
`;

export const typography = {
  h1: cx(
    margin,
    css`
      font-size: 2.5em;
    `
  ),
  h2: cx(
    margin,
    css`
      font-size: 1.5em;
    `
  ),
};
