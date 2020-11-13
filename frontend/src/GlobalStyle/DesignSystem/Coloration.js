import { css } from "styled-components";

export const Coloration = css`
  // separation
  --cpH: 0; //coloration with primary hue
  --cpS: 94%; //coloration with primary saturation
  --cpL: 34%; //coloration with primary lightness
  --csH: 0; //coloration with secondary hue
  --csS: 0%; //coloration with secondary saturation
  --csL: 20%; //coloration with secondary lightness

  // configuration
  --ct: 50%; //coloration threshold
  --cr: 15%; //coloration radius

  // definition
  --cpLl: calc(
    var(--cpL) + var(--cr)
  ); //coloration with primary lightness lighten
  --cpLd: calc(
    var(--cpL) - var(--cr)
  ); //coloration with primary lightness darken
  --csLl: calc(
    var(--csL) + var(--cr)
  ); //coloration with secondary lightness lighten
  --csLd: calc(
    var(--csL) - var(--cr)
  ); //coloration with secondary lightness darken

  // formalization
  --cpl: var(--cpH), var(--cpS), var(--cpLl); //coloration with primary light
  --cpb: var(--cpH), var(--cpS), var(--cpL); //coloration with primary base
  --cpd: var(--cpH), var(--cpS), var(--cpLd); //coloration with primary dark
  --csl: var(--csH), var(--csS), var(--csLl); //coloration with secondary light
  --csb: var(--csH), var(--csS), var(--csL); //coloration with secondary base
  --csd: var(--csH), var(--csS), var(--csLd); //coloration with secondary dark
  --ctl: 0, 0%, 100%; //coloration with tertiary light
  --ctb: 0, 0%, 50%; //coloration with tertiary base
  --ctd: 0, 0%, 0%; //coloration with tertiary dark
`;
