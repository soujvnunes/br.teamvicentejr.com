import { createGlobalStyle } from "styled-components";
import reboot from "styled-reboot";
import reset from "styled-reset";
import { DesignSystem } from "./DesignSystem";
import eot from "../asset/misc/font/ccf21ebc0f90f99c5a63564d760f23aa.eot";
import woff2 from "../asset/misc/font/ccf21ebc0f90f99c5a63564d760f23aa.woff2";
import woff from "../asset/misc/font/ccf21ebc0f90f99c5a63564d760f23aa.woff";
import ttf from "../asset/misc/font/ccf21ebc0f90f99c5a63564d760f23aa.ttf";
import svg from "../asset/misc/font/ccf21ebc0f90f99c5a63564d760f23aa.svg";

const options = {
  black: "0, 0, 0",
  fontFamilyBase: "var(--ts)",
  fontFamilyMonospace: "var(--tm)",
  bodyColor: "hsla(var(--ctb), 1)",
  bodyBg: "hsla(var(--csb), 1)",
  linkColor: "inherit",
  linkDecoration: "inherit",
  linkHoverColor: "inherit",
  linkHoverDecoration: "inherit"
};

const rebootCss = reboot(options);

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: VLNL-Decks-W00-Bold;
    src: url("${eot}");
    src: url("${eot}?#iefix") format("embedded-opentype"), url("${woff2}") format("woff2"), url("${woff}") format("woff"), url("${ttf}") format("truetype"), url("${svg}#VLNL Decks W00 Bold") format("svg"); /* iOS 4.1- */
  }
  
  ${reset}
  ${rebootCss}
  ${DesignSystem}
`;

export default GlobalStyle;
