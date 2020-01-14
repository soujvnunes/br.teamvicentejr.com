import { css } from "styled-components";

export const Stylization = css`
  --sbw: calc(var(--ds) * 0.25px); //stylization with border width
  --sbs: solid; //stylization with border style
  --sbc: currentColor; //stylization with border color
  --sb: var(--sbw) var(--sbs) var(--sbc); //stylization with border
  --sr: calc(var(--ds) * 0.5px); //stylization with border-radius
  --stsX: calc(var(--ds) * -2deg); //stylization with skew transformation
`;
