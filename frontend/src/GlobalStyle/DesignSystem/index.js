import { css } from "styled-components";
import { Typography } from "./Typography";
import { Animation } from "./Animation";
import { Dimension } from "./Dimension";
import { Coloration } from "./Coloration";
import { Stylization } from "./Stylization";

export const DesignSystem = css`
  :root {
    ${Typography};
    ${Animation};
    ${Dimension};
    ${Coloration};
    ${Stylization};
  }
`;
