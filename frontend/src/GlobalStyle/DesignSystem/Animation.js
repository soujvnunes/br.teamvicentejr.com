import { css } from "styled-components";

export const Animation = css`
  --ad: 340ms; //animation duration
  --af: cubic-bezier(0.75, 0.025, 0.25, 1); //animation function
  --a: all var(--ad) var(--af); //animation
`;
