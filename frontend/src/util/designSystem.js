import { css } from "styled-components";

export const DesignSystem = css`
  :root {
    --font-system-primary: azo-sans-web;
    --font-system-secondary: VLNL-Decks-W00-Bold;
    --font-sans: var(--font-system-primary), -apple-system, BlinkMacSystemFont,
      Helvetica Neue, Helvetica, Roboto, sans-serif;
    --font-serif: Georgia, "Times New Roman", Times, serif;
    --font-mono: var(--font-system-secondary), SFMono-Regular, Menlo, Monaco,
      Consolas, "Liberation Mono", "Courier New", monospace;

    --transition-duration: 340ms;
    --transition-timing-function: cubic-bezier(0.75, 0.025, 0.25, 1);
    --transition: all var(--transition-duration)
      var(--transition-timing-function);

    --spacing: 8;

    --viewport: 1080;
    --viewport-mobile: 600;
    --viewport-landscape: 960;
    --viewport-desktop: 1280;

    --color-primary-light: 223, 72, 48;
    --color-primary-base: 166, 5, 5;
    --color-primary-dark: 112, 0, 0;
    --color-secondary-light: 94, 94, 94;
    --color-secondary-base: 52, 52, 52;
    --color-secondary-dark: 13, 13, 13;
    --color-tertiary-light: 215, 215, 215;
    --color-tertiary-base: 166, 166, 166;
    --color-tertiary-dark: 119, 119, 119;
    --color-black: 0, 0, 0;
    --color-white: 255, 255, 255;

    --border-width: calc(var(--spacing) * 0.25px);
    --border-style: solid;
    --border-color: currentColor;
    --border: var(--border-width) var(--border-style) var(--border-color);
    --radius: calc(var(--spacing) * 1px);
    --skew-X: calc(var(--spacing) * -2deg);
  }
`;
