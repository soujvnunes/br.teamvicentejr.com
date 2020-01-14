import { css } from "styled-components";

export const Typography = css`
  --tsp: azo-sans-web; //typography system primary
  --tss: VLNL-Decks-W00-Bold; //typography system secondary
  --ts: var(--tsp), -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
    Roboto, sans-serif; //typography sans-serif
  --tg: Georgia, "Times New Roman", Times, serif; //typography gothik (serif)
  --tm: var(--tss), SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace; //typography mono
`;
