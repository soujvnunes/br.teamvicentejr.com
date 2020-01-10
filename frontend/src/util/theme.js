import DesignSystem from "design-system-utils";
import palette from "./palette";

const fontFamily = {
  system: "azo-sans-web",
  sans:
    "-apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Roboto, sans-serif",
  serif: 'Georgia, "Times New Roman", Times, serif',
  mono:
    'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
};

const transitions = {
  duration: "0.34s",
  timing: "cubic-bezier(0.75, 0.02, 0.25, 1)"
};

const theme = {
  type: {
    baseFontSize: "20px",

    sizes: {
      xs: "16px",
      s: "20px",
      base: "30px",
      m: "36px",
      l: "42px",
      xl: "50px",
      xxl: "58px"
    },

    fontFamily,
    fontFamilyBase: fontFamily.system,
    fontFamilyHeadings: fontFamily.mono,

    lineHeight: {
      headings: 1.1
    },

    fontWeight: {
      normal: 300, // Useful to set here if using anything other than `normal`
      bold: "bold", // Useful to set here when bold webfonts come as 400 font-weight.
      headings: "bold" // instead of browser default, bold
    }
  },

  colors: {
    colorPalette: palette,

    brand: {
      red: "#e82219",
      deeporange: "#ff7200",
      orange: "#ff9500",
      green: "#c4d000",
      teal: "#1aa5c8",
      navy: "#0052da"
    }
  },

  breakpoints: {
    s: 300,
    m: 500,
    l: 800
  },

  zIndex: {
    low: 10,
    mid: 100,
    high: 1000
  },

  spacing: {
    baseline: 20,
    padding: "0.3em",
    scale: [0, 8, 16, 24, 32, 40]
  },

  layout: {
    gutter: 20,
    maxWidth: 1200,
    grid: {
      columnCount: 12
    }
  },

  transition: {
    default: {
      duration: transitions.duration,
      timing: transitions.timing,
      transition: `all ${transitions.duration} ${transitions.timing}`
    }
  },

  borderRadius: "0.3em"
};

console.log(theme.type.fontFamily);

export default new DesignSystem(theme);
