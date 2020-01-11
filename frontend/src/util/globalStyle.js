import { createGlobalStyle } from "styled-components";
import reboot from "styled-reboot";
import { theme } from "./theme";
import eot from "../asset/font/ccf21ebc0f90f99c5a63564d760f23aa.eot";
import woff2 from "../asset/font/ccf21ebc0f90f99c5a63564d760f23aa.woff2";
import woff from "../asset/font/ccf21ebc0f90f99c5a63564d760f23aa.woff";
import ttf from "../asset/font/ccf21ebc0f90f99c5a63564d760f23aa.ttf";
import svg from "../asset/font/ccf21ebc0f90f99c5a63564d760f23aa.svg";

const options = {
  black: "0, 0, 0",
  fontFamilyBase: theme.get("type.fontFamilyBase"),
  fontFamilyMonospace: theme.get("type.fontFamilyHeadings"),
  fontSizeBase: "1rem",
  fontWeightBase: 400,
  lineHeightBase: 1.5,
  bodyColor: theme.get("colors.colorPalette.text.base"),
  bodyBg: theme.get("colors.colorPalette.background.base"),
  headingsMarginBottom: "0.5rem",
  paragraphMarginBottom: "1rem",
  labelMarginBottom: "0.5rem",
  dtFontWeight: 700,
  linkColor: "inherit",
  linkDecoration: "none",
  linkHoverColor: "inherit",
  linkHoverDecoration: "underline",
  tableCellPadding: "0.75rem",
  textMuted: "#6c757d"
};

const rebootCss = reboot(options);

const GlobalStyle = createGlobalStyle`
  ${rebootCss}
  
  @font-face {
    font-family: "VLNL-Decks-W00-Bold";
    src: url("${eot}"); /* IE9*/
    src: url("${eot}?#iefix")
        format("embedded-opentype"),
      /* IE6-IE8 */ url("${woff2}")
        format("woff2"),
      /* chrome、firefox */
        url("${woff}")
        format("woff"),
      /* chrome、firefox */
        url("${ttf}")
        format("truetype"),
      /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
        url("${svg}#VLNL Decks W00 Bold")
        format("svg"); /* iOS 4.1- */
  }
`;

export default GlobalStyle;
