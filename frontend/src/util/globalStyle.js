import theme from "./theme";
import { createGlobalStyle } from "styled-components";
import reboot from "styled-reboot";

const options = {
  black: "0, 0, 0",
  fontFamilyBase: theme.get("type.fontFamilyBase"),
  fontFamilyMonospace: theme.get("type.fontFamilyHeadings"),
  fontSizeBase: "1rem",
  fontWeightBase: 400,
  lineHeightBase: 1.5,
  bodyColor: "#fff",
  bodyBg: "#212529",
  headingsMarginBottom: "0.5rem",
  paragraphMarginBottom: "1rem",
  labelMarginBottom: "0.5rem",
  dtFontWeight: 700,
  linkColor: "#007bff",
  linkDecoration: "none",
  linkHoverColor: "#0056b3",
  linkHoverDecoration: "underline",
  tableCellPadding: "0.75rem",
  textMuted: "#6c757d"
};

const rebootCss = reboot(options);

const GlobalStyle = createGlobalStyle`
  ${rebootCss}
`;

export default GlobalStyle;
