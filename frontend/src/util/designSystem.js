import { css } from "styled-components";

export const DesignSystem = css`
  :root {
    --font-system: azo-sans-web, VLNL-Decks-W00-Bold;
    --font-sans: var(--font-system, azo-sans-web), -apple-system,
      BlinkMacSystemFont, Helvetica Neue, Helvetica, Roboto, sans-serif;
    --font-serif: Georgia, "Times New Roman", Times, serif;
    --font-mono: var(--font-system, VLNL-Decks-W00-Bold), SFMono-Regular, Menlo,
      Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

    --transition-duration: 340ms;
    --transition-timing-function: cubic-bezier(0.75, 0.02, 0.25, 1);
    --transition: all var(--transition-duration)
      var(--transition-timing-function);

    --spacing: 8;

    --viewport: 1080;
    --viewport-mobile: 600;
    --viewport-landscape: 960;
    --viewport-desktop: 1280;

    --color-primary-light: #df4830;
    --color-primary-base: #a60505;
    --color-primary-dark: #700000;
    --color-secondary-light: #5e5e5e;
    --color-secondary-base: #343434;
    --color-secondary-dark: #0d0d0d;
    --color-tertiary-light: #d7d7d7;
    --color-tertiary-base: #a6a6a6;
    --color-tertiary-dark: #777777;
    --color-black: #000;
    --color-white: #fff;

    --border-width: calc(var(--spacing) * 0.25px);
    --border-style: solid;
    --border-color: currentColor;
    --border: var(--border-width) var(--border-style) var(--border-color);
    --radius: calc(var(--spacing) * 1px);
    --skew-X: calc(var(--spacing) * -2deg);
  }
`;
