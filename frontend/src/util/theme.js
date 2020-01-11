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

const designSystem = {
  type: {
    baseFontSize: 20,

    sizes: {
      xs: "12px",
      s: "14px",
      base: "16px", // [default] p, h5, h6
      m: "20px", // h4
      l: "24px", // h3
      xl: "30px", // h2
      xxl: "40px" // h1
    },

    modularscale: {
      base: 20,
      ratio: 1.5
    },

    fontFamily,
    fontFamilyBase: [fontFamily.system, fontFamily.sans].join(","),
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
      red: "#a60505",
      black: "#343434"
    }
  },

  breakpoints: {
    s: 600,
    m: 960,
    l: 1280
  },

  zIndex: {
    low: 10,
    mid: 100,
    high: 1000
  },

  spacing: {
    baseline: 20,
    padding: "0.3em",
    scale: [0, 8, 16, 24, 32, 40, 48]
  },

  layout: {
    gutter: 20,
    maxWidth: 1080,
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

export const theme = new DesignSystem(designSystem, {
  fontSizeUnit: "rem"
});
